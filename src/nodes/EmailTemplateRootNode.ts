import {
  DOMConversionMap, DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  SerializedElementNode,
  Spread,
} from 'lexical'
import {addClassNamesToElement} from '@lexical/utils'
import {$isEmailTemplateBlockNode} from './EmailTemplateBlock.ts'
import {
  DEFAULT_EMAIL_ROOT_ALIGN_ITEMS,
  DEFAULT_EMAIL_ROOT_BACKGROUND_COLOR,
  DEFAULT_EMAIL_ROOT_COLOR,
  DEFAULT_EMAIL_ROOT_LAYOUT_WIDTH, DEFAULT_EMAIL_ROOT_FONT_FAMILY,
  DEFAULT_EMAIL_ROOT_FONT_SIZE, DEFAULT_EMAIL_ROOT_LINE_HEIGHT,
} from '../constants.ts'
import {createElement, createOutlookComment, CreateOutlookCommentProps} from '../utils/html.ts'

export type EmailTemplateRootNodeState = {
  layoutWidth: number
  color: string
  fontSize: number
  backgroundColor: string
  fontFamily: string
  lineHeight: number
  alignItems: string
}

export type SerializedEmailTemplateRootNode = Spread<EmailTemplateRootNodeState, SerializedElementNode>

export class EmailTemplateRootNode extends ElementNode {
  __layoutWidth: number
  __color: string
  __fontSize: number
  __backgroundColor: string
  __fontFamily: string
  __lineHeight: number
  __alignItems: string

  static getType() {
    return 'email-template-root'
  }

  static clone(node: EmailTemplateRootNode) {
    return new EmailTemplateRootNode(
      node.__layoutWidth,
      node.__color,
      node.__fontSize,
      node.__backgroundColor,
      node.__fontFamily,
      node.__lineHeight,
      node.__alignItems,
      node.__key,
    )
  }

  constructor(
    layoutWidth: number = DEFAULT_EMAIL_ROOT_LAYOUT_WIDTH,
    color: string = DEFAULT_EMAIL_ROOT_COLOR,
    fontSize: number = DEFAULT_EMAIL_ROOT_FONT_SIZE,
    backgroundColor: string = DEFAULT_EMAIL_ROOT_BACKGROUND_COLOR,
    fontFamily: string = DEFAULT_EMAIL_ROOT_FONT_FAMILY,
    lineHeight: number = DEFAULT_EMAIL_ROOT_LINE_HEIGHT,
    alignItems: string = DEFAULT_EMAIL_ROOT_ALIGN_ITEMS,
    key?: string,
  ) {
    super(key)
    this.__layoutWidth = layoutWidth
    this.__color = color
    this.__fontSize = fontSize
    this.__backgroundColor = backgroundColor
    this.__fontFamily = fontFamily
    this.__lineHeight = lineHeight
    this.__alignItems = alignItems
  }

  getLayoutWidth() {
    const self = this.getLatest()
    return self.__layoutWidth
  }

  getColor() {
    const self = this.getLatest()
    return self.__color
  }

  getFontSize() {
    const self = this.getLatest()
    return self.__fontSize
  }

  getBackgroundColor() {
    const self = this.getLatest()
    return self.__backgroundColor
  }

  getFontFamily() {
    const self = this.getLatest()
    return self.__fontFamily
  }

  getLineHeight() {
    const self = this.getLatest()
    return self.__lineHeight
  }

  getAlignItems() {
    const self = this.getLatest()
    return self.__alignItems
  }

  getState(): EmailTemplateRootNodeState {
    const self = this.getLatest()
    return {
      layoutWidth: self.__layoutWidth,
      color: self.__color,
      fontSize: self.__fontSize,
      backgroundColor: self.__backgroundColor,
      fontFamily: self.__fontFamily,
      lineHeight: self.__lineHeight,
      alignItems: self.__alignItems,
    }
  }

  createDOM(config: EditorConfig): HTMLElement {
    const elem = document.createElement('div')
    elem.setAttribute('data-email-template-root', 'true')
    elem.setAttribute('data-over-330', this.__layoutWidth > 330 ? 'true' : 'false')
    elem.style.color = this.__color
    elem.style.fontSize = `${this.__fontSize}px`
    elem.style.backgroundColor = this.__backgroundColor
    elem.style.fontFamily = this.__fontFamily
    elem.style.lineHeight = this.__lineHeight?.toString()
    elem.style.alignItems = this.__alignItems
    elem.style.setProperty('--content-width', `${this.__layoutWidth}px`)
    addClassNamesToElement(elem, config.theme.emailTemplateRoot)
    return elem
  }

