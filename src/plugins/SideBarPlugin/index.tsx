import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {
  $getNodeByKey,
  $setSelection,
  LexicalEditor, LexicalNode,
} from 'lexical'

import {
  $isEmailTemplateBlockNode,
  EmailTemplateBlockNode,
} from '../../nodes/EmailTemplateBlock.ts'
import {
  $isLayoutItemNode,
  LayoutItemNode,
} from '../../nodes/LayoutItemNode.ts'
import {BlockAdder} from './BlockAdder.tsx'
import {BodyLayoutSidebar} from './BodyLayoutSidebar.tsx'
import {BlockSidebar} from './BlockSidebar.tsx'
import {LayoutItemSidebar} from './LayoutItemSidebar.tsx'
import {ImageUploadCallback} from '../../App.tsx'

interface SideBarPluginProps extends ImageUploadCallback{
  editor: LexicalEditor
  anchorElem: HTMLElement
}

export function SideBarPlugin(
  {
    editor,
    anchorElem,
    imageUploadCallback,
  }: SideBarPluginProps,
): React.ReactElement {
  const [selectedBlock, setSelectedBlock] = useState<EmailTemplateBlockNode | null>(null)
  const [selectedLayoutItem, setSelectedLayoutItem] = useState<LayoutItemNode | null>(null)


  const $onClickEditor = useCallback((e: MouseEvent) => {
    const rootElement = editor.getRootElement()
    let target = e.target as HTMLElement | null
    while (rootElement !== target && target !== null) {
      const key = target.getAttribute('data-key')
      if (key) {
        let node: LexicalNode | null = null
        editor.read(() => {
          node = $getNodeByKey(key)
        })
        if ($isEmailTemplateBlockNode(node)) {
          setSelectedBlock(node)
          setSelectedLayoutItem(null)
          editor.update(() => {
            $setSelection(null)
          })
          return
        } else if ($isLayoutItemNode(node)) {
          setSelectedBlock(null)
          setSelectedLayoutItem(node)
          return
        }
      }
      target = target.parentElement
    }
  }, [editor])

  const onLayoutItemClose = useCallback(() => {
    setSelectedLayoutItem(null)
  }, [])

  const onBlockClose = useCallback(() => {
    setSelectedBlock(null)
  }, [])

  const $onBlockDelete = useCallback(() => {
    if (selectedBlock) {
      editor.update(() => {
        selectedBlock.remove()
      })
      setSelectedBlock(null)
    }
  }, [editor, selectedBlock])

  useEffect(() => {
    return editor.registerRootListener((rootElement, prevRootElement) => {
      if (prevRootElement !== null) {
        prevRootElement.removeEventListener('click', $onClickEditor)
      }
      if (rootElement !== null) {
        rootElement.addEventListener('click', $onClickEditor)
      }
    })
  }, [editor, $onClickEditor])

  const sidebarContent = useMemo(() => {
    if (selectedBlock) {
      return (
        <BlockSidebar
          editor={editor}
          node={selectedBlock}
          onClose={onBlockClose}
          onDelete={$onBlockDelete}
        />
      )
    }
    if (selectedLayoutItem) {
      return (
        <LayoutItemSidebar
          editor={editor}
          node={selectedLayoutItem}
          onClose={onLayoutItemClose}
          imageUploadCallback={imageUploadCallback}
        />
      )
    }
    return <BodyLayoutSidebar editor={editor}/>
  }, [selectedBlock, selectedLayoutItem, editor, onBlockClose, $onBlockDelete, onLayoutItemClose])

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {sidebarContent}
      </div>
      <BlockAdder editor={editor} anchorElem={anchorElem}/>
    </div>
  )
}