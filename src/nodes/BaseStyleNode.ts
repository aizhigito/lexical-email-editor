import {ElementNode, SerializedElementNode, Spread} from 'lexical'
import {DEFAULT_EMAIL_BLOCK_BACKGROUND_COLOR, DEFAULT_EMAIL_BLOCK_PADDING} from '../constants.ts'
import {SerializedEmailTemplateBlockNode} from './EmailTemplateBlock.ts'

export type BaseStyleNodeState = {
  backgroundColor: string
  paddingLeft: number
  paddingRight: number
  paddingTop: number
  paddingBottom: number
}

export type SerializedBaseStyleNode = Spread<BaseStyleNodeState, SerializedElementNode>


export class BaseStyleNode extends ElementNode {
  __backgroundColor: string
  __paddingLeft: number
  __paddingRight: number
  __paddingTop: number
  __paddingBottom: number

  constructor(
    backgroundColor: string = DEFAULT_EMAIL_BLOCK_BACKGROUND_COLOR,
    paddingLeft: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingRight: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingTop: number = DEFAULT_EMAIL_BLOCK_PADDING,
    paddingBottom: number = DEFAULT_EMAIL_BLOCK_PADDING,
    key?: string,
  ) {
    super(key)
    this.__backgroundColor = backgroundColor
    this.__paddingLeft = paddingLeft
    this.__paddingRight = paddingRight
    this.__paddingTop = paddingTop
    this.__paddingBottom = paddingBottom
  }

  getState(): BaseStyleNodeState {
    const self = this.getLatest()
    return {
      backgroundColor: self.__backgroundColor,
      paddingLeft: self.__paddingLeft,
      paddingRight: self.__paddingRight,
      paddingTop: self.__paddingTop,
      paddingBottom: self.__paddingBottom,
    }
  }

  exportJSON(): SerializedEmailTemplateBlockNode {
    return {
      ...super.exportJSON(),
      backgroundColor: this.__backgroundColor,
      paddingLeft: this.__paddingLeft,
      paddingRight: this.__paddingRight,
      paddingTop: this.__paddingTop,
      paddingBottom: this.__paddingBottom,
    }
  }

  updateDOM(prevNode: BaseStyleNode, dom: HTMLElement): boolean {
    if (prevNode.__backgroundColor !== this.__backgroundColor) {
      dom.style.backgroundColor = this.__backgroundColor
    }
    if (
      prevNode.__paddingLeft !== this.__paddingLeft ||
      prevNode.__paddingRight !== this.__paddingRight ||
      prevNode.__paddingTop !== this.__paddingTop ||
      prevNode.__paddingBottom !== this.__paddingBottom
    ) {
      dom.style.padding = `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`
    }
    if (prevNode.__key !== this.__key) {
      dom.setAttribute('data-key', this.__key)
    }

    return false
  }

  setBackgroundColor(color: string): this {
    const self = this.getWritable()
    self.__backgroundColor = color
    return this
  }

  setPaddingLeft(padding: number): this {
    const self = this.getWritable()
    self.__paddingLeft = padding
    return this
  }

  setPaddingRight(padding: number): this {
    const self = this.getWritable()
    self.__paddingRight = padding
    return this
  }

  setPaddingTop(padding: number): this {
    const self = this.getWritable()
    self.__paddingTop = padding
    return this
  }

  setPaddingBottom(padding: number): this {
    const self = this.getWritable()
    self.__paddingBottom = padding
    return this
  }

  setPadding(padding: [number, number, number, number]): this {
    const self = this.getWritable()
    self.__paddingTop = padding[0]
    self.__paddingRight = padding[1]
    self.__paddingBottom = padding[2]
    self.__paddingLeft = padding[3]
    return this
  }
}