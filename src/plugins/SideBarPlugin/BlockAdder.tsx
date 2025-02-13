import React, {useCallback, useEffect, useRef, useState} from 'react'
import {
  $createEmailTemplateBlockNode,
  $isEmailTemplateBlockNode,
  EmailTemplateBlockNode,
} from '../../nodes/EmailTemplateBlock.ts'
import {$createLayoutContainerNode} from '../../nodes/LayoutContainerNode.ts'
import {$createLayoutItemNode} from '../../nodes/LayoutItemNode.ts'
import {
  $createParagraphNode,
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  COMMAND_PRIORITY_HIGH, COMMAND_PRIORITY_LOW,
  DRAGOVER_COMMAND, DROP_COMMAND,
  LexicalEditor,
} from 'lexical'
import {createPortal} from 'react-dom'
import {eventFiles} from '../../utils/html.ts'
import {mergeRegister} from '@lexical/utils'
import {Point} from '../../utils/point.ts'
import {Rect} from '../../utils/rect.ts'
import {isHTMLElement} from '../../utils/guard.ts'
import {$getEmailTemplateRoot} from '../../nodes/EmailTemplateRootNode.ts'

const SPACE = 4
const TARGET_LINE_HALF_HEIGHT = 2
const DRAGGABLE_BLOCK_MENU_CLASSNAME = 'draggable-block-menu'
const DRAG_DATA_FORMAT = 'application/x-lexical-email-drag-block'
const TEXT_BOX_HORIZONTAL_PADDING = 28

const Downward = 1
const Upward = -1
const Indeterminate = 0

let prevIndex = Infinity

function getCurrentIndex(keysLength: number): number {
  if (keysLength === 0) {
    return Infinity
  }
  if (prevIndex >= 0 && prevIndex < keysLength) {
    return prevIndex
  }

  return Math.floor(keysLength / 2)
}

function getTopLevelNodeKeys(editor: LexicalEditor): string[] {
  return editor.getEditorState().read(() => $getEmailTemplateRoot(editor).getChildrenKeys())
}

function getCollapsedMargins(elem: HTMLElement): {
  marginTop: number;
  marginBottom: number;
} {
  const getMargin = (
    element: Element | null,
    margin: 'marginTop' | 'marginBottom',
  ): number =>
    element ? parseFloat(window.getComputedStyle(element)[margin]) : 0

  const {marginTop, marginBottom} = window.getComputedStyle(elem)
  const prevElemSiblingMarginBottom = getMargin(
    elem.previousElementSibling,
    'marginBottom',
  )
  const nextElemSiblingMarginTop = getMargin(
    elem.nextElementSibling,
    'marginTop',
  )
  const collapsedTopMargin = Math.max(
    parseFloat(marginTop),
    prevElemSiblingMarginBottom,
  )
  const collapsedBottomMargin = Math.max(
    parseFloat(marginBottom),
    nextElemSiblingMarginTop,
  )

  return {marginBottom: collapsedBottomMargin, marginTop: collapsedTopMargin}
}

function getBlockElement(
  editor: LexicalEditor,
  event: MouseEvent,
  useEdgeAsDefault = false,
): HTMLElement | null {
  const topLevelNodeKeys = getTopLevelNodeKeys(editor)

  let blockElem: HTMLElement | null = null

  editor.getEditorState().read(() => {
    if (useEdgeAsDefault) {
      const [firstNode, lastNode] = [
        editor.getElementByKey(topLevelNodeKeys[0]),
        editor.getElementByKey(topLevelNodeKeys[topLevelNodeKeys.length - 1]),
      ]

      const [firstNodeRect, lastNodeRect] = [
        firstNode?.getBoundingClientRect(),
        lastNode?.getBoundingClientRect(),
      ]

      if (firstNodeRect && lastNodeRect) {
        if (event.y < firstNodeRect.top) {
          blockElem = firstNode
        } else if (event.y > lastNodeRect.bottom) {
          blockElem = lastNode
        }

        if (blockElem) {
          return
        }
      }
    }

    let index = getCurrentIndex(topLevelNodeKeys.length)
    let direction = Indeterminate

    while (index >= 0 && index < topLevelNodeKeys.length) {
      const key = topLevelNodeKeys[index]
      const elem = editor.getElementByKey(key)
      if (elem === null) {
        break
      }
      const point = new Point(event.x, event.y)
      const domRect = Rect.fromDOM(elem, true)
      const {marginTop, marginBottom} = getCollapsedMargins(elem)

      const rect = domRect.generateNewRect({
        bottom: domRect.bottom + marginBottom,
        left: domRect.left,
        right: domRect.right,
        top: domRect.top - marginTop,
      })

      const {
        result,
        reason: {isOnTopSide, isOnBottomSide},
      } = rect.contains(point)


      if (result) {
        blockElem = elem
        prevIndex = index
        break
      }

      if (direction === Indeterminate) {
        if (isOnTopSide) {
          direction = Upward
        } else if (isOnBottomSide) {
          direction = Downward
        } else {
          // stop search block element
          direction = Infinity
        }
      }

      index += direction
    }
  })

  return blockElem
}