  updateDOM(prevNode: EmailTemplateRootNode, dom: HTMLElement): boolean {
    if (prevNode.__color !== this.__color) {
      dom.style.color = this.__color
    }
    if (prevNode.__fontSize !== this.__fontSize) {
      dom.style.fontSize = `${this.__fontSize}px`
    }
    if (prevNode.__backgroundColor !== this.__backgroundColor) {
      dom.style.backgroundColor = this.__backgroundColor
    }
    if (prevNode.__fontFamily !== this.__fontFamily) {
      dom.style.fontFamily = this.__fontFamily
    }
    if (prevNode.__lineHeight !== this.__lineHeight) {
      dom.style.lineHeight = this.__lineHeight.toString()
    }
    if (prevNode.__alignItems !== this.__alignItems) {
      dom.style.alignItems = this.__alignItems
    }
    if (prevNode.__layoutWidth !== this.__layoutWidth) {
      dom.style.setProperty('--content-width', `${this.__layoutWidth}px`)
      dom.setAttribute('data-over-330', this.__layoutWidth > 330 ? 'true' : 'false')
    }
    return false
  }

  append(...nodesToAppend: LexicalNode[]): this {
    for (let i = 0; i < nodesToAppend.length; i++) {
      const node = nodesToAppend[i]
      if (!$isEmailTemplateBlockNode(node)) {
        throw new Error('EmailTemplateRootNode can only have EmailTemplateBlockNode as children')
      }
    }
    return super.append(...nodesToAppend)
  }

  static importDOM(): DOMConversionMap | null {
    return {}
  }

  static importJSON(json: SerializedEmailTemplateRootNode): EmailTemplateRootNode {
    return $createEmailTemplateRootNode(json)
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('html')
    const html = createElement(
      'html',
      {
        mlns: 'http://www.w3.org/1999/xhtml',
        'xmlns:v': 'urn:schemas-microsoft-com:vml',
        'xmlns:o': 'urn:schemas-microsoft-com:office:office'
      }
    )
    const comment = document.createComment('[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]')
    const head = createElement('head')
    const meta1 = createElement('meta', {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'})
    const meta2 = createElement('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'})
    const meta3 = createElement('meta', {name: 'x-apple-disable-message-reformatting'})
    const meta4 = createElement('meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'})
    const comment2 = document.createComment('[if !mso]><!')
    const comment3 = document.createComment('<![endif]')
    head.appendChild(comment)
    head.appendChild(meta1)
    head.appendChild(meta2)
    head.appendChild(meta3)
    head.appendChild(comment2)
    head.appendChild(meta4)
    head.appendChild(comment3)
    const body = document.createElement('body')
    const style = createElement('style', {type: 'text/css'})
    style.textContent = `
      @media only screen and (min-width: ${this.__layoutWidth + 20}px) {
        .et-block-content {
          width: ${this.__layoutWidth}px !important;
        }
        .et-block-content .layout-item {
          vertical-align: top;
        }
        .et-block-content .layout-item-50 {
           width: ${this.__layoutWidth / 2}px !important;
        }
        .et-block-content .layout-item-33 {
           width: ${this.__layoutWidth / 3}px !important;
        }
        .et-block-content .layout-item-25 {
           width: ${this.__layoutWidth / 4}px !important;
        }
        .et-block-content .layout-item-75 {
           width: ${this.__layoutWidth * 0.75}px !important;
         }
      }
      
      @media only screen and (max-width: ${this.__layoutWidth + 20}px) {
        .et-block-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        
        .et-block-content {
          width: 100% !important;
        }
        
        .et-block-content .layout-item {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }
        
        .et-block-content .layout-item > div {
          margin: 0 auto;
        }
        
        .et-block-content .layout-item img {
          max-width: 100% !important;
        }
      }
      
      body {
        margin: 0;
        padding: 0;
      }
      table, tr, td {
        border-collapse: collapse;
        vertical-align: top;
      }
      p {
        margin: 0;
      }
      .ie-container table, .mso-container table {
        table-layout: fixed;
      }
      * {
        line-height: inherit;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      } 
    `
    // remove whitespace from style
    style.textContent = style.textContent.replace(/\s+/g, ' ')
    head.appendChild(style)
    html.appendChild(head)
    html.appendChild(body)
    const mainTable = createElement(
      'table',
      {
        cellspacing: '0',
        cellpadding: '0',
        border: '0',
      },
      {
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        borderSpacing: '0',
        msTableLspace: '0pt',
        msTableRspace: '0pt',
        verticalAlign: 'top',
        minWidth: '320px',
        margin: '0 auto',
        backgroundColor: this.__backgroundColor,
        color: this.__color,
        width: '100%',
        fontSize: `${this.__fontSize}px`,
        fontFamily: this.__fontFamily,
      },
    )
    const mainTr = createElement('tr', {}, {verticalAlign: 'top'})
    const mainTd = createElement('td', {}, {wordBreak: 'break-word', borderCollapse: 'collapse', verticalAlign: 'top'})

    //<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #000000;"><![endif]-->
    const comments: CreateOutlookCommentProps[] = [
      {comment: '<div class="ie-container">', condition: 'ie'},
      {comment: '<div class="mso-container">', condition: 'mso'},
      {comment: '</div>', condition: 'mso'},
      {comment: '</div>', condition: 'ie'},
      {
        comment: `<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: ${this.__backgroundColor};">`,
        condition: 'oneOf',
      },
      {
        comment: '</td></tr></table>',
        condition: 'oneOf',
      },
    ]

    mainTr.appendChild(mainTd)
    mainTable.appendChild(mainTr)

    comments.slice(0, 2).forEach((val) => {
      body.appendChild(createOutlookComment(val))
    })

    body.appendChild(mainTable)

    comments.slice(2, 4).forEach((val) => {
      body.appendChild(createOutlookComment(val))
    })
    mainTd.appendChild(createOutlookComment(comments[4]))

    return {
      after: (generatedElement) => {
        if (generatedElement instanceof HTMLElement) {
          const children = Array.from(generatedElement.children)
          children.forEach((child) => {
            mainTd.appendChild(child)
          })
        }
        mainTd.appendChild(createOutlookComment(comments[5]))
        return html
      },
      element,
    }
  }

