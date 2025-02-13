import {DOMConversionMap, DOMExportOutput, EditorConfig, LexicalNode} from 'lexical'
import {addClassNamesToElement} from '@lexical/utils'
import {$createLayoutContainerNode, $isLayoutContainerNode} from './LayoutContainerNode.ts'
import {EmailTemplateRootNode} from './EmailTemplateRootNode.ts'
import {createElement} from '../utils/html.ts'
import {BaseStyleNode, SerializedBaseStyleNode} from './BaseStyleNode.ts'
import {$createLayoutItemNode} from './LayoutItemNode.ts'
import {$createCustomParagraphNode} from './CustomParagraphNode.ts'

export type SerializedEmailTemplateBlockNode = SerializedBaseStyleNode

export class EmailTemplateBlockNode extends BaseStyleNode {

  static getType() {
    return 'email-template-block'
  }

  static clone(node: EmailTemplateBlockNode) {
    return new EmailTemplateBlockNode(
      node.__backgroundColor,
      node.__paddingLeft,
      node.__paddingRight,
      node.__paddingTop,
      node.__paddingBottom,
      node.__key,
    )
  }
  canInsertTextAfter(): boolean {
    return false
  }

  canInsertTextBefore(): boolean {
    return false
  }

  isShadowRoot(): boolean {
    return true
  }

  createDOM(config: EditorConfig): HTMLElement {
    const elem = document.createElement('div')
    elem.setAttribute('data-email-template-block', 'true')
    elem.setAttribute('data-key', this.__key)
    elem.style.backgroundColor = this.__backgroundColor
    elem.style.padding = `${this.__paddingTop}px ${this.__paddingRight}px ${this.__paddingBottom}px ${this.__paddingLeft}px`
    addClassNamesToElement(elem, config.theme.emailTemplateBlock)
    return elem
  }

  append(...nodesToAppend: LexicalNode[]): this {
    if (nodesToAppend.length > 1) {
      throw new Error('EmailTemplateBlockNode can only have one child')
    }
    for (let i = 0; i < nodesToAppend.length; i++) {
      const node = nodesToAppend[i]
      if (!$isLayoutContainerNode(node)) {
        throw new Error('EmailTemplateBlockNode can only have LayoutContainerNode as children')
      }
    }

    return super.append(...nodesToAppend)
  }

  exportJSON(): SerializedEmailTemplateBlockNode {
    return {
      ...super.exportJSON(),
      type: 'email-template-block',
    }
  }

  exportDOM(): DOMExportOutput {
    const parent = this.getParent<EmailTemplateRootNode>()
    if (!parent) {
      throw new Error('EmailTemplateBlockNode must have EmailTemplateRootNode as parent')
    }
    const emptyDiv = document.createElement('div')
    const block = createElement(
      'div',
      {
        class: 'et-block-container',
      },
      {
        backgroundColor: this.__backgroundColor,
        paddingLeft: `${this.__paddingLeft}px`,
        paddingRight: `${this.__paddingRight}px`,
        paddingTop: `${this.__paddingTop}px`,
        paddingBottom: `${this.__paddingBottom}px`,
      }
    )
    const contentDiv = createElement(
      'div',
      {
        class: 'et-block-content',
      },
      {
        minWidth: '320px',
        maxWidth: `${parent.getLayoutWidth()}px`,
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        backgroundColor: 'transparent',
        ...parent.__alignItems === 'center' ? {margin: '0 auto'} : {margin: '0 auto 0 0'},
      }
    )

    block.append(contentDiv)


    return {
      after: (generatedElement) => {
        if (generatedElement instanceof HTMLElement) {
          contentDiv.append(...generatedElement.childNodes)
        }
        return block
      },
      element: emptyDiv,
    }
  }

  static importDOM(): DOMConversionMap | null {
    return {}
  }

  static importJSON(json: SerializedEmailTemplateBlockNode): EmailTemplateBlockNode {
    const node = $createEmailTemplateBlockNode(json)
    node.setFormat(json.format)
    return node
  }

  setStyle(): this {
    return this
  }

  remove(preserveEmptyParent?: boolean) {
    const parent = this.getParent<EmailTemplateRootNode>()
    super.remove(preserveEmptyParent)
    if (parent && parent.isEmpty()) {
      const newBlock = $createEmailTemplateBlockNode()
      const newLayoutContainer = $createLayoutContainerNode('1fr')
      const newLayoutItem = $createLayoutItemNode()
      const paragraph = $createCustomParagraphNode()
      newLayoutItem.append(paragraph)
      newLayoutContainer.append(newLayoutItem)
      newBlock.append(newLayoutContainer)
      parent.append(newBlock)
    }
  }
}

export function $createEmailTemplateBlockNode(payload: Partial<SerializedEmailTemplateBlockNode> = {}): EmailTemplateBlockNode {
  const {
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  } = payload
  return new EmailTemplateBlockNode(
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
  )
}

export function $isEmailTemplateBlockNode(node: LexicalNode | null | undefined): node is EmailTemplateBlockNode {
  return node instanceof EmailTemplateBlockNode
}

