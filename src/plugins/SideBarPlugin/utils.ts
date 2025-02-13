import {
  $copyNode,
  $createParagraphNode,
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isLineBreakNode,
  $isNodeSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  $isTextNode,
  BaseSelection,
  ElementNode,
  LexicalEditor,
  LexicalNode,
} from 'lexical'
import {$patchStyleText, $setBlocksType} from '@lexical/selection'
import {$getNearestBlockElementAncestorOrThrow} from '@lexical/utils'
import {$isDecoratorBlockNode} from '@lexical/react/LexicalDecoratorBlockNode'
import {$createHeadingNode, HeadingTagType} from '@lexical/rich-text'
import {DEFAULT_FONT_SIZE, MAX_ALLOWED_FONT_SIZE, MIN_ALLOWED_FONT_SIZE} from '../../constants.ts'
import {$createImageNode, $isImageNode, ImageNode} from '../../nodes/ImageNode.tsx'
import {$createImageBlockNode, $isImageBlockNode, ImageBlockNode} from '../../nodes/ImageBlockNode.ts'
import {$getEmailTemplateRoot} from '../../nodes/EmailTemplateRootNode.ts'
import {CONTENT_FONT_SIZE_CHANGE_EMAIL_COMMAND} from '../../commands.ts'
import {BaseStyleNode, BaseStyleNodeState} from '../../nodes/BaseStyleNode.ts'
import React from 'react'
import {
  $createButtonLinkNode,
  $isButtonLinkNode,
  ButtonLinkNode,
  ButtonLinkPayload,
} from '../../nodes/ButtonLinkNode.tsx'
import {
  $createButtonLinkBlockNode,
  $isButtonLinkBlockNode,
  ButtonLinkBlockNode,
} from '../../nodes/ButtonLinkBlockNode.ts'

export enum UpdateFontSizeType {
  increment = 1,
  decrement,
}

export const calculateNextFontSize = (
  currentFontSize: number,
  updateType: UpdateFontSizeType | null,
) => {
  if (!updateType) {
    return currentFontSize
  }

  let updatedFontSize: number = currentFontSize
  switch (updateType) {
    case UpdateFontSizeType.decrement:
      switch (true) {
        case currentFontSize > MAX_ALLOWED_FONT_SIZE:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE
          break
        case currentFontSize >= 48:
          updatedFontSize -= 12
          break
        case currentFontSize >= 24:
          updatedFontSize -= 4
          break
        case currentFontSize >= 14:
          updatedFontSize -= 2
          break
        case currentFontSize >= 9:
          updatedFontSize -= 1
          break
        default:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE
          break
      }
      break

    case UpdateFontSizeType.increment:
      switch (true) {
        case currentFontSize < MIN_ALLOWED_FONT_SIZE:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE
          break
        case currentFontSize < 12:
          updatedFontSize += 1
          break
        case currentFontSize < 20:
          updatedFontSize += 2
          break
        case currentFontSize < 36:
          updatedFontSize += 4
          break
        case currentFontSize <= 60:
          updatedFontSize += 12
          break
        default:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE
          break
      }
      break

    default:
      break
  }
  return updatedFontSize
}

export const updateFontSizeInSelection = (
  editor: LexicalEditor,
  newFontSize: string | null,
  updateType: UpdateFontSizeType | null,
  rootFontSize?: boolean,
) => {
  const getNextFontSize = (prevFontSize: string | null): string => {
    if (!prevFontSize) {
      prevFontSize = `${DEFAULT_FONT_SIZE}px`
    }
    prevFontSize = prevFontSize.slice(0, -2)
    const nextFontSize = calculateNextFontSize(
      Number(prevFontSize),
      updateType,
    )
    return `${nextFontSize}px`
  }

  editor.update(() => {
    if (editor.isEditable()) {
      if (rootFontSize) {
        const root = $getEmailTemplateRoot(editor)
        const fontSize = (newFontSize || getNextFontSize(`${root.getFontSize()}px`)).slice(0, -2)
        root.setFontSize(fontSize)
        editor.dispatchCommand(CONTENT_FONT_SIZE_CHANGE_EMAIL_COMMAND, Number(fontSize))
      } else {
        const selection = $getSelection()
        if (selection !== null) {
          $patchStyleText(selection, {
            'font-size': newFontSize || getNextFontSize,
          })
        }
      }
    }
  })
}

export function updateFontSize(
  editor: LexicalEditor,
  updateType: UpdateFontSizeType,
  inputValue: string,
  isRoot = false,
) {
  if (inputValue !== '') {
    const nextFontSize = calculateNextFontSize(Number(inputValue), updateType)
    updateFontSizeInSelection(editor, String(nextFontSize) + 'px', null, isRoot)
  } else {
    updateFontSizeInSelection(editor, null, updateType, isRoot)
  }
}

