import {
  $createParagraphNode,
  DecoratorNode, DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalNode,
  SerializedLexicalNode,
  Spread,
} from 'lexical'
import {JSX, Suspense} from 'react'
import {addClassNamesToElement} from '@lexical/utils'
import {ButtonLinkComponent} from './ButtonLinkComponent.tsx'
import {$createButtonLinkBlockNode, $isButtonLinkBlockNode} from './ButtonLinkBlockNode.ts'
import {createElement} from '../utils/html.ts'

export interface ButtonLinkPayload {
  url: string
  text: string
  backgroundColor: string
  color: string
  fontSize: string
  borderRadius: number
  borderLeftWidth: number
  borderRightWidth: number
  borderTopWidth: number
  borderBottomWidth: number
  borderLeftColor: string
  borderRightColor: string
  borderTopColor: string
  borderBottomColor: string
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  paddingLeft: number
}

export type SerializedButtonLinkNode = Spread<ButtonLinkPayload, SerializedLexicalNode>

export class ButtonLinkNode extends DecoratorNode<JSX.Element> {
  __url: string
  __text: string
  __backgroundColor: string
  __color: string
  __fontSize: string
  __borderRadius: number
  __borderLeftWidth: number
  __borderRightWidth: number
  __borderTopWidth: number
  __borderBottomWidth: number
  __borderLeftColor: string
  __borderRightColor: string
  __borderTopColor: string
  __borderBottomColor: string
  __paddingTop: number
  __paddingRight: number
  __paddingBottom: number
  __paddingLeft: number

  static getType(): string {
    return 'button-link'
  }

  static clone(node: ButtonLinkNode): ButtonLinkNode {
    return new ButtonLinkNode(
      node.__url,
      node.__text,
      node.__backgroundColor,
      node.__color,
      node.__fontSize,
      node.__borderRadius,
      node.__borderLeftWidth,
      node.__borderRightWidth,
      node.__borderTopWidth,
      node.__borderBottomWidth,
      node.__borderLeftColor,
      node.__borderRightColor,
      node.__borderTopColor,
      node.__borderBottomColor,
      node.__paddingTop,
      node.__paddingRight,
      node.__paddingBottom,
      node.__paddingLeft,
      node.__key,
    )
  }

  constructor(
    url?: string,
    text?: string,
    backgroundColor?: string,
    color?: string,
    fontSize?: string,
    borderRadius?: number,
    borderLeftWidth?: number,
    borderRightWidth?: number,
    borderTopWidth?: number,
    borderBottomWidth?: number,
    borderLeftColor?: string,
    borderRightColor?: string,
    borderTopColor?: string,
    borderBottomColor?: string,
    paddingTop?: number,
    paddingRight?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    key?: string,
  ) {
    super(key)
    this.__url = url || ''
    this.__text = text || ''
    this.__backgroundColor = backgroundColor || ''
    this.__color = color || ''
    this.__fontSize = fontSize || ''
    this.__borderRadius = borderRadius || 0
    this.__borderLeftWidth = borderLeftWidth || 0
    this.__borderRightWidth = borderRightWidth || 0
    this.__borderTopWidth = borderTopWidth || 0
    this.__borderBottomWidth = borderBottomWidth || 0
    this.__borderLeftColor = borderLeftColor || '#000000'
    this.__borderRightColor = borderRightColor || '#000000'
    this.__borderTopColor = borderTopColor || '#000000'
    this.__borderBottomColor = borderBottomColor || '#000000'
    this.__paddingTop = paddingTop || 0
    this.__paddingRight = paddingRight || 0
    this.__paddingBottom = paddingBottom || 0
    this.__paddingLeft = paddingLeft || 0
  }

  getState(): ButtonLinkPayload {
    const self = this.getLatest()
    return {
      url: self.__url,
      text: self.__text,
      backgroundColor: self.__backgroundColor,
      color: self.__color,
      fontSize: self.__fontSize,
      borderRadius: self.__borderRadius,
      borderLeftWidth: self.__borderLeftWidth,
      borderRightWidth: self.__borderRightWidth,
      borderTopWidth: self.__borderTopWidth,
      borderBottomWidth: self.__borderBottomWidth,
      borderLeftColor: self.__borderLeftColor,
      borderRightColor: self.__borderRightColor,
      borderTopColor: self.__borderTopColor,
      borderBottomColor: self.__borderBottomColor,
      paddingTop: self.__paddingTop,
      paddingRight: self.__paddingRight,
      paddingBottom: self.__paddingBottom,
      paddingLeft: self.__paddingLeft,
    }
  }

  setUrl(url: string): void {
    const writable = this.getWritable()
    writable.__url = url
  }

  setText(text: string): void {
    const writable = this.getWritable()
    writable.__text = text
  }

  setBackgroundColor(backgroundColor: string): void {
    const writable = this.getWritable()
    writable.__backgroundColor = backgroundColor
  }

  setColor(color: string): void {
    const writable = this.getWritable()
    writable.__color = color
  }

  setFontSize(fontSize: string): void {
    const writable = this.getWritable()
    writable.__fontSize = fontSize
  }

  setBorderRadius(borderRadius: number): void {
    const writable = this.getWritable()
    writable.__borderRadius = borderRadius
  }

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span')
    span.setAttribute('data-button-link', 'true')
    addClassNamesToElement(span, config.theme.buttonLink)
    return span
  }

  updateDOM(): false {
    return false
  }

  static importJSON(serializedNode: SerializedButtonLinkNode): ButtonLinkNode {
    return $createButtonLinkNode(serializedNode)
  }

  exportJSON(): SerializedLexicalNode {
    return {
      ...this.getState(),
      type: 'button-link',
      version: 1
    }
  }

  exportDOM(): DOMExportOutput {
    const parent = this.getParent()
    if (!$isButtonLinkBlockNode(parent)) {
      throw new Error('ButtonLinkNode must be a child of ButtonLinkBlockNode')
    }
    const element = document.createDocumentFragment()
    const a = createElement(
      'a',
      {
        href: this.__url,
        target: '_blank',
        class: 'v-button',
      },
      {
        boxSizing: 'border-box',
        display: 'inline-block',
        textDecoration: 'none',
        '-webkit-text-size-adjust': 'none',
        textAlign: 'center',
        color: this.__color,
        backgroundColor: this.__backgroundColor,
        borderRadius: `${this.__borderRadius}px`,
        '-webkit-border-radius': `${this.__borderRadius}px`,
        '-moz-border-radius': `${this.__borderRadius}px`,
        width: 'auto',
        maxWidth: '100%',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
        'mso-border-alt': 'none',
        fontSize: this.__fontSize,
        borderLeft: `${this.__borderLeftWidth}px solid ${this.__borderLeftColor}`,
        borderRight: `${this.__borderRightWidth}px solid ${this.__borderRightColor}`,
        borderTop: `${this.__borderTopWidth}px solid ${this.__borderTopColor}`,
        borderBottom: `${this.__borderBottomWidth}px solid ${this.__borderBottomColor}`,
        lineHeight: '17px',
      }
    )
    const span = createElement(
      'span',
      {},
      {
        display: 'block',
        padding: `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`,
      }
    )
    span.textContent = this.__text
    a.appendChild(span)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('Canvas context not available')
    }
    context.font = `${this.__fontSize} Arial`
    const rectHeight = 17 + this.__paddingTop + this.__paddingBottom
    const rectWidth = Math.round(this.__paddingLeft + this.__paddingRight + context.measureText(this.__text).width)
    const arcSize = Math.round((this.__borderRadius / Math.min(rectHeight, rectWidth)) * 100) + 0.5
    const comment = document.createComment('[if mso]><style>.v-button {background: transparent !important;}</style><![endif]')
    const comment2 = document.createComment(`[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:${rectHeight}px; v-text-anchor:middle; width:${rectWidth}px;" arcsize="${arcSize}%"  stroke="f" fillcolor="${this.__backgroundColor}"><w:anchorlock/><center style="color:${this.__color};"><![endif]`)
    const comment3 = document.createComment(`[if mso]></center></v:roundrect><![endif]`)
    const div = createElement('div', {align: parent.getFormatType()})
    div.appendChild(comment)
    div.appendChild(comment2)
    div.appendChild(a)
    div.appendChild(comment3)
    element.appendChild(div)
    return {element}
  }

  insertAfter(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode {
    return super.insertAfter(nodeToInsert, restoreSelection)
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <ButtonLinkComponent
          url={this.__url}
          text={this.__text}
          backgroundColor={this.__backgroundColor}
          color={this.__color}
          fontSize={this.__fontSize}
          borderRadius={this.__borderRadius}
          borderLeftWidth={this.__borderLeftWidth}
          borderRightWidth={this.__borderRightWidth}
          borderTopWidth={this.__borderTopWidth}
          borderBottomWidth={this.__borderBottomWidth}
          borderLeftColor={this.__borderLeftColor}
          borderRightColor={this.__borderRightColor}
          borderTopColor={this.__borderTopColor}
          borderBottomColor={this.__borderBottomColor}
          paddingTop={this.__paddingTop}
          paddingRight={this.__paddingRight}
          paddingBottom={this.__paddingBottom}
          paddingLeft={this.__paddingLeft}
          nodeKey={this.getKey()}
        />
      </Suspense>
    )
  }

  isParentRequired(): boolean {
    return true
  }

  createParentElementNode(): ElementNode {
    return $createButtonLinkBlockNode()
  }

  remove(preserveEmptyParent?: boolean) {
    const parent = this.getParent()
    const prev = parent?.getPreviousSibling()
    if (!prev) {
      parent?.insertBefore($createParagraphNode())
    }
    super.remove(preserveEmptyParent)
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
    writable.__borderTopWidth = top
    writable.__borderTopColor = topColor
    writable.__borderRightWidth = right
    writable.__borderRightColor = rightColor
    writable.__borderBottomWidth = bottom
    writable.__borderBottomColor = bottomColor
    writable.__borderLeftWidth = left
    writable.__borderLeftColor = leftColor
  }

  setPadding(
    padding: [number, number, number, number]
  ){
    const writable = this.getWritable()
    writable.__paddingTop = padding[0]
    writable.__paddingRight = padding[1]
    writable.__paddingBottom = padding[2]
    writable.__paddingLeft = padding[3]
  }
}

export const $createButtonLinkNode = (props: Partial<ButtonLinkPayload> = {}): ButtonLinkNode => {
  const {
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
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = props

  return new ButtonLinkNode(
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
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  )
}

export const $isButtonLinkNode = (node: LexicalNode): node is ButtonLinkNode => {
  return node instanceof ButtonLinkNode
}