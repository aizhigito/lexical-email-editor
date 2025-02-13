import {forwardRef} from 'react'
import {InitialConfigType, InitialEditorStateType, LexicalComposer} from '@lexical/react/LexicalComposer'
import {Editor} from './Editor.tsx'
import './theme/theme.css'
import Theme from './theme/Theme.ts'
import {EmailTemplateRootNode} from './nodes/EmailTemplateRootNode.ts'
import {LayoutContainerNode} from './nodes/LayoutContainerNode.ts'
import {LayoutItemNode} from './nodes/LayoutItemNode.ts'
import {EmailTemplateBlockNode} from './nodes/EmailTemplateBlock.ts'
import {$createCustomParagraphNode, CustomParagraphNode} from './nodes/CustomParagraphNode.ts'
import {LexicalEditor, ParagraphNode, SerializedEditorState} from 'lexical'
import {HeadingNode} from '@lexical/rich-text'
import {ImageNode} from './nodes/ImageNode.tsx'
import {ImageBlockNode} from './nodes/ImageBlockNode.ts'
import {ButtonLinkNode} from './nodes/ButtonLinkNode.tsx'
import {ButtonLinkBlockNode} from './nodes/ButtonLinkBlockNode.ts'
import {AutoLinkNode, LinkNode} from '@lexical/link'
import {INITIAL_STATE} from './constants.ts'
import './index.css'

export type UploadCallbackType = (file: File, result: string, callback: (url: string) => void) => void
export interface ImageUploadCallback {
  imageUploadCallback?: UploadCallbackType
}

export interface AppProps extends ImageUploadCallback {
  editorState?: InitialEditorStateType
}

export type EmailEditorRef = {
  exportData: () => [SerializedEditorState, string]
  updateEditorState: (editorState: InitialEditorStateType) => void
  getEditor: () => LexicalEditor
}

export const App = forwardRef<EmailEditorRef, AppProps>(({editorState, imageUploadCallback}, ref) => {
  const onError = (error: Error) => {
    console.log(error)
  }
  const initialConfig: InitialConfigType = {
    editorState: editorState || INITIAL_STATE,
    namespace: 'LexicalEmailEditor',
    nodes: [
      EmailTemplateRootNode,
      EmailTemplateBlockNode,
      LayoutContainerNode,
      LayoutItemNode,
      HeadingNode,
      ImageBlockNode,
      ImageNode,
      ButtonLinkBlockNode,
      ButtonLinkNode,
      AutoLinkNode,
      LinkNode,
      CustomParagraphNode,
      {
        replace: ParagraphNode,
        with: () => {
          return $createCustomParagraphNode()
        },
        withKlass: CustomParagraphNode,
      },
    ],
    onError,
    theme: Theme,
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="email-editor-shell">
        <Editor ref={ref} imageUploadCallback={imageUploadCallback}/>
      </div>
    </LexicalComposer>
  )
})