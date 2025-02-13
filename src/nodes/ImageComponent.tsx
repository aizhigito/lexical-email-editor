import {
  $createParagraphNode,
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  BaseSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  NodeKey,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'

import './ImageNode.css'

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {useLexicalEditable} from '@lexical/react/useLexicalEditable'
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection'
import {mergeRegister} from '@lexical/utils'
import {JSX, Suspense, useCallback, useEffect, useRef, useState} from 'react'

import {$isImageNode} from './ImageNode'
import ImageResizer from '../ui/ImageResizer.tsx'
import {$isImageBlockNode} from './ImageBlockNode.ts'
import {RATION_CHANGE_IMAGE_COMMAND} from '../commands.ts'

const imageCache = new Set()

const NO_IMAGE_SRC = 'data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22%23f0f0f0%22/><text x=%2250%25%22 y=%2250%25%22 alignment-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2216%22 fill=%22%23888%22>No Image</text></svg>'

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        imageCache.add(src)
        resolve(null)
      }
      img.onerror = () => {
        imageCache.add(src)
      }
    })
  }
}

function LazyImage({
                     altText,
                     className,
                     imageRef,
                     src,
                     width,
                     height,
                   }: {
  altText: string;
  className: string | null;
  height: '100%' | number;
  imageRef: { current: null | HTMLImageElement };
  src: string;
  width: '100%' | number;
}): JSX.Element {
  useSuspenseImage(src || NO_IMAGE_SRC)
  return (
    <img
      className={className || undefined}
      src={src || NO_IMAGE_SRC}
      alt={altText}
      ref={imageRef}
      style={{
        height,
        width,
        verticalAlign: 'middle',
      }}
      draggable="false"
    />
  )
}

export default function ImageComponent({
                                         src,
                                         altText,
                                         nodeKey,
                                         width,
                                         height,
                                         resizable,
                                         showCaption,
                                         // caption,
                                         captionsEnabled,
                                       }: {
  altText: string;
  caption: string;
  height: '100%' | number;
  nodeKey: NodeKey;
  resizable: boolean;
  showCaption: boolean;
  src: string;
  width: '100%' | number;
  captionsEnabled: boolean;
}): JSX.Element {
  const imageRef = useRef<null | HTMLImageElement>(null)
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [editor] = useLexicalComposerContext()
  const [selection, setSelection] = useState<BaseSelection | null>(null)
  const activeEditorRef = useRef<LexicalEditor | null>(null)
  const isEditable = useLexicalEditable()

  const $onDelete = useCallback(
    (payload: KeyboardEvent) => {
      const deleteSelection = $getSelection()
      if (isSelected && $isNodeSelection(deleteSelection)) {
        payload.preventDefault()
        editor.update(() => {
          deleteSelection.getNodes().forEach((node) => {
            if ($isImageNode(node)) {
              node.remove()
            }
          })
        })
      } else if ($isRangeSelection(deleteSelection) && deleteSelection.isCollapsed()) {
        const node = deleteSelection.anchor.getNode()
        const previousNode = node.getPreviousSibling()
        if ($isImageBlockNode(previousNode)) {
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
        if ($isImageBlockNode(node)) {
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

      if (isResizing) {
        return true
      }
      if (event.target === imageRef.current) {
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
    [isResizing, isSelected, setSelected, clearSelection],
  )

  useEffect(() => {
    let isMounted = true
    const unregister = mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()))
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
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
      isMounted = false
      unregister()
    }
  }, [
    clearSelection,
    editor,
    isResizing,
    isSelected,
    nodeKey,
    $onDelete,
    $onEnter,
    onClick,
    setSelected,
  ])

  const onResizeEnd = (
    nextWidth: '100%' | number,
    nextHeight: '100%' | number,
  ) => {
    // Delay hiding the resize bars for click case
    setTimeout(() => {
      setIsResizing(false)
    }, 200)

    editor.update(() => {
      const node = $getNodeByKey(nodeKey)
      if ($isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight)
      }
    })

    editor.dispatchCommand(
      RATION_CHANGE_IMAGE_COMMAND,
      {
        width: nextWidth === '100%' ? 0 : nextWidth,
        height: nextHeight === '100%' ? 0 : nextHeight,
      })
  }

  const onResizeStart = () => {
    setIsResizing(true)
  }

  const isFocused = (isSelected || isResizing) && isEditable
  return (
    <Suspense fallback={null}>
      <>
        <div>
          <LazyImage
            className={
              isFocused
                ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}`
                : null
            }
            src={src}
            altText={altText}
            imageRef={imageRef}
            width={width}
            height={height}
          />
        </div>
        {resizable && $isNodeSelection(selection) && isFocused && (
          <ImageResizer
            showCaption={showCaption}
            editor={editor}
            imageRef={imageRef}
            onResizeStart={onResizeStart}
            onResizeEnd={onResizeEnd}
            captionsEnabled={captionsEnabled}
          />
        )}
      </>
    </Suspense>
  )
}