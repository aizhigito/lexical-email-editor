import { ForwardRefExoticComponent } from 'react';
import { InitialEditorStateType } from '@lexical/react/LexicalComposer';
import { LexicalEditor } from 'lexical';
import { RefAttributes } from 'react';
import { SerializedEditorState } from 'lexical';

export declare const EmailEditor: ForwardRefExoticComponent<EmailEditorProps & RefAttributes<EmailEditorRef>>;

export declare interface EmailEditorProps extends ImageUploadCallback {
    editorState?: InitialEditorStateType;
}

export declare type EmailEditorRef = {
    exportData: () => [SerializedEditorState, string];
    updateEditorState: (editorState: InitialEditorStateType) => void;
    getEditor: () => LexicalEditor;
};

declare interface ImageUploadCallback {
    imageUploadCallback?: UploadCallbackType;
}

export declare type UploadCallbackType = (file: File, result: string, callback: (url: string) => void) => void;

export { }