export const dropDownActiveClass = (active: boolean) => {
  if (active) {
    return 'active dropdown-item-active'
  } else {
    return ''
  }
}

export const clearFormatting = (editor: LexicalEditor) => {
  editor.update(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const anchor = selection.anchor
      const focus = selection.focus
      const nodes = selection.getNodes()

      if (anchor.key === focus.key && anchor.offset === focus.offset) {
        return
      }

      nodes.forEach((node, idx) => {
        // We split the first and last node by the selection
        // So that we don't format unselected text inside those nodes
        if ($isTextNode(node)) {
          // Use a separate variable to ensure TS does not lose the refinement
          let textNode = node
          if (idx === 0 && anchor.offset !== 0) {
            textNode = textNode.splitText(anchor.offset)[1] || textNode
          }
          if (idx === nodes.length - 1) {
            textNode = textNode.splitText(focus.offset)[0] || textNode
          }

          if (textNode.__style !== '') {
            textNode.setStyle('')
          }
          if (textNode.__format !== 0) {
            textNode.setFormat(0)
            $getNearestBlockElementAncestorOrThrow(textNode).setFormat('')
          }
        } else if ($isDecoratorBlockNode(node)) {
          node.setFormat('')
        }
      })
    }
  })
}

export const formatParagraph = (editor: LexicalEditor) => {
  editor.update(() => {
    const selection = $getSelection()
    const imageBlock = getLayoutBlockNode(selection)
    const buttonLink = getLayoutBlockNode(selection, false, true)
    const nodeToReplace = imageBlock || buttonLink || null

    if (nodeToReplace !== null) {
      const paragraph = $createParagraphNode()
      nodeToReplace.replace(paragraph)
      paragraph.selectEnd()
    } else {
      $setBlocksType(selection, () => $createParagraphNode())
    }
  })
}

export const formatLayoutBlock = (editor: LexicalEditor, typeOfBlock: 'image' | 'button-link' = 'image') => {
  editor.update(() => {
    const selection = $getSelection()
    if (selection === null) {
      return
    }

    const anchorNode = getAnchorNode(selection)
    const nodes = selection.getNodes()

    const firstSelectedBlock = anchorNode ? $getAncestor(anchorNode, INTERNAL_$isBlock) : false

    if (firstSelectedBlock && nodes.indexOf(firstSelectedBlock) === -1) {
      nodes.push(firstSelectedBlock)
    }

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (!INTERNAL_$isBlock(node)) {
        continue
      }
      let newNode: ImageBlockNode | ButtonLinkBlockNode | null = null
      if (typeOfBlock === 'image') {
        const imageNode = $createImageNode({})
        newNode = $createImageBlockNode()
        newNode.append(imageNode)
      } else if (typeOfBlock === 'button-link') {
        const buttonLinkNode = $createButtonLinkNode({
          text: node.getTextContent().slice(0, 10),
          paddingTop: 5,
          paddingRight: 10,
          paddingBottom: 5,
          paddingLeft: 10,
          borderRadius: 5,
          backgroundColor: '#007bff',
          color: '#ffffff',
          fontSize: '16px',
          borderLeftColor: '#63a9f4',
          borderRightColor: '#63a9f4',
          borderTopColor: '#63a9f4',
          borderBottomColor: '#63a9f4',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
        })
        newNode = $createButtonLinkBlockNode()
        newNode.append(buttonLinkNode)
      }
      if (newNode !== null) {
        node.replace(newNode)
        newNode.selectEnd()
      }
    }
  })
}

export const formatHeading = (
  editor: LexicalEditor,
  blockType: string,
  headingSize: HeadingTagType,
) => {
  if (blockType !== headingSize) {
    editor.update(() => {
      const selection = $getSelection()
      const imageBlock = getLayoutBlockNode(selection)
      const buttonLink = getLayoutBlockNode(selection, false, true)
      const nodeToReplace = imageBlock || buttonLink || null
      if (nodeToReplace !== null) {
        const headingNode = $createHeadingNode(headingSize)
        nodeToReplace.replace(headingNode)
        headingNode.selectEnd()
      } else {
        $setBlocksType(selection, () => $createHeadingNode(headingSize))
      }
    })
  }
}

export function INTERNAL_$isBlock(node: LexicalNode): node is ElementNode {
  if ($isDecoratorNode(node)) {
    return false
  }
  if (!$isElementNode(node) || $isRootOrShadowRoot(node)) {
    return false
  }

  const firstChild = node.getFirstChild()
  const isLeafElement =
    firstChild === null ||
    $isLineBreakNode(firstChild) ||
    $isTextNode(firstChild) ||
    firstChild.isInline()

  return !node.isInline() && node.canBeEmpty() && isLeafElement
}

