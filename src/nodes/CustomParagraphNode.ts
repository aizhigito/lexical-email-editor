import {DOMExportOutput, LexicalEditor, ParagraphNode, SerializedParagraphNode} from 'lexical'

export class CustomParagraphNode extends ParagraphNode {
  static getType(): string {
    return 'custom-paragraph'
  }

  static clone(node: CustomParagraphNode): CustomParagraphNode {
    return new CustomParagraphNode(node.__key)
  }

  static importJSON(serializedNode: SerializedParagraphNode): CustomParagraphNode {
    const node = $createCustomParagraphNode()
    node.setFormat(serializedNode.format)
    node.setIndent(serializedNode.indent)
    node.setDirection(serializedNode.direction)
    node.setTextFormat(serializedNode.textFormat)
    return node
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const {element, after} = super.exportDOM(editor)
    if (element instanceof HTMLElement) {
      element.style.padding = '0px'
      element.style.margin = '0px'
    }
    //<p style="line-height: 140%;">&nbsp;</p>
    if (this.isEmpty() && element?.firstChild) {
      element?.replaceChild(document.createTextNode('\u00A0'), element.firstChild)
    }
    return {element, after}
  }

  exportJSON(): SerializedParagraphNode {
    return {...super.exportJSON(), type: 'custom-paragraph'}
  }
}

export function $createCustomParagraphNode(): CustomParagraphNode {
  return new CustomParagraphNode()
}