import {
  $createParagraphNode, $isTextNode, DOMExportOutput,
  EditorConfig,
  ElementNode, LexicalNode, ParagraphNode, RangeSelection,
  SerializedElementNode,
} from 'lexical'
import {addClassNamesToElement} from '@lexical/utils'
import {createElement} from '../utils/html.ts'

export class ImageBlockNode extends ElementNode {
  static getType() {
    return 'image-block'
  }

  static clone(node: ImageBlockNode) {
    return new ImageBlockNode(node.__key)
  }

  constructor(
    key?: string,
  ) {
    super(key)
    this.__format = 1
  }

  createDOM(config:EditorConfig): HTMLElement {
    const p = document.createElement('p')
    p.setAttribute('data-image-block', 'true')
    addClassNamesToElement(p, config.theme.imageBlock)

    return p
  }

  updateDOM(): false {
    return false
  }

  exportJSON(): SerializedElementNode {
    return {
      ...super.exportJSON(),
      version: 1,
      type: 'image-block',
    }
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('div')
    const table = createElement(
      'table',
      {
        width: '100%',
        height: '100%',
        cellpadding: '0',
        cellspacing: '0',
        border: '0',
      }
    )
    const tr = document.createElement('tr')
    const td = createElement(
      'td',
      {
        height: '100%',
        width: '100%',
        align: this.getFormatType()
      }
    )
    tr.appendChild(td)
    table.appendChild(tr)

    return {
      element,
      after: (generatedElement) => {
        const child = generatedElement?.firstChild
        if (child instanceof HTMLElement) {
          td.appendChild(child)
        }
        return table
      }
    }
  }

  static importJSON(json: SerializedElementNode) {
    const node = $createImageBlockNode()
    node.setFormat(json.format)
    return node
  }

  canMergeWhenEmpty(): boolean {
    return false
  }

  canBeEmpty() {
    return false
  }

  canInsertTextBefore(): boolean {
    return false
  }

  canInsertTextAfter(): boolean {
    return false
  }

  isInline(): boolean {
    return false
  }

  insertNewAfter(
    rangeSelection: RangeSelection,
    restoreSelection: boolean,
  ): ParagraphNode {
    const newElement = $createParagraphNode();
    newElement.setTextFormat(rangeSelection.format);
    newElement.setTextStyle(rangeSelection.style);
    const direction = this.getDirection();
    newElement.setDirection(direction);
    newElement.setFormat(this.getFormatType());
    this.insertAfter(newElement, restoreSelection);
    return newElement;
  }

  insertBefore(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode {
    let node = nodeToInsert
    if ($isTextNode(nodeToInsert)) {
      const paragraph = $createParagraphNode();
      paragraph.append(nodeToInsert);
      node = paragraph;
    }
    return super.insertBefore(node, restoreSelection);
  }

  insertAfter(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode {
    let node = nodeToInsert
    if ($isTextNode(nodeToInsert)) {
      const paragraph = $createParagraphNode();
      paragraph.append(nodeToInsert);
      node = paragraph;
    }
    return super.insertAfter(node, restoreSelection);
  }

  collapseAtStart(): boolean {
    return true;
  }
}

export const $createImageBlockNode = (key?: string) => new ImageBlockNode(key)

export function $isImageBlockNode(
  node: LexicalNode | null | undefined,
): node is ImageBlockNode {
  return node?.getType() === ImageBlockNode.getType()
}