function isOnMenu(element: HTMLElement): boolean {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`)
}

function setMenuPosition(
  targetElem: HTMLElement | null,
  floatingElem: HTMLElement,
  anchorElem: HTMLElement,
) {
  if (!targetElem) {
    floatingElem.style.opacity = '0'
    floatingElem.style.transform = 'translate(-10000px, -10000px)'
    return
  }
  const targetRect = targetElem.getBoundingClientRect()
  const targetStyle = window.getComputedStyle(targetElem)
  const floatingElemRect = floatingElem.getBoundingClientRect()
  const anchorElementRect = anchorElem.getBoundingClientRect()
  const paddingTop = parseFloat(window.getComputedStyle(anchorElem).paddingTop)
  const marginTop = parseFloat(window.getComputedStyle(anchorElem).marginTop)
  const targetBeforeWidth = parseFloat(window.getComputedStyle(targetElem, ':before').width) || targetRect.width
  const top =
    targetRect.top + parseInt(targetStyle.height, 10) / 2 - floatingElemRect.height / 2 - anchorElementRect.top + paddingTop + marginTop
  floatingElem.style.opacity = '1'
  floatingElem.style.transform = `translate(-${Math.abs(targetBeforeWidth - targetRect.width) / 2 + floatingElemRect.width}px, ${top}px)`
}

function setTargetLine(
  targetLineElem: HTMLElement,
  targetBlockElem: HTMLElement,
  mouseY: number,
  anchorElem: HTMLElement,
) {
  const {top: targetBlockElemTop, height: targetBlockElemHeight} =
    targetBlockElem.getBoundingClientRect()
  const {top: anchorTop, width: anchorWidth} =
    anchorElem.getBoundingClientRect()

  const {marginTop, marginBottom} = getCollapsedMargins(targetBlockElem)
  let lineTop = targetBlockElemTop
  if (mouseY >= targetBlockElemTop) {
    lineTop += targetBlockElemHeight + marginBottom / 2
  } else {
    lineTop -= marginTop / 2
  }

  const top = lineTop - anchorTop - TARGET_LINE_HALF_HEIGHT
  const left = TEXT_BOX_HORIZONTAL_PADDING - SPACE

  targetLineElem.style.transform = `translate(${left}px, ${top}px)`
  targetLineElem.style.width = `${
    anchorWidth - (TEXT_BOX_HORIZONTAL_PADDING - SPACE) * 2
  }px`
  targetLineElem.style.opacity = '.4'
}

function setDragImage(
  dataTransfer: DataTransfer,
  draggableBlockElem: HTMLElement,
) {
  const {transform} = draggableBlockElem.style

  // Remove dragImage borders
  draggableBlockElem.style.transform = 'translateZ(-10)'
  dataTransfer.setDragImage(draggableBlockElem, -20, -20)

  setTimeout(() => {
    draggableBlockElem.style.transform = transform
  })
}

function hideTargetLine(targetLineElem: HTMLElement | null) {
  if (targetLineElem) {
    targetLineElem.style.opacity = '0'
    targetLineElem.style.transform = 'translate(-10000px, -10000px)'
  }
}

interface BlockAdderProps {
  editor: LexicalEditor
  anchorElem?: HTMLElement
}

export const BlockAdder: React.FC<BlockAdderProps> = ({editor, anchorElem = document.body}) => {
  const scrollerElem = anchorElem.parentElement
  const [blockElem, setBlockElem] = useState<HTMLElement | null>(null)
  const blockAdderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const targetLineRef = useRef<HTMLDivElement>(null)

  const $createBlock = useCallback(() => {
    const newBlock = $createEmailTemplateBlockNode()
    const newLayout = $createLayoutContainerNode('1fr')
    const layoutItem = $createLayoutItemNode()
    const paragraph = $createParagraphNode()
    layoutItem.append(paragraph)
    newLayout.append(layoutItem)
    newBlock.append(newLayout)
    return newBlock
  }, [])

  const handleAddAfterBlock = useCallback(() => {
    if (blockElem) {
      const nodeKey = blockElem.getAttribute('data-key')
      if (nodeKey) {
        editor.update(() => {
          const currentBlock = $getNodeByKey(nodeKey) as EmailTemplateBlockNode
          const newBlock = $createBlock()
          currentBlock.insertAfter(newBlock)
        })
      }
    }
  }, [editor, $createBlock, blockElem])

  const handleAddBeforeBlock = useCallback(() => {
    if (blockElem) {
      const nodeKey = blockElem.getAttribute('data-key')
      if (nodeKey) {
        editor.update(() => {
          const currentBlock = $getNodeByKey(nodeKey) as EmailTemplateBlockNode
          const newBlock = $createBlock()
          currentBlock.insertBefore(newBlock)
        })
      }
    }
  }, [editor, $createBlock, blockElem])

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      const target = event.target
      if (!isHTMLElement(target)) {
        setBlockElem(null)
        return
      }
      if (isOnMenu(target as HTMLElement)) {
        return
      }

      if (blockAdderRef.current?.contains(event.target as Node)) {
        return
      }
      const elem = getBlockElement(editor, event)
      if (elem === null || elem !== event.target) {
        setBlockElem(null)
        return
      }
      setBlockElem(elem)
    }

    const mouseLeave = () => {
      blockElem?.classList.remove('hovered')
      setBlockElem(null)
    }

    scrollerElem?.addEventListener('mousemove', mouseMove)
    scrollerElem?.addEventListener('mouseleave', mouseLeave)
    return () => {
      scrollerElem?.removeEventListener('mousemove', mouseMove)
      scrollerElem?.removeEventListener('mouseleave', mouseLeave)
    }
  }, [scrollerElem, anchorElem, editor])

  useEffect(() => {
    if (blockAdderRef.current) {
      setMenuPosition(blockElem, blockAdderRef.current, anchorElem)
      blockElem?.classList.add('hovered')
    }
    return () => {
      blockElem?.classList.remove('hovered')
    }
  }, [anchorElem, blockElem])

  useEffect(() => {
    function onDragover(event: DragEvent): boolean {
      if (!isDragging.current) {
        return false
      }
      const [isFileTransfer] = eventFiles(event)
      if (isFileTransfer) {
        return false
      }
      const {pageY, target} = event
      if (!isHTMLElement(target)) {
        return false
      }
      const targetBlockElem = getBlockElement(editor, event, true)
      const targetLineElem = targetLineRef.current
      if (targetBlockElem === null || targetLineElem === null) {
        return false
      }
      setTargetLine(targetLineElem, targetBlockElem, pageY, anchorElem)
      // Prevent default event to be able to trigger onDrop events
      event.preventDefault()
      return true
    }

    function onDrop(event: DragEvent): boolean {
      if (!isDragging.current) {
        return false
      }
      // if is file transfer, do not handle
      const [isFileTransfer] = eventFiles(event)
      if (isFileTransfer) {
        return false
      }
      const {target, dataTransfer, pageY} = event
      const dragData = dataTransfer?.getData(DRAG_DATA_FORMAT) || ''
      const draggedNode = $getNodeByKey(dragData)
      if (!draggedNode) {
        return false
      }
      if (!isHTMLElement(target)) {
        return false
      }
      const targetBlockElem = getBlockElement(editor, event, true)
      if (!targetBlockElem) {
        return false
      }
      const targetNode = $getNearestNodeFromDOMNode(targetBlockElem)
      if (!targetNode) {
        return false
      }
      if (targetNode === draggedNode) {
        return true
      }
      const targetBlockElemTop = (targetBlockElem as HTMLElement).getBoundingClientRect().top
      if (pageY >= targetBlockElemTop) {
        targetNode.insertAfter(draggedNode)
      } else {
        targetNode.insertBefore(draggedNode)
      }
      setBlockElem(null)

      return true
    }

    return mergeRegister(
      editor.registerCommand(
        DRAGOVER_COMMAND,
        (event) => {
          return onDragover(event)
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        DROP_COMMAND,
        (event) => {
          return onDrop(event)
        },
        COMMAND_PRIORITY_HIGH,
      ),
    )
  }, [anchorElem, editor])

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const dataTransfer = event.dataTransfer
    if (!dataTransfer || !blockElem) {
      return
    }
    setDragImage(dataTransfer, blockElem)
    let nodeKey = ''
    editor.update(() => {
      const node = $getNearestNodeFromDOMNode(blockElem)
      if ($isEmailTemplateBlockNode(node)) {
        nodeKey = node.getKey()
      }
    })
    isDragging.current = true
    dataTransfer.setData(DRAG_DATA_FORMAT, nodeKey)
  }

  const onDragEnd = () => {
    isDragging.current = false
    hideTargetLine(targetLineRef.current)
  }


  return createPortal(
    <>
      <div className="block-adder-box" ref={blockAdderRef}>
        <button type="button" onClick={handleAddBeforeBlock}>+</button>
        <div
          className="block-drag"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          draggable={true}
        >&#9783;</div>
        <button type="button" onClick={handleAddAfterBlock}>+</button>
      </div>
      <div className="draggable-block-target-line" ref={targetLineRef}/>
    </>
    ,
    anchorElem,
  )
}