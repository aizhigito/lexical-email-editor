import React, {useCallback, useEffect, useState} from 'react'
import {DropdownColorPicker} from '../../ui/ColorPicker'
import {$getEmailTemplateRoot, EmailTemplateRootNodeState} from '../../nodes/EmailTemplateRootNode.ts'
import {$setSelection, COMMAND_PRIORITY_LOW, ElementFormatType, LexicalEditor} from 'lexical'
import {SizeChanger} from './SizeChanger.tsx'
import {Alignments} from './Alignments.tsx'
import {
  DEFAULT_EMAIL_ROOT_ALIGN_ITEMS,
  DEFAULT_EMAIL_ROOT_BACKGROUND_COLOR,
  DEFAULT_EMAIL_ROOT_COLOR, DEFAULT_EMAIL_ROOT_FONT_FAMILY,
  DEFAULT_EMAIL_ROOT_FONT_SIZE,
  DEFAULT_EMAIL_ROOT_LAYOUT_WIDTH, DEFAULT_EMAIL_ROOT_LINE_HEIGHT,
} from '../../constants.ts'
import {mergeRegister} from '@lexical/utils'
import {CONTENT_FONT_SIZE_CHANGE_EMAIL_COMMAND} from '../../commands.ts'

interface BodyLayoutSidebarProps {
  editor: LexicalEditor,
}

export const BodyLayoutSidebar: React.FC<BodyLayoutSidebarProps> = ({editor}) => {
  const [state, setState] = useState<EmailTemplateRootNodeState>({
    layoutWidth: DEFAULT_EMAIL_ROOT_LAYOUT_WIDTH,
    color: DEFAULT_EMAIL_ROOT_COLOR,
    fontSize: DEFAULT_EMAIL_ROOT_FONT_SIZE,
    backgroundColor: DEFAULT_EMAIL_ROOT_BACKGROUND_COLOR,
    fontFamily: DEFAULT_EMAIL_ROOT_FONT_FAMILY,
    lineHeight: DEFAULT_EMAIL_ROOT_LINE_HEIGHT,
    alignItems: DEFAULT_EMAIL_ROOT_ALIGN_ITEMS,
  })

  const $onColorChange = useCallback((color: string, skipHistoryStack: boolean, typeOfColor: string = 'color') => {
    editor.update(() => {
      const node = $getEmailTemplateRoot(editor)
      if (typeOfColor === 'color') {
        node.setColor(color)
      } else {
        node.setBackgroundColor(color)
      }
    }, {
      ...skipHistoryStack ? {tag: 'historic'} : {},
      onUpdate: () => {
        setState((prevState) => {
          return {
            ...prevState,
            [typeOfColor === 'color' ? 'color' : 'backgroundColor']: color,
          }
        })
      },
    })
  }, [editor])

  const $onAlignmentChange = useCallback((alignItems: ElementFormatType) => {
    editor.update(() => {
      const emailTemplateRoot = $getEmailTemplateRoot(editor)
      emailTemplateRoot.setAlignItems(alignItems === 'center' ? 'center' : 'start')
      $setSelection(null)
    }, {
      onUpdate: () => {
        setState(prev => ({...prev, alignItems}))
      },
    })
  }, [editor])

  const $onContentWidthChange = useCallback((layoutWidth: number) => {
    editor.update(() => {
      const emailTemplateRoot = $getEmailTemplateRoot(editor)
      emailTemplateRoot.setLayoutWidth(layoutWidth)
      $setSelection(null)
    }, {
      onUpdate: () => {
        setState(prev => ({...prev, layoutWidth}))
      },
    })
  }, [editor])

  const onFontSizeChange = useCallback((fontSize: number) => {
    setState(prev => ({...prev, fontSize}))
    return true
  }, [])

  useEffect(() => {
    let emailRootState: Partial<EmailTemplateRootNodeState> = {}
    editor.read(() => {
      const emailTemplateRoot = $getEmailTemplateRoot(editor)
      emailRootState = emailTemplateRoot.getState()
      setState(prev => ({...prev, ...emailRootState}))
    })

    return mergeRegister(
      editor.registerCommand(
        CONTENT_FONT_SIZE_CHANGE_EMAIL_COMMAND,
        onFontSizeChange,
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor, onFontSizeChange])

  return (
    <div className="body-layout-box">
      <dl>
        <dt>Text Color</dt>
        <dd>
          <DropdownColorPicker
            color={state.color}
            name="color"
            onChange={$onColorChange}
          />
        </dd>
        <dt>Background Color</dt>
        <dd>
          <DropdownColorPicker
            color={state.backgroundColor}
            name="bg"
            onChange={$onColorChange}
          />
        </dd>
        <dt>Font Size</dt>
        <dd>
          <SizeChanger
            size={`${state.fontSize}px`}
            editor={editor}
            isRoot={true}
          />
        </dd>
        <dt>Content Alignment</dt>
        <dd>
          <Alignments
            currentActive={state.alignItems === 'center' ? 'center' : 'left'}
            showAlignments={['left', 'center']}
            onClick={$onAlignmentChange}
          />
        </dd>
        <dt>Content Width</dt>
        <dd>
          <SizeChanger
            size={`${state.layoutWidth}px`}
            editor={editor}
            onUpdate={$onContentWidthChange}
            minSize={320}
            maxSize={1000}
            stepBy={20}
          />
        </dd>
      </dl>
    </div>
  )
}