export function $getAncestor<NodeType extends LexicalNode = LexicalNode>(
  node: LexicalNode,
  predicate: (ancestor: LexicalNode) => ancestor is NodeType,
) {
  let parent = node
  while (parent !== null && parent.getParent() !== null && !predicate(parent)) {
    parent = parent.getParentOrThrow()
  }
  return predicate(parent) ? parent : null
}

export const getAnchorNode = (selection: BaseSelection | null) => {
  const anchorAndFocus = selection?.getStartEndPoints()
  const anchor = anchorAndFocus ? anchorAndFocus[0] : null
  return anchor?.getNode()
}

export function getLayoutBlockNode(selection: BaseSelection | null, withChild: true, isButton?: false): [ImageBlockNode | null, ImageNode | null]
export function getLayoutBlockNode(selection: BaseSelection | null, withChild?: false, isButton?: false): ImageBlockNode | null
export function getLayoutBlockNode(selection: BaseSelection | null, withChild: true, isButton: true): [ButtonLinkBlockNode | null, ButtonLinkNode | null]
export function getLayoutBlockNode(selection: BaseSelection | null, withChild: false, isButton: true): ButtonLinkBlockNode | null
export function getLayoutBlockNode(selection: BaseSelection | null, withChild = false, isButton = false): [ImageBlockNode | null, ImageNode | null] | ImageBlockNode | null | [ButtonLinkBlockNode | null, ButtonLinkNode | null] | ButtonLinkBlockNode {
  const anchorNode = getAnchorNode(selection)
  if (anchorNode !== undefined && ((!isButton && $isImageBlockNode(anchorNode) || (isButton && $isButtonLinkBlockNode(anchorNode))))) {
    if (withChild) {
      const child = anchorNode.getFirstChild()
      if (child !== null && !isButton && $isImageNode(child)) {
        return [anchorNode, child]
      } else if (child !== null && isButton && $isButtonLinkNode(child)) {
        return [anchorNode, child]
      }
      return [anchorNode, null]
    }
    return anchorNode
  } else if (anchorNode === undefined && $isNodeSelection(selection)) {
    const nodes = selection.getNodes()
    if (nodes.length === 1 && !isButton && $isImageNode(nodes[0])) {
      const parent = nodes[0].getParent()
      if (parent !== null && $isImageBlockNode(parent)) {
        if (withChild) {
          return [parent, nodes[0]]
        }
        return parent
      }
    } else if (nodes.length === 1 && isButton && $isButtonLinkNode(nodes[0])) {
      const parent = nodes[0].getParent()
      if (parent !== null && $isButtonLinkBlockNode(parent)) {
        if (withChild) {
          return [parent, nodes[0]]
        }
        return parent
      }
    }
  }
  if (withChild) {
    return [null, null]
  }
  return null
}

export function formatPadding<T extends BaseStyleNode | ButtonLinkNode, K extends Partial<BaseStyleNodeState | ButtonLinkPayload>>(
  editor: LexicalEditor,
  padding: [number, number, number, number],
  node: T,
  setState: React.Dispatch<React.SetStateAction<K>>,
  element: HTMLInputElement,
) {
  editor.update(() => {
    node.setPadding(padding)
  }, {
    onUpdate: () => {
      setState(prev => ({
        ...prev,
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
      }))
      element.focus()
    },
  })
}

export function debounce<T extends (...args: Parameters<T>) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
}

export function copyBlockNodeToNew(blockNode: ElementNode) {
  const parent = blockNode.getParent()
  if (parent === null) {
    return
  }
  const latestBlock = blockNode.getLatest()
  const copyNode = $copyNode(latestBlock)
  const children = latestBlock.getChildren()
  copyNode.afterCloneFrom(latestBlock)
  copyNode.__next = null
  copyNode.__prev = null
  copyNode.__size = 0
  copyNode.__parent = null
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    let copyChild: LexicalNode | undefined = child
    if ($isElementNode(child)) {
      copyChild = copyBlockNodeToNew(child)
    } else {
      copyChild = $copyNode(child)
      copyChild.__next = null
      copyChild.__prev = null
      copyChild.__parent = null
    }
    if (copyChild !== undefined) {
      copyNode.append(copyChild)
    }
  }
  parent.append(copyNode)

  return copyNode
}

export const getImageWidthAndHeight = (src: string) => {
  const img = new Image()
  img.src = src
  return new Promise<{width: number, height: number}>(resolve => {
    img.onload = () => {
      resolve({width: img.width, height: img.height})
    }
  })
}