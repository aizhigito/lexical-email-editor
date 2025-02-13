import {
  DOMConversionMap, DOMExportOutput,
  EditorConfig,
  LexicalNode,
  Spread,
} from 'lexical'

import {addClassNamesToElement} from '@lexical/utils'
import {
  DEFAULT_EMAIL_BLOCK_BACKGROUND_COLOR, DEFAULT_EMAIL_BLOCK_PADDING,
  DEFAULT_EMAIL_LAYOUT_ITEM_BORDER,
  DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR,
} from '../constants.ts'
import {createElement} from '../utils/html.ts'
import {BaseStyleNode, BaseStyleNodeState, SerializedBaseStyleNode} from './BaseStyleNode.ts'

export type LayoutItemNodeState = BaseStyleNodeState & {
  borderLeftWidth: number
  borderLeftColor: string
  borderRightWidth: number
  borderRightColor: string
  borderTopWidth: number
  borderTopColor: string
  borderBottomWidth: number
  borderBottomColor: string
}

export type SerializedLayoutItemNode = Spread<LayoutItemNodeState, SerializedBaseStyleNode>;

export class LayoutItemNode extends BaseStyleNode {
  __borderLeft: number
  __borderLeftColor: string
  __borderRight: number
  __borderRightColor: string
  __borderTop: number
  __borderTopColor: string
  __borderBottom: number
  __borderBottomColor: string

  static getType(): string {
    return 'layout-item'
  }

  static clone(node: LayoutItemNode): LayoutItemNode {
    return new LayoutItemNode(
      node.__backgroundColor,
      node.__paddingLeft,
      node.__paddingRight,
      node.__paddingTop,
      node.__paddingBottom,
      node.__borderLeft,
      node.__borderLeftColor,
      node.__borderRight,
      node.__borderRightColor,
      node.__borderTop,
      node.__borderTopColor,
      node.__borderBottom,
      node.__borderBottomColor,
      node.__key
    )
  }

  constructor(
    backgroundColor: string = DEFAULT_EMAIL_BLOCK_BACKGROUND_COLOR,
    paddingLeft: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingRight: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingTop: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingBottom: number = DEFAULT_EMAIL_BLOCK_PADDING,
    borderLeft: number = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER,
    borderLeftColor: string = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR,
    borderRight: number = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER,
    borderRightColor: string = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR,
    borderTop: number = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER,
    borderTopColor: string = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR,
    borderBottom: number = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER,
    borderBottomColor: string = DEFAULT_EMAIL_LAYOUT_ITEM_BORDER_COLOR,
    key?: string
  ) {
    super(backgroundColor, paddingLeft, paddingRight, paddingTop, paddingBottom, key)
    this.__borderLeft = borderLeft
    this.__borderLeftColor = borderLeftColor
    this.__borderRight = borderRight
    this.__borderRightColor = borderRightColor
    this.__borderTop = borderTop
    this.__borderTopColor = borderTopColor
    this.__borderBottom = borderBottom
    this.__borderBottomColor = borderBottomColor
  }

  getState(): LayoutItemNodeState {
    const self = this.getLatest()
    return {
      ...super.getState(),
      borderLeftWidth: self.__borderLeft,
      borderLeftColor: self.__borderLeftColor,
      borderRightWidth: self.__borderRight,
      borderRightColor: self.__borderRightColor,
      borderTopWidth: self.__borderTop,
      borderTopColor: self.__borderTopColor,
      borderBottomWidth: self.__borderBottom,
      borderBottomColor: self.__borderBottomColor,
    }
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('div')
    dom.setAttribute('data-layout-item', 'true')
    dom.setAttribute('data-key', this.__key)
    dom.style.backgroundColor = this.__backgroundColor
    dom.style.borderLeft = `${this.__borderLeft}px solid ${this.__borderLeftColor}`
    dom.style.borderRight = `${this.__borderRight}px solid ${this.__borderRightColor}`
    dom.style.borderTop = `${this.__borderTop}px solid ${this.__borderTopColor}`
    dom.style.borderBottom = `${this.__borderBottom}px solid ${this.__borderBottomColor}`
    dom.style.paddingLeft = `${this.__paddingLeft}px`
    dom.style.paddingRight = `${this.__paddingRight}px`
    dom.style.paddingTop = `${this.__paddingTop}px`
    dom.style.paddingBottom = `${this.__paddingBottom}px`
    addClassNamesToElement(dom, config.theme.layoutItem)
    return dom
  }

  updateDOM(prevNode: LayoutItemNode, dom: HTMLElement): boolean {
    const update = super.updateDOM(prevNode, dom)
    if (this.__key !== prevNode.__key) {
      dom.setAttribute('data-key', this.__key)
    }
    if (
      prevNode.__borderLeft !== this.__borderLeft ||
      prevNode.__borderLeftColor !== this.__borderLeftColor ||
      prevNode.__borderRight !== this.__borderRight ||
      prevNode.__borderRightColor !== this.__borderRightColor ||
      prevNode.__borderTop !== this.__borderTop ||
      prevNode.__borderTopColor !== this.__borderTopColor ||
      prevNode.__borderBottom !== this.__borderBottom ||
      prevNode.__borderBottomColor !== this.__borderBottomColor
    ) {
      dom.style.backgroundColor = this.__backgroundColor
      dom.style.borderLeft = `${this.__borderLeft}px solid ${this.__borderLeftColor}`
      dom.style.borderRight = `${this.__borderRight}px solid ${this.__borderRightColor}`
      dom.style.borderTop = `${this.__borderTop}px solid ${this.__borderTopColor}`
      dom.style.borderBottom = `${this.__borderBottom}px solid ${this.__borderBottomColor}`
    }
    return update
  }

  static importDOM(): DOMConversionMap | null {
    return {}
  }

  static importJSON(json: SerializedLayoutItemNode): LayoutItemNode {
    const node = $createLayoutItemNode(json)
    node.setFormat(json.format)
    return node
  }

  isShadowRoot(): boolean {
    return true
  }

  canBeEmpty(): boolean {
    return false
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div')
    // <!--[if (!mso)&(!IE)]><!-->
    const comment1 = document.createComment('[if (!mso)&(!IE)]><!')
    const comment2 = document.createComment('<![endif]')
    const div = createElement(
      'div',
      {},
      {
        height: '100%',
        width: '100%!important',
        borderRadius: '0',
        '-webkit-border-radius': '0',
        '-moz-border-radius': '0',
        backgroundColor: this.__backgroundColor,
      },
    )
    const div2 = createElement(
      'div',
      {},
      {
        boxSizing: 'border-box',
        height: '100%',
        padding: `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`,
        borderLeft: `${this.__borderLeft}px solid ${this.__borderLeftColor}`,
        borderRight: `${this.__borderRight}px solid ${this.__borderRightColor}`,
        borderTop: `${this.__borderTop}px solid ${this.__borderTopColor}`,
        borderBottom: `${this.__borderBottom}px solid ${this.__borderBottomColor}`,
        borderRadius: '0',
        '-webkit-border-radius': '0',
        '-moz-border-radius': '0',
      },
    )
    div.append(comment1.cloneNode())
    div2.append(comment2.cloneNode())
    const table = createElement(
      'table',
      {
        role: 'presentation',
        cellpadding: '0',
        cellspacing: '0',
        border: '0',
        width: '100%',
        height: '100%',
      },
    )
    const tr = createElement('tr')
    const td = createElement(
      'td',
      {
        height: '100%',
        width: '100%',
        align: 'left',
      },
      {
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        padding: '0',
      },
    )
    return {
      after: (generatedElement) => {
        tr.append(td)
        table.append(tr)
        div2.appendChild(table)
        div.append(div2)
        if (generatedElement instanceof HTMLElement) {
          const children = Array.from(generatedElement.children)
          children.forEach((child) => {
            td.append(child)
          })
        }
        div2.append(comment1.cloneNode())
        div.append(comment2.cloneNode())
        return div
      },
      element,
    }
  }

  exportJSON(): SerializedLayoutItemNode {
    return {
      ...super.exportJSON(),
      borderLeftWidth: this.__borderLeft,
      borderLeftColor: this.__borderLeftColor,
      borderRightWidth: this.__borderRight,
      borderRightColor: this.__borderRightColor,
      borderTopWidth: this.__borderTop,
      borderTopColor: this.__borderTopColor,
      borderBottomWidth: this.__borderBottom,
      borderBottomColor: this.__borderBottomColor,
      type: 'layout-item',
    }
  }

  setBorder(
    top: number,
    topColor: string,
    right: number,
    rightColor: string,
    bottom: number,
    bottomColor: string,
    left: number,
    leftColor: string,
  ){
    const writable = this.getWritable()
    writable.__borderTop = top
    writable.__borderTopColor = topColor
    writable.__borderRight = right
    writable.__borderRightColor = rightColor
    writable.__borderBottom = bottom
    writable.__borderBottomColor = bottomColor
    writable.__borderLeft = left
    writable.__borderLeftColor = leftColor
  }
}

export function $createLayoutItemNode(payload: Partial<SerializedLayoutItemNode> = {}): LayoutItemNode {
  const {
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderLeftWidth,
    borderLeftColor,
    borderRightWidth,
    borderRightColor,
    borderTopWidth,
    borderTopColor,
    borderBottomWidth,
    borderBottomColor,
  } = payload
  return new LayoutItemNode(
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderLeftWidth,
    borderLeftColor,
    borderRightWidth,
    borderRightColor,
    borderTopWidth,
    borderTopColor,
    borderBottomWidth,
    borderBottomColor,
  )
}

export function $isLayoutItemNode(
  node: LexicalNode | null | undefined,
): node is LayoutItemNode {
  return node instanceof LayoutItemNode
}