import {$createParagraphNode, LexicalEditor} from 'lexical'
import React, {useCallback, useEffect, useState} from 'react'
import {DropdownColorPicker} from '../../ui/ColorPicker'
import {EmailTemplateBlockNode, SerializedEmailTemplateBlockNode} from '../../nodes/EmailTemplateBlock.ts'
import {$isLayoutContainerNode} from '../../nodes/LayoutContainerNode.ts'
import {BLOCK_LAYOUTS} from '../../constants.ts'
import {$createLayoutItemNode, LayoutItemNode} from '../../nodes/LayoutItemNode.ts'
import {PaddingChanger} from './PaddingChanger.tsx'
import {copyBlockNodeToNew, formatPadding} from './utils.ts'
import {SidebarBoxLayout} from './SidebarBoxLayout.tsx'

interface BlockSidebarProps {
  editor: LexicalEditor
  node: EmailTemplateBlockNode
  onClose: () => void
  onDelete: () => void
}

type BlockSidebarState = SerializedEmailTemplateBlockNode & {
  templateColumns: string
}

export const BlockSidebar: React.FC<BlockSidebarProps> = ({editor, node, onClose, onDelete}) => {
  const [state, setState] = useState<Partial<BlockSidebarState>>({})

  const $onLayoutChange = useCallback((templateColumns: string) => {
    const columns = templateColumns.split(' ').length
    editor.update(() => {
      const layoutNode = node.getFirstChild()
      if ($isLayoutContainerNode(layoutNode)) {
        layoutNode.setTemplateColumns(templateColumns)
        const layoutItems = layoutNode.getChildren<LayoutItemNode>()
        if (layoutItems.length > columns) {
          layoutItems.slice(columns).forEach(item => item.remove())
        } else if (layoutItems.length < columns) {
          for (let i = layoutItems.length; i < columns; i++) {
            const newLayoutItem = $createLayoutItemNode()
            const paragraph = $createParagraphNode()
            newLayoutItem.append(paragraph)
            layoutNode.append(newLayoutItem)
          }
        }
      }
    }, {
      onUpdate: () => {
        setState(prev => ({...prev, templateColumns}))
      },
    })
  }, [editor, node])

  const $onBgColorChange = useCallback((color: string, skipHistoryStack: boolean) => {
    editor.update(() => {
      node.setBackgroundColor(color)
    }, {
      onUpdate: () => {
        setState(prevState => {
          return {
            ...prevState,
            backgroundColor: color,
          }
        })
      },
      ...skipHistoryStack ? {tag: 'historic'} : {},
    })
  }, [editor, node])

  const $onPaddingChange = useCallback((padding: [number, number, number, number], elem: HTMLInputElement) => {
    formatPadding(editor, padding, node, setState, elem)
  }, [editor, node])

  useEffect(() => {
    const element = editor.getElementByKey(node.getKey())
    let initialState: Partial<BlockSidebarState> = {templateColumns: '1fr'}
    editor.read(() => {
      initialState = node.getState()
      const layoutNode = node.getFirstChild()
      if ($isLayoutContainerNode(layoutNode)) {
        initialState.templateColumns = layoutNode.getTemplateColumns()
      }
    })
    setState(initialState)
    element?.classList.add('selected')
    return () => {
      element?.classList.remove('selected')
    }
  }, [editor, node])

  return (
    <SidebarBoxLayout onDelete={onDelete} onClose={onClose}>
      <dl>
        <dt>
          Copy to New Block
        </dt>
        <dd>
          <button
            type="button"
            className="button button-primary"
            onClick={() => {
              editor.update(() => {
                copyBlockNodeToNew(node)
              })
            }}
          >
            Copy
          </button>
        </dd>
        <dt>Layout</dt>
        <dd style={{gridColumnStart: 1, gridColumnEnd: 3}}>
          <div className="layout-picker-box">
            {
              BLOCK_LAYOUTS.map((column, index) => (
                <div
                  className={`layout-picker ${column.value === state.templateColumns ? 'active' : ''}`}
                  key={index}
                  onClick={() => {
                    $onLayoutChange(column.value)
                  }}
                  style={{
                    gridTemplateColumns: column.value,
                    pointerEvents: column.value === state.templateColumns ? 'none' : 'auto',
                  }}
                >
                  {
                    column.label.map((label, index) => (
                      <div key={index} className="layout-picker-item">
                        {label}
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </dd>
        <dt>
          Background Color
        </dt>
        <dd>
          <DropdownColorPicker
            color={state.backgroundColor || ''}
            onChange={$onBgColorChange}
          />
        </dd>
        <dt>
          Padding
        </dt>
        <dd>
          <PaddingChanger
            padding={[state.paddingTop || 0, state.paddingRight || 0, state.paddingBottom || 0, state.paddingLeft || 0]}
            onUpdate={$onPaddingChange}
          />
        </dd>
      </dl>
    </SidebarBoxLayout>
  )
}