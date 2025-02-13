import {
  $createParagraphNode,
  $getSelection, $isElementNode, $isNodeSelection,
  $isRangeSelection, $isRootOrShadowRoot, COMMAND_PRIORITY_LOW,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  LexicalEditor, SELECTION_CHANGE_COMMAND,
} from 'lexical'
import {$isLayoutItemNode, LayoutItemNode, SerializedLayoutItemNode} from '../../nodes/LayoutItemNode.ts'
import React, {useCallback, useEffect, useState} from 'react'
import {DropDown} from '../../ui/DropDown'
import {DropDownItem} from '../../ui/DropDown/components/DropDownItem.tsx'
import {
  formatHeading, formatLayoutBlock,
  formatPadding,
  formatParagraph,
  getAnchorNode, getImageWidthAndHeight, getLayoutBlockNode,
} from './utils.ts'
import {SizeChanger} from './SizeChanger.tsx'
import {DropdownColorPicker} from '../../ui/ColorPicker'
import {BLOCKS_OF_LAYOUT_ITEM, FORMATTABLE_BLOCKS} from '../../constants.ts'
import {Alignments} from './Alignments.tsx'
import {ImageNode, ImagePayload} from '../../nodes/ImageNode.tsx'
import {$findMatchingParent, mergeRegister} from '@lexical/utils'
import {$getSelectionNode} from '../../utils/selection.ts'
import {$isHeadingNode, HeadingNode} from '@lexical/rich-text'
import {$getSelectionStyleValueForProperty, $patchStyleText} from '@lexical/selection'
import {RATION_CHANGE_IMAGE_COMMAND} from '../../commands.ts'
import {PaddingChanger} from './PaddingChanger.tsx'
import {$getEmailTemplateRoot} from '../../nodes/EmailTemplateRootNode.ts'
import {SidebarBoxLayout} from './SidebarBoxLayout.tsx'
import {BorderChanger, BorderType} from './BorderChanger.tsx'
import {ButtonLinkNode, ButtonLinkPayload} from '../../nodes/ButtonLinkNode.tsx'
import {$isLinkNode} from '@lexical/link'
import {ImageUploadCallback} from '../../App.tsx'
import FileInput from '../../ui/Input/FileInput.tsx'

interface LayoutItemSidebarProps extends ImageUploadCallback {
  editor: LexicalEditor
  node: LayoutItemNode
  onClose: () => void
}

type LayoutBlockType = 'custom-paragraph' | 'h1' | 'h2' | 'h3' | 'image-block' | 'button-link-block'

type ToolbarState = {
  isBold: boolean
  isItalic: boolean
  isUnderline: boolean
  isStrikethrough: boolean
  color: string
  backgroundColor: string
  blockType: LayoutBlockType
  fontSize: string
  formatElement: ElementFormatType
}

export const LayoutItemSidebar: React.FC<LayoutItemSidebarProps> = ({editor, node, onClose, imageUploadCallback}) => {
  const [state, setState] = useState<Partial<SerializedLayoutItemNode>>({})
  const [toolbarState, setToolbarState] = useState<ToolbarState>({
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isStrikethrough: false,
    color: 'inherit',
    backgroundColor: 'transparent',
    blockType: 'custom-paragraph',
    fontSize: '',
    formatElement: 'left',
  })
  const [imageState, setImageState] = useState<ImagePayload>({})
  const [imageNode, setImageNode] = useState<ImageNode | null>(null)
  const [buttonLinkNode, setButtonLinkNode] = useState<ButtonLinkNode | null>(null)
  const [buttonLinkState, setButtonLinkState] = useState<Partial<ButtonLinkPayload>>({})
  const [inputChangeFlag, setInputChangeFlag] = React.useState<boolean>(false)

  const mounted = React.useRef(false)

  const $updateToolbarState = useCallback(() => {
    const selection = $getSelection()
    const [btnBlock, btnNode] = getLayoutBlockNode(selection, true, true)
    if (btnBlock) {
      const align = btnBlock.getFormatType() || 'left'
      setToolbarState(prev => ({
        ...prev,
        blockType: 'button-link-block',
        formatElement: align,
      }))
    }
    if (btnNode && (buttonLinkNode === null || buttonLinkNode.getKey() !== btnNode.getKey())) {
      setButtonLinkNode(btnNode)
      setButtonLinkState(btnNode.getState())
    } else if (btnNode === null) {
      setButtonLinkNode(null)
      setButtonLinkState({})
    }
    const [imgBlock, imgNode] = getLayoutBlockNode(selection, true)
    if (imgBlock) {
      const align = imgBlock.getFormatType() || 'left'
      setToolbarState(prev => ({
        ...prev,
        blockType: 'image-block',
        formatElement: align,
      }))
    }
    if (imgNode && (!imageNode || imageNode.getKey() !== imgNode.getKey())) {
      setImageNode(imgNode)
      setImageState(imgNode.getState())
    } else if (!imgNode) {
      setImageNode(null)
      setImageState({})
    }
    if ($isRangeSelection(selection)) {
      const emailTemplateRoot = $getEmailTemplateRoot(editor)
      const anchorNode = selection.anchor.getNode()
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, n => {
            const parent = n.getParent()
            return parent !== null && $isRootOrShadowRoot(parent)
          })
      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow()
      }
      const elementKey = element.getKey()
      const elementDOM = editor.getElementByKey(elementKey)

      const node = $getSelectionNode(selection)
      const parent = node.getParent()
      let blockType: LayoutBlockType = 'custom-paragraph'
      let defaultFontSize = `${emailTemplateRoot.getFontSize()}px`
      if (elementDOM !== null) {
        const isHeading = $isHeadingNode(element)
        const type = isHeading ? (element as HeadingNode).getTag() : element.getType()
        if (isHeading) {
          defaultFontSize = window.getComputedStyle(elementDOM, null).getPropertyValue('font-size') || defaultFontSize
        }
        blockType = type as LayoutBlockType
      }
      let matchingParent
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline(),
        )
      }
      const formatElement =
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || 'left'

      const color = $getSelectionStyleValueForProperty(selection, 'color', 'inherit')
      const backgroundColor = $getSelectionStyleValueForProperty(selection, 'background-color', 'transparent')
      const fontSize = $getSelectionStyleValueForProperty(selection, 'font-size', defaultFontSize)
      setToolbarState(prev => ({
        ...prev,
        isBold: selection.hasFormat('bold'),
        isItalic: selection.hasFormat('italic'),
        isUnderline: selection.hasFormat('underline'),
        isStrikethrough: selection.hasFormat('strikethrough'),
        formatElement,
        color,
        backgroundColor,
        blockType,
        fontSize,
      }))
    }
  }, [editor, imageNode, buttonLinkNode])

  const $onImageRatioChange = useCallback(
    ({width, height}: { width: number, height: number }) => {
      setImageState(prev => ({
        ...prev,
        width,
        height,
      }))
      return true
    }, [])

  const $onFontColorChange = useCallback((color: string, skipHistoryStack: boolean, typeOfColor: string = 'color', elem?: HTMLInputElement) => {
    editor.update(() => {
      const selection = $getSelection()
      if (selection !== null) {
        $patchStyleText(selection, {[typeOfColor]: color})
      }
    }, {
      ...skipHistoryStack ? {tag: 'historic'} : {},
      onUpdate: () => {
        elem?.focus()
      },
    })
  }, [editor])

  const $onLayoutItemBackgroundColorChange = useCallback((color: string, skipHistoryStack: boolean) => {
    editor.update(() => {
      node.setBackgroundColor(color)
    }, {
      ...skipHistoryStack ? {tag: 'historic'} : {},
      onUpdate: () => {
        setState(prevState => {
          return {
            ...prevState,
            backgroundColor: color,
          }
        })
      },
    })
  }, [editor, node])

  const $onPaddingChange = useCallback((padding: [number, number, number, number], elem: HTMLInputElement) => {
    formatPadding(editor, padding, node, setState, elem)
  }, [editor, node])

  const $onButtonLinkPaddingChange = useCallback((padding: [number, number, number, number], elem: HTMLInputElement) => {
    if (!buttonLinkNode) {
      return
    }
    formatPadding(editor, padding, buttonLinkNode, setButtonLinkState, elem)
  }, [editor, buttonLinkNode])

  const $onButtonColorChange = useCallback((color: string, skipHistoryStack: boolean, typeOfColor: string = 'color') => {
    editor.update(() => {
      if (buttonLinkNode) {
        if (typeOfColor === 'color') {
          buttonLinkNode.setColor(color)
        } else {
          buttonLinkNode.setBackgroundColor(color)
        }
      }
    }, {
      ...skipHistoryStack ? {tag: 'historic'} : {},
      onUpdate: () => {
        setButtonLinkState(prevState => {
          return {
            ...prevState,
            [typeOfColor]: color,
          }
        })
      },
    })
  }, [editor, buttonLinkNode])

  const $onWidthAndHeightChange = useCallback((value: number, name?: string) => {
    if (name !== 'width' && name !== 'height' || imageNode === null) {
      return
    }
    const width = name === 'width' ? value : imageState.width
    const height = name === 'height' ? value : imageState.height
    editor.update(() => {
      imageNode.setWidthAndHeight(width || '100%', height || '100%')
    }, {
      onUpdate: () => {
        setImageState(prev => ({
          ...prev,
          width,
          height,
        }))
      },
    })

  }, [editor, imageState, imageNode])

  const $onDelete = useCallback(() => {
    editor.update(() => {
      if (!node.isEmpty()) {
        const selection = $getSelection()
        const anchorNode = getAnchorNode(selection)
        if (anchorNode && !$isLayoutItemNode(anchorNode) && node.isParentOf(anchorNode)) {
          const parent = anchorNode.getTopLevelElementOrThrow()
          parent.remove()
        } else if ($isNodeSelection(selection)) {
          selection.getNodes().forEach((node) => {
            node.remove()
          })
        }
        if (node.isEmpty()) {
          const paragraph = $createParagraphNode()
          node.append(paragraph)
          paragraph.selectEnd()
        }
      }
    })
  }, [editor, node])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      editor.read(() => {
        $updateToolbarState()
      })
    }
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          $updateToolbarState()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $updateToolbarState()
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        RATION_CHANGE_IMAGE_COMMAND,
        $onImageRatioChange,
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor, $updateToolbarState, $onImageRatioChange])

  useEffect(() => {
    editor.read(() => {
      setState(node.getState())
    })
    const element = editor.getElementByKey(node.getKey())
    element?.classList.add('selected')
    return () => {
      element?.classList.remove('selected')
    }
  }, [editor, node])

  const onImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, checked} = e.target
    setImageState((prev) => ({
      ...prev,
      [name]: name === 'width' || name === 'height' ? Number(value) : name === 'showCaption' ? checked : value,
    }))
    if (name === 'showCaption') {
      editor.update(() => {
        if (imageNode) {
          imageNode.setShowCaption(checked)
        }
      })
    } else {
      setInputChangeFlag(true)
    }
  }

  const onButtonLinkInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setButtonLinkState((prev) => ({
      ...prev,
      [name]: value,
    }))
    setInputChangeFlag(true)
  }

  const onImageInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!imageNode || !inputChangeFlag) {
      return
    }
    const {name} = e.target
    editor.update(() => {
      switch (name) {
        case 'src':
          imageNode.setSrc(imageState.src || '')
          break
        case 'altText':
          imageNode.setAltText(imageState.altText || '')
          break
        case 'caption':
          imageNode.setCaption(imageState.caption || '')
          break
      }
    }, {
      onUpdate: () => {
        setInputChangeFlag(false)
      },
    })
    if (name === 'src') {
      getImageWidthAndHeight(imageState.src || '')
        .then(({width, height}) => {
          editor.update(() => {
            if (imageNode) {
              imageNode.setWidthAndHeight(width, height)
            }
          }, {
            onUpdate: () => {
              setImageState(prevState => {
                return {
                  ...prevState,
                  width,
                  height,
                }
              })
            },
          })
        })
    }
  }

  const onButtonLinkInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!buttonLinkNode || !inputChangeFlag) {
      return
    }
    const {name} = e.target
    editor.update(() => {
      switch (name) {
        case 'url':
          buttonLinkNode.setUrl(buttonLinkState.url || '')
          break
        case 'text':
          buttonLinkNode.setText(buttonLinkState.text || '')
          break
      }
    }, {
      onUpdate: () => {
        setInputChangeFlag(false)
      },
    })
  }

  const $onNodeBorderChange = useCallback((border: BorderType, elem?: HTMLElement) => {
    editor.update(() => {
      node.setBorder(
        border[0][0],
        border[0][1],
        border[1][0],
        border[1][1],
        border[2][0],
        border[2][1],
        border[3][0],
        border[3][1],
      )
    }, {
      onUpdate: () => {
        setState(prevState => {
          return {
            ...prevState,
            borderTopWidth: border[0][0],
            borderTopColor: border[0][1],
            borderRightWidth: border[1][0],
            borderRightColor: border[1][1],
            borderBottomWidth: border[2][0],
            borderBottomColor: border[2][1],
            borderLeftWidth: border[3][0],
            borderLeftColor: border[3][1],
          }
        })
        elem?.focus()
      },
      discrete: true,
    })
  }, [editor, node])

  const $onImageUpload = (files: FileList | null) => {
    const reader = new FileReader()
    reader.onload = function () {
      if (typeof reader.result === 'string' && files !== null) {
        const src = reader.result
        if (imageUploadCallback !== undefined) {
          imageUploadCallback(files[0], src, (src: string) => {
            getImageWidthAndHeight(src)
              .then(({width, height}) => {
                editor.update(() => {
                  if (imageNode) {
                    imageNode.setSrc(src)
                    imageNode.setWidthAndHeight(width, height)
                  }
                }, {
                  onUpdate: () => {
                    setImageState(prevState => {
                      return {
                        ...prevState,
                        src,
                        width,
                        height,
                      }
                    })
                  },
                })
              })
          })
        } else {
          getImageWidthAndHeight(src)
            .then(({width, height}) => {
              editor.update(() => {
                if (imageNode) {
                  imageNode.setSrc(src)
                  imageNode.setWidthAndHeight(width, height)
                }
              }, {
                onUpdate: () => {
                  setImageState(prevState => {
                    return {
                      ...prevState,
                      src,
                      width,
                      height
                    }
                  })
                },
              })
            })
        }
      }
      return ''
    }
    if (files !== null) {
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <SidebarBoxLayout onDelete={$onDelete} onClose={onClose}>
      <dl>
        <dt>Block</dt>
        <dd>
          <DropDown
            buttonClassName="toolbar-item block-controls"
            buttonLabel={BLOCKS_OF_LAYOUT_ITEM[toolbarState.blockType]}
            buttonAriaLabel="Block Type"
          >
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'custom-paragraph' ? ' active' : ''}`}
              onClick={() => {
                formatParagraph(editor)
              }}
            >
              <div className="icon-text-container">
                <i className="icon custom-paragraph-block"/>
                <span className="text">Paragraph</span>
              </div>
            </DropDownItem>
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'h1' ? ' active' : ''}`}
              onClick={() => {
                formatHeading(editor, toolbarState.blockType, 'h1')
              }}
            >
              <div className="icon-text-container">
                <i className="icon h1-block"/>
                <span className="text">Heading 1</span>
              </div>
            </DropDownItem>
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'h2' ? ' active' : ''}`}
              onClick={() => {
                formatHeading(editor, toolbarState.blockType, 'h2')
              }}
            >
              <div className="icon-text-container">
                <i className="icon h2-block"/>
                <span className="text">Heading 2</span>
              </div>
            </DropDownItem>
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'h3' ? ' active' : ''}`}
              onClick={() => {
                formatHeading(editor, toolbarState.blockType, 'h3')
              }}
            >
              <div className="icon-text-container">
                <i className="icon h3-block"/>
                <span className="text">Heading 3</span>
              </div>
            </DropDownItem>
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'image-block' ? ' active' : ''}`}
              onClick={() => {
                formatLayoutBlock(editor)
              }}
            >
              <div className="icon-text-container">
                <i className="icon image-block"/>
                <span className="text">Image</span>
              </div>
            </DropDownItem>
            <DropDownItem
              className={`item wide ${toolbarState.blockType === 'button-link-block' ? ' active' : ''}`}
              onClick={() => {
                formatLayoutBlock(editor, 'button-link')
              }}
            >
              <div className="icon-text-container">
                <i className="icon button-link"/>
                <span className="text">Button</span>
              </div>
            </DropDownItem>
          </DropDown>
        </dd>
        <dt>
          Alignment
        </dt>
        <dd>
          <Alignments
            currentActive={toolbarState.formatElement || 'left'}
            onClick={(align) => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, align)
            }}
          />
        </dd>
        {
          FORMATTABLE_BLOCKS.includes(toolbarState.blockType) ? (
            <>
              <dt>
                Font Size
              </dt>
              <dd>
                <SizeChanger editor={editor} size={toolbarState.fontSize}/>
              </dd>
              <dt>
                Text Format
              </dt>
              <dd>
                <div className="text-format-box">
                  <button
                    type="button"
                    className={`text-format-button ${toolbarState.isBold ? 'active' : ''}`}
                    onClick={() => {
                      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
                    }}
                  >
                    <i className="format bold"/>
                  </button>
                  <button
                    type="button"
                    className={`text-format-button ${toolbarState.isItalic ? 'active' : ''}`}
                    onClick={() => {
                      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
                    }}
                  >
                    <i className="format italic"/>
                  </button>
                  <button
                    type="button"
                    className={`text-format-button ${toolbarState.isUnderline ? 'active' : ''}`}
                    onClick={() => {
                      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
                    }}
                  >
                    <i className="format underline"/>
                  </button>
                  <button
                    type="button"
                    className={`text-format-button ${toolbarState.isStrikethrough ? 'active' : ''}`}
                    onClick={() => {
                      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
                    }}
                  >
                    <i className="format strikethrough"/>
                  </button>
                </div>
              </dd>
              <dt>
                Font Color
              </dt>
              <dd>
                <DropdownColorPicker
                  color={toolbarState.color}
                  name="color"
                  onChange={$onFontColorChange}
                />
              </dd>
              <dt>
                Font Background Color
              </dt>
              <dd>
                <DropdownColorPicker
                  color={toolbarState.backgroundColor}
                  name="background-color"
                  onChange={$onFontColorChange}
                />
              </dd>
            </>
          ) : toolbarState.blockType === 'image-block' ? (
            <>
              <dt>
              </dt>
              <dd>
                <FileInput
                  label="Upload Image"
                  accept="image/*"
                  onChange={$onImageUpload}
                />
              </dd>
              <dt>
                URL
              </dt>
              <dd>
                <input
                  name="src"
                  value={imageState.src}
                  onChange={onImageInputChange}
                  onBlur={onImageInputBlur}
                />
              </dd>
              <dt>
                Alt Text
              </dt>
              <dd>
                <input
                  name="altText"
                  value={imageState.altText}
                  onChange={onImageInputChange}
                  onBlur={onImageInputBlur}
                />
              </dd>
              <dt>
                Width
              </dt>
              <dd>
                <SizeChanger
                  name="width"
                  size={`${imageState.width}px`}
                  editor={editor}
                  onUpdate={$onWidthAndHeightChange}
                />
              </dd>
              <dt>
                Height
              </dt>
              <dd>
                <SizeChanger
                  name="height"
                  size={`${imageState.height}px`}
                  editor={editor}
                  onUpdate={$onWidthAndHeightChange}
                />
              </dd>
              <dt>
                Show Caption
              </dt>
              <dd>
                <input
                  type="checkbox"
                  name="showCaption"
                  checked={imageState.showCaption}
                  onChange={onImageInputChange}
                />
              </dd>
              {
                imageState.showCaption && (
                  <>
                    <dt>
                      Caption
                    </dt>
                    <dd>
                      <input
                        name="caption"
                        value={imageState.caption}
                        onChange={onImageInputChange}
                        onBlur={onImageInputBlur}
                      />
                    </dd>
                  </>
                )
              }
            </>
          ) : toolbarState.blockType === 'button-link-block' ? (
            <>
              <dt>URL</dt>
              <dd>
                <input
                  name="url"
                  value={buttonLinkState.url}
                  onChange={onButtonLinkInputChange}
                  onBlur={onButtonLinkInputBlur}
                />
              </dd>
              <dt>Text</dt>
              <dd>
                <input
                  name="text"
                  value={buttonLinkState.text}
                  onChange={onButtonLinkInputChange}
                  onBlur={onButtonLinkInputBlur}
                />
              </dd>
              <dt>
                Font Size
              </dt>
              <dd>
                <SizeChanger editor={editor} size={buttonLinkState.fontSize || ''}/>
              </dd>
              <dt>
                Font Color
              </dt>
              <dd>
                <DropdownColorPicker
                  name="color"
                  color={buttonLinkState.color || ''}
                  onChange={$onButtonColorChange}
                />
              </dd>
              <dt>
                Button Background Color
              </dt>
              <dd>
                <DropdownColorPicker
                  name="backgroundColor"
                  color={buttonLinkState.backgroundColor || ''}
                  onChange={$onButtonColorChange}
                />
              </dd>
              <dt>
                Padding
              </dt>
              <dd>
                <PaddingChanger
                  padding={[
                    buttonLinkState.paddingTop || 0,
                    buttonLinkState.paddingRight || 0,
                    buttonLinkState.paddingBottom || 0,
                    buttonLinkState.paddingLeft || 0,
                  ]}
                  onUpdate={$onButtonLinkPaddingChange}
                />
              </dd>
              <dt>
                Border Radius
              </dt>
              <dd>
                <SizeChanger
                  editor={editor}
                  size={`${buttonLinkState.borderRadius || 0}px`}
                  onUpdate={(value) => {
                    editor.update(() => {
                      buttonLinkNode?.setBorderRadius(value)
                    }, {
                      onUpdate: () => {
                        setButtonLinkState(prevState => {
                          return {
                            ...prevState,
                            borderRadius: value,
                          }
                        })
                      },
                    })
                  }}
                />
              </dd>
              <dt>
                Border
              </dt>
              <dd>
                <BorderChanger
                  border={[
                    [buttonLinkState.borderTopWidth || 0, buttonLinkState.borderTopColor || 'transparent'],
                    [buttonLinkState.borderRightWidth || 0, buttonLinkState.borderRightColor || 'transparent'],
                    [buttonLinkState.borderBottomWidth || 0, buttonLinkState.borderBottomColor || 'transparent'],
                    [buttonLinkState.borderLeftWidth || 0, buttonLinkState.borderLeftColor || 'transparent'],
                  ]}
                  onUpdate={(border, elem) => {
                    editor.update(() => {
                      buttonLinkNode?.setBorder(
                        border[0][0],
                        border[0][1],
                        border[1][0],
                        border[1][1],
                        border[2][0],
                        border[2][1],
                        border[3][0],
                        border[3][1],
                      )
                    }, {
                      onUpdate: () => {
                        setButtonLinkState(prevState => {
                          return {
                            ...prevState,
                            borderTopWidth: border[0][0],
                            borderTopColor: border[0][1],
                            borderRightWidth: border[1][0],
                            borderRightColor: border[1][1],
                            borderBottomWidth: border[2][0],
                            borderBottomColor: border[2][1],
                            borderLeftWidth: border[3][0],
                            borderLeftColor: border[3][1],
                          }
                        })
                        elem?.focus()
                      },
                      discrete: true,
                    })
                  }}
                />
              </dd>
            </>
          ) : null
        }
        <dt>
          Background Color
        </dt>
        <dd>
          <DropdownColorPicker
            color={state.backgroundColor || 'transparent'}
            onChange={$onLayoutItemBackgroundColorChange}
          />
        </dd>
        <dt>
          Padding
        </dt>
        <dd>
          <PaddingChanger
            padding={[state.paddingTop || 0, state.paddingRight || 0, state.paddingBottom || 0, state.paddingLeft || 0]}
            onUpdate={$onPaddingChange}
          />
        </dd>
        <dt>
          Border
        </dt>
        <dd>
          <BorderChanger
            border={[
              [state.borderTopWidth || 0, state.borderTopColor || 'transparent'],
              [state.borderRightWidth || 0, state.borderRightColor || 'transparent'],
              [state.borderBottomWidth || 0, state.borderBottomColor || 'transparent'],
              [state.borderLeftWidth || 0, state.borderLeftColor || 'transparent'],
            ]}
            onUpdate={$onNodeBorderChange}
          />
        </dd>
      </dl>
    </SidebarBoxLayout>
  )
}