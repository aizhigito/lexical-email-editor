import {
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  SerializedElementNode,
} from 'lexical'
import {addClassNamesToElement} from '@lexical/utils'
import {ImageBlockNode} from './ImageBlockNode.ts'

export class ButtonLinkBlockNode extends ImageBlockNode {
  static getType() {
    return 'button-link-block'
  }

  static clone(node: ButtonLinkBlockNode) {
    return new ButtonLinkBlockNode(node.__key)
  }

  constructor(
    key?: string,
  ) {
    super(key)
    this.__format = 2
  }

  createDOM(config:EditorConfig): HTMLElement {
    const p = document.createElement('p')
    p.setAttribute('data-button-link-block', 'true')
    addClassNamesToElement(p, config.theme.buttonLinkBlock)

    return p
  }

  exportJSON(): SerializedElementNode {
    return {
      ...super.exportJSON(),
      version: 1,
      type: 'button-link-block',
    }
  }

  exportDOM(): DOMExportOutput {
    const element = document.createDocumentFragment()
    return {element}
  }

  static importJSON(json: SerializedElementNode) {
    const node = $createButtonLinkBlockNode()
    node.setFormat(json.format)
    return node
  }
}

export const $createButtonLinkBlockNode = (key?: string) => new ButtonLinkBlockNode(key)

export function $isButtonLinkBlockNode(
  node: LexicalNode | null | undefined,
): node is ButtonLinkBlockNode {
  return node?.getType() === ButtonLinkBlockNode.getType()
}