  exportJSON(): SerializedEmailTemplateRootNode {
    return {
      ...super.exportJSON(),
      layoutWidth: this.__layoutWidth,
      color: this.__color,
      fontSize: this.__fontSize,
      backgroundColor: this.__backgroundColor,
      fontFamily: this.__fontFamily,
      lineHeight: this.__lineHeight,
      alignItems: this.__alignItems,
      type: 'email-template-root',
    }
  }

  canInsertTextAfter(): boolean {
    return false
  }

  canInsertTextBefore(): boolean {
    return false
  }

  canMergeWhenEmpty(): boolean {
    return true
  }

  isShadowRoot(): boolean {
    return true
  }

  setStyle(): this {
    return this
  }

  canBeEmpty(): boolean {
    return false
  }

  setLayoutWidth(layoutWidth: number): this {
    const self = this.getWritable()
    self.__layoutWidth = layoutWidth
    return this
  }

  setColor(color: string): this {
    const self = this.getWritable()
    self.__color = color
    return this
  }

  setFontSize(fontSize: number | string): this {
    if (typeof fontSize === 'string') {
      fontSize = parseInt(fontSize)
    }
    const self = this.getWritable()
    self.__fontSize = fontSize
    return this
  }

  setBackgroundColor(backgroundColor: string): this {
    const self = this.getWritable()
    self.__backgroundColor = backgroundColor
    return this
  }

  setFontFamily(fontFamily: string): this {
    const self = this.getWritable()
    self.__fontFamily = fontFamily
    return this
  }

  setLineHeight(lineHeight: number | string): this {
    if (typeof lineHeight === 'string') {
      lineHeight = parseFloat(lineHeight)
    }
    const self = this.getWritable()
    self.__lineHeight = lineHeight
    return this
  }

  setAlignItems(alignItems: string): this {
    const self = this.getWritable()
    self.__alignItems = alignItems
    return this
  }

}

export function $createEmailTemplateRootNode(payload: Partial<SerializedEmailTemplateRootNode> = {}): EmailTemplateRootNode {
  const {
    layoutWidth,
    color,
    fontSize,
    backgroundColor,
    fontFamily,
    lineHeight,
    alignItems,
  } = payload
  return new EmailTemplateRootNode(
    layoutWidth,
    color,
    fontSize,
    backgroundColor,
    fontFamily,
    lineHeight,
    alignItems,
  )
}

export function $isEmailTemplateRootNode(node: LexicalNode | null | undefined): node is EmailTemplateRootNode {
  return node instanceof EmailTemplateRootNode
}

export function $getEmailTemplateRoot(editor: LexicalEditor): EmailTemplateRootNode {
  const editorState = editor.getEditorState()
  const node = Array.from(editorState._nodeMap.entries()).filter(([, node]) => {
    return node.getType() === 'email-template-root'
  })
  if (node.length < 1) {
    throw new Error('No EmailTemplateRootNode found')
  }
  if (node.length > 1) {
    throw new Error('Multiple EmailTemplateRootNode found')
  }
  return node[0][1] as EmailTemplateRootNode
}