import {
  $applyNodeReplacement,
  $createParagraphNode,
  DecoratorNode,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'
import * as React from 'react'
import {Suspense} from 'react'
import {addClassNamesToElement} from '@lexical/utils'
import {$createImageBlockNode} from './ImageBlockNode.ts'

const ImageComponent = React.lazy(() => import('./ImageComponent'))

export interface ImagePayload {
  altText?: string;
  caption?: string;
  height?: number;
  key?: NodeKey;
  maxWidth?: number;
  showCaption?: boolean;
  src?: string;
  width?: number;
  captionsEnabled?: boolean;
}

function isGoogleDocCheckboxImg(img: HTMLImageElement): boolean {
  return (
    img.parentElement != null &&
    img.parentElement.tagName === 'LI' &&
    img.previousSibling === null &&
    img.getAttribute('aria-roledescription') === 'checkbox'
  )
}

function $convertImageElement(domNode: Node): null | DOMConversionOutput {
  const img = domNode as HTMLImageElement
  if (img.src.startsWith('file:///') || isGoogleDocCheckboxImg(img)) {
    return null
  }
  const {alt: altText, src, width, height} = img
  const node = $createImageNode({altText, height, src, width})
  return {node}
}

export type SerializedImageNode = Spread<
  {
    altText: string;
    caption: string;
    height?: number;
    maxWidth: number;
    showCaption: boolean;
    src: string;
    width?: number;
  },
  SerializedLexicalNode
>;

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string
  __altText: string
  __width: '100%' | number
  __height: '100%' | number
  __maxWidth: number
  __showCaption: boolean
  __caption: string
  // Captions cannot yet be used within editor cells
  __captionsEnabled: boolean

  static getType(): string {
    return 'image'
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__maxWidth,
      node.__width,
      node.__height,
      node.__showCaption,
      node.__caption,
      node.__captionsEnabled,
      node.__key,
    )
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    return $createImageNode(serializedNode)
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img')
    element.setAttribute('align', 'center')
    element.setAttribute('border', '0')
    element.setAttribute('src', this.__src)
    element.setAttribute('alt', this.__altText)
    element.setAttribute('width', this.__width.toString())
    element.setAttribute('height', this.__height.toString())
    element.style.outline = 'none'
    element.style.textDecoration = 'none'
    element.style.clear = 'both'
    element.style.display = 'inline-block'
    element.style.maxWidth = `100%`
    element.style.width = this.__width === '100%' ? '100%' : `${this.__width}px`
    element.style.height = this.__height === '100%' ? 'auto' : `${this.__height}px`
    return {element}
  }

  static importDOM(): DOMConversionMap | null {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (_node: Node) => ({
        conversion: $convertImageElement,
        priority: 0,
      }),
    }
  }

  constructor(
    src?: string,
    altText?: string,
    maxWidth?: number,
    width?: '100%' | number,
    height?: '100%' | number,
    showCaption?: boolean,
    caption?: string,
    captionsEnabled?: boolean,
    key?: NodeKey,
  ) {
    super(key)
    this.__src = src || ''
    this.__altText = altText || ''
    this.__maxWidth = maxWidth || 500
    this.__width = width || '100%'
    this.__height = height || '100%'
    this.__showCaption = showCaption || false
    this.__caption = caption || ''
    this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined
  }

  exportJSON(): SerializedImageNode {
    return {
      altText: this.getAltText(),
      caption: this.getCaption(),
      height: this.__height === '100%' ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: 'image',
      version: 1,
      width: this.__width === '100%' ? 0 : this.__width,
    }
  }

  setWidthAndHeight(
    width: '100%' | number,
    height: '100%' | number,
  ): void {
    const writable = this.getWritable()
    writable.__width = width
    writable.__height = height
  }

  setShowCaption(showCaption: boolean): void {
    const writable = this.getWritable()
    writable.__showCaption = showCaption
  }

  // View

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('div')
    const theme = config.theme
    addClassNamesToElement(span, theme.image)
    return span
  }

  updateDOM(): false {
    return false
  }

  getState(): ImagePayload {
    const self = this.getLatest()
    return {
      altText: self.__altText,
      caption: self.__caption,
      height: self.__height === '100%' ? 0 : self.__height,
      key: self.getKey(),
      maxWidth: self.__maxWidth,
      showCaption: self.__showCaption,
      src: self.__src,
      width: self.__width === '100%' ? 0 : self.__width,
      captionsEnabled: self.__captionsEnabled,
    }
  }

  getSrc(): string {
    return this.__src
  }

  getCaption(): string {
    return this.__caption
  }

  getAltText(): string {
    return this.__altText
  }

  isParentRequired(): boolean {
    return true
  }

  createParentElementNode(): ElementNode {
    return $createImageBlockNode()
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <ImageComponent
          src={this.__src}
          altText={this.__altText}
          width={this.__width}
          height={this.__height}
          nodeKey={this.getKey()}
          showCaption={this.__showCaption}
          caption={this.__caption}
          captionsEnabled={this.__captionsEnabled}
          resizable={true}
        />
      </Suspense>
    )
  }

  setSrc(src: string): this {
    const writable = this.getWritable()
    writable.__src = src
    return this
  }

  setAltText(altText: string): this {
    const writable = this.getWritable()
    writable.__altText = altText
    return this
  }

  setCaption(caption: string): this {
    const writable = this.getWritable()
    writable.__caption = caption
    return this
  }

  setCaptionsEnabled(captionsEnabled: boolean): this {
    const writable = this.getWritable()
    writable.__captionsEnabled = captionsEnabled
    return this
  }

  remove(preserveEmptyParent?: boolean) {
    const parent = this.getParent()
    const prev = parent?.getPreviousSibling()
    if (!prev) {
      parent?.insertBefore($createParagraphNode())
    }
    super.remove(preserveEmptyParent)
  }
}

export function $createImageNode({
                                   altText,
                                   height,
                                   maxWidth = 500,
                                   captionsEnabled,
                                   src,
                                   width,
                                   showCaption,
                                   caption,
                                   key,
                                 }: ImagePayload): ImageNode {
  return $applyNodeReplacement(
    new ImageNode(
      src,
      altText,
      maxWidth,
      width,
      height,
      showCaption,
      caption,
      captionsEnabled,
      key,
    ),
  )
}

export function $isImageNode(
  node: LexicalNode | null | undefined,
): node is ImageNode {
  return node instanceof ImageNode
}