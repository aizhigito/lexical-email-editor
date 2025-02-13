import React, {useCallback, useEffect, useRef} from 'react'
import {$isButtonLinkNode, ButtonLinkPayload} from './ButtonLinkNode.tsx'
import {
  $createParagraphNode,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection, CLICK_COMMAND, COMMAND_PRIORITY_LOW, KEY_BACKSPACE_COMMAND, KEY_DELETE_COMMAND, KEY_ENTER_COMMAND,
  NodeKey,
} from 'lexical'
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$isButtonLinkBlockNode} from './ButtonLinkBlockNode.ts'
import {mergeRegister} from '@lexical/utils'

export const ButtonLinkComponent: React.FC<ButtonLinkPayload & { nodeKey: NodeKey }> = (
  {
    url,
    text,
    backgroundColor,
    color,
    fontSize,
    borderRadius,
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftColor,
    borderRightColor,
    borderTopColor,
    borderBottomColor,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    nodeKey,
  },
) => {

  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey)
  const [editor] = useLexicalComposerContext()
  const linkRef = useRef<HTMLAnchorElement>(null)

  const $onDelete = useCallback(
    (payload: KeyboardEvent) => {
      const deleteSelection = $getSelection()
      if (isSelected && $isNodeSelection(deleteSelection)) {
        payload.preventDefault()
        editor.update(() => {
          deleteSelection.getNodes().forEach((node) => {
            if ($isButtonLinkNode(node)) {
              node.remove()
            }
          })
        })
      } else if ($isRangeSelection(deleteSelection) && deleteSelection.isCollapsed()) {
        const node = deleteSelection.anchor.getNode()
        const previousNode = node.getPreviousSibling()
        if ($isButtonLinkBlockNode(previousNode)) {
          payload.preventDefault()
          node.remove()
          previousNode.select()
          return true
        }
      }
      return false
    },
    [editor, isSelected],
  )

  const $onEnter = useCallback(
    (event: KeyboardEvent) => {
      const latestSelection = $getSelection()
      if ($isRangeSelection(latestSelection)) {
        const node = latestSelection.anchor.getNode()
        if ($isButtonLinkBlockNode(node)) {
          $setSelection(null)
          event.preventDefault()
          const paragraph = $createParagraphNode()
          if (latestSelection.anchor.offset === 0) {
            node.insertBefore(paragraph)
          } else {
            node.insertAfter(paragraph)
          }
          paragraph.select()
          return true
        }
      }
      return false
    },
    [],
  )

  const onClick = useCallback(
    (payload: MouseEvent) => {
      const event = payload
      if (event.target === linkRef.current) {
        if (event.shiftKey) {
          setSelected(!isSelected)
        } else {
          clearSelection()
          setSelected(true)
        }
        return true
      }

      return false
    },
    [setSelected, clearSelection, isSelected],
  )

  useEffect(() => {
    const unregister = mergeRegister(
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        onClick,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        $onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        $onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(KEY_ENTER_COMMAND, $onEnter, COMMAND_PRIORITY_LOW),
    )

    return () => {
      unregister()
    }
  }, [
    clearSelection,
    editor,
    isSelected,
    nodeKey,
    $onDelete,
    $onEnter,
    onClick,
    setSelected,
  ])

  return (
    <a
      ref={linkRef}
      href={url}
      style={{
        backgroundColor,
        color,
        fontSize,
        borderRadius: borderRadius + 'px',
        borderLeftWidth,
        borderRightWidth,
        borderTopWidth,
        borderBottomWidth,
        borderLeftColor,
        borderRightColor,
        borderTopColor,
        borderBottomColor,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        borderStyle: 'solid',
        lineHeight: '17px',
      }}
    >
      {text}
    </a>
  )
}