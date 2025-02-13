import type {
  DOMConversionMap, DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from 'lexical'

import {addClassNamesToElement} from '@lexical/utils'
import {ElementNode} from 'lexical'
import {createElement, createOutlookComment, CreateOutlookCommentProps} from '../utils/html.ts'
import {EmailTemplateRootNode} from './EmailTemplateRootNode.ts'
import {EmailTemplateBlockNode} from './EmailTemplateBlock.ts'
import {getPixelOfColumns} from '../utils/style.ts'
import {LayoutItemNode} from './LayoutItemNode.ts'

export type LayoutContainerNodeState = {
  templateColumns: string
}

export type SerializedLayoutContainerNode = Spread<LayoutContainerNodeState, SerializedElementNode>;

export class LayoutContainerNode extends ElementNode {
  __templateColumns: string

  constructor(templateColumns: string, key?: NodeKey) {
    super(key)
    this.__templateColumns = templateColumns
  }

  static getType(): string {
    return 'layout-container'
  }

  static clone(node: LayoutContainerNode): LayoutContainerNode {
    return new LayoutContainerNode(node.__templateColumns, node.__key)
  }

  getState(): LayoutContainerNodeState {
    const self = this.getLatest()
    return {
      templateColumns: self.__templateColumns,
    }
  }
  getTemplateColumns(): string {
    return this.getLatest().__templateColumns
  }

  canBeEmpty(): boolean {
    return false
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('div')
    dom.style.gridTemplateColumns = this.__templateColumns
    addClassNamesToElement(dom, config.theme.layoutContainer)
    return dom
  }

  updateDOM(prevNode: LayoutContainerNode, dom: HTMLElement): boolean {
    if (prevNode.__templateColumns !== this.__templateColumns) {
      dom.style.gridTemplateColumns = this.__templateColumns
    }
    return false
  }

  static importDOM(): DOMConversionMap | null {
    return {}
  }

  static importJSON(json: SerializedLayoutContainerNode): LayoutContainerNode {
    return $createLayoutContainerNode(json.templateColumns)
  }

  exportDOM(): DOMExportOutput {
    const parent = this.getParent<EmailTemplateBlockNode>()?.getParent<EmailTemplateRootNode>()
    if (!parent) {
      return {element: document.createDocumentFragment()}
    }
    const element = document.createElement('div')
    const itemWidths = getPixelOfColumns(this.__templateColumns, parent.__layoutWidth)
    const comments: CreateOutlookCommentProps[] = [
      {
        comment: `<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="${parent.__alignItems}"><table cellpadding="0" cellspacing="0" border="0" style="width:${parent.__layoutWidth}px;"><tr style="background-color: transparent;">`,
        condition: 'oneOf',
      },
      {
        comment: '</tr></table></td></tr></table>',
        condition: 'oneOf',
      }
    ]

    const div = createElement(
      'div',
      {},
      {
        borderCollapse: 'collapse',
        display: 'table',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      }
    )
    div.append(createOutlookComment(comments[0]))
    return {
      after: (generatedElement) => {
        if (generatedElement instanceof HTMLElement) {
          const children = this.getChildren<LayoutItemNode>()
          const childElements = Array.from(generatedElement.children)
          childElements.forEach((child, index) => {
            const item = children[index]
            const outlookWidth = itemWidths[index][0] - item.__borderRight - item.__borderLeft
            div.append(createOutlookComment(
              {
                comment: `<td align="center" width="${outlookWidth}" style="width: ${outlookWidth}px;padding: ${item.__paddingTop}px ${item.__paddingRight}px ${item.__paddingBottom}px ${item.__paddingLeft}px;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top">`,
                condition: 'oneOf',
              }
            ))
            const itemElem = createElement(
              'div',
              {
                class: `layout-item layout-item-${itemWidths[index][1]}`,
              },
              {
                display: 'table-cell',
                maxWidth: '320px',
                minWidth: `${itemWidths[index][0]}px`,
                verticalAlign: 'top',
              }
            )
            itemElem.append(child)
            div.append(itemElem)
            div.append(createOutlookComment(
              {
                comment: '</td>',
                condition: 'oneOf',
              }
            ))
          })
        }
        div.append(createOutlookComment(comments[1]))
        return div
      },
      element
    }
  }

  exportJSON(): SerializedLayoutContainerNode {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns,
      type: 'layout-container',
      version: 1,
    }
  }

  setStyle(): this {
    return this
  }

  setTemplateColumns(templateColumns: string) {
    this.getWritable().__templateColumns = templateColumns
  }
}

export function $createLayoutContainerNode(
  templateColumns: string,
): LayoutContainerNode {
  return new LayoutContainerNode(templateColumns)
}

export function $isLayoutContainerNode(
  node: LexicalNode | null | undefined,
): node is LayoutContainerNode {
  return node instanceof LayoutContainerNode
}