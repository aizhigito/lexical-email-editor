import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import {SideBarPlugin} from './plugins/SideBarPlugin'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {ContentEditable} from '@lexical/react/LexicalContentEditable'
import {Desktop} from './ui/icons/Desktop.tsx'
import {Mobile} from './ui/icons/Mobile.tsx'
import {Tablet} from './ui/icons/Tablet.tsx'
import {$generateHtmlFromNodes} from '@lexical/html'
import {useSharedHistory} from './hooks/useSharedHistory.ts'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {mergeRegister} from '@lexical/utils'
import {
  $getRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  REDO_COMMAND,
  SerializedEditorState,
  UNDO_COMMAND,
} from 'lexical'
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'
import {LinkPlugin} from '@lexical/react/LexicalLinkPlugin'
import {EmailEditorRef, ImageUploadCallback} from './App.tsx'
import {InitialEditorStateType} from '@lexical/react/LexicalComposer'

type ScreenType = 'desktop' | 'mobile' | 'tablet'


export const Editor = forwardRef<EmailEditorRef, ImageUploadCallback>(({imageUploadCallback}, ref) => {
  const {historyState} = useSharedHistory()
  const [editor] = useLexicalComposerContext()

  const [screen, setScreen] = useState<ScreenType>('desktop')
  const [state, setState] = useState({canUndo: false, canRedo: false})
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null)
  const [isLinkEditMode, setIsLinkEditMode] = useState(false)
  const [html, setHtml] = useState('')
  const previewRef = useRef<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  const handlePreview = async () => {
    await editor.read(async () => {
      const html = $generateHtmlFromNodes(editor)
      setHtml(html)
    })
    previewRef.current?.classList.toggle('show')
  }

  const exportData = (): [SerializedEditorState, string] => {
    let html = ''
    let serializedEditorState: SerializedEditorState = {} as SerializedEditorState
    editor.read(() => {
      html = $generateHtmlFromNodes(editor)
      html = `<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${html}`
      serializedEditorState = editor.getEditorState().toJSON()
    })

    return [serializedEditorState, html]
  }

  const updateEditorState = (initialEditorState: InitialEditorStateType) => {
    if (initialEditorState === null) return
    switch (typeof initialEditorState) {
      case 'string': {
        const parsedEditorState = editor.parseEditorState(initialEditorState);
        editor.setEditorState(parsedEditorState, {tag: 'history-merge'});
        break;
      }
      case 'object': {
        editor.setEditorState(initialEditorState, {tag: 'history-merge'});
        break;
      }
      case 'function': {
        editor.update(() => {
          const root = $getRoot();
          if (root.isEmpty()) {
            initialEditorState(editor);
          }
        }, {tag: 'history-merge'});
        break;
      }
    }
  }

  useImperativeHandle(ref, () => ({
    exportData,
    updateEditorState,
    getEditor: () => editor,
  }))

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setState(prevState => ({...prevState, canUndo: payload}))
          return false
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setState(prevState => ({...prevState, canRedo: payload}))
          return false
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    )
  }, [])

  return (
    <>
      {
        floatingAnchorElem
        && <SideBarPlugin anchorElem={floatingAnchorElem} editor={editor} imageUploadCallback={imageUploadCallback}/>
      }
      <div className="toolbar">
        <div>
          <button
            type="button"
            className={`history ${state.canUndo ? 'active' : ''}`}
            onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
          >
            <i className="undo"/>
          </button>
          <button
            type="button"
            className={`history ${state.canRedo ? 'active' : ''}`}
            onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
          >
            <i className="redo"/>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setScreen('desktop')}
            className={screen === 'desktop' ? 'active' : ''}
          >
            <Desktop fill="currentColor"/>
          </button>
          <button
            type="button"
            onClick={() => setScreen('mobile')}
            className={screen === 'mobile' ? 'active' : ''}
          >
            <Mobile fill="currentColor"/>
          </button>
          <button
            type="button"
            onClick={() => setScreen('tablet')}
            className={screen === 'tablet' ? 'active' : ''}
          >
            <Tablet fill="currentColor"/>
          </button>
        </div>
        <button
          type="button"
          className="preview-btn"
          onClick={handlePreview}
        ><i className="eye"/></button>
      </div>
      <div className="editor-container">
        <HistoryPlugin externalHistoryState={historyState}/>
        <LinkPlugin/>
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className={`editor ${screen}`} ref={onRef}>
                <ContentEditable/>
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        {floatingAnchorElem &&
          <>
            <FloatingLinkEditorPlugin
              anchorElem={floatingAnchorElem}
              isLinkEditMode={isLinkEditMode}
              setIsLinkEditMode={setIsLinkEditMode}
            />
            <FloatingTextFormatToolbarPlugin
              anchorElem={floatingAnchorElem}
              setIsLinkEditMode={setIsLinkEditMode}
            />
          </>
        }
      </div>
      <div className="preview-box" ref={previewRef}>
        <div className="toolbar">
          <div/>
          <div>
            <button
              type="button"
              onClick={() => setScreen('desktop')}
              className={screen === 'desktop' ? 'active' : ''}
            >
              <Desktop fill="currentColor"/>
            </button>
            <button
              type="button"
              onClick={() => setScreen('mobile')}
              className={screen === 'mobile' ? 'active' : ''}
            >
              <Mobile fill="currentColor"/>
            </button>
            <button
              type="button"
              onClick={() => setScreen('tablet')}
              className={screen === 'tablet' ? 'active' : ''}
            >
              <Tablet fill="currentColor"/>
            </button>
          </div>
          <button type="button" className="preview-btn" onClick={handlePreview}><i className="eye-slash"/></button>
        </div>
        <iframe
          data-safe-html={false}
          srcDoc={`<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${html}`}
          title="email-preview"
          className={screen}
          width="100%"
        />
      </div>
    </>
  )
})