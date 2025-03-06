# Lexical Email Editor

## Description

Lexical Email Editor is a rich-text editor built on top of [lexical](https://github.com/facebook/lexical). It is designed to be a simple, easy-to-use editor that can be used to compose emails.

## Demo

You can try out the editor [here](https://aizhigito.github.io/lexical-email-editor/).

## Usage

To use the editor, simply import the `EmailEditor` component and render it in your app.
```typescript jsx
import { EmailEditor } from 'lexical-email-editor';
import 'lexical-email-editor/styles.css';

const App = () => {
    return (
        <EmailEditor />
    );
}
```

To get the content of the editor state, pass ref to the `EmailEditor` component and call the `getContent` method.
```typescript jsx
import {EmailEditor, EmailEditorRef} from "lexical-email-editor-react"
import 'lexical-email-editor/styles.css'

const App = () => {
    const editorRef = useRef<EmailEditorRef>(null)

  const onSubmit = () => {
    if (editorRef.current) {
      const [serializedData, html] = editorRef.current.exportData()
    }
  }
  return (
    <div>
      <EmailEditor ref={editorRef}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}
```
To update the content of the editor, update with the 
```typescript jsx
const editorRef = useRef<EmailEditorRef>(null)

const fetchData = async () => {
  const url = ""
  try {
    const res = await fetch(url)
    if (res.ok) {
      const data = await res.json()
      editorRef.current?.updateEditorState(data)
    }
  } catch (e) {
    console.error(e)
  }
}
```
If you want upload to server, you can use the `imageUploadCallback` prop.
```typescript jsx
const onImageUpload: UploadCallbackType = (file, result, callback) => {
  // `file` is the file object, `result` is the base64 string
  const imageUrl = ''; // Your image URL
  // Call the callback with the image URL
  callback(imageUrl);
}

return (
  <EmailEditor imageUploadCallback={onImageUpload}/>
)
```
