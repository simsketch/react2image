import { useRef, useState } from "react";
import "./styles.css";
import exportAsImage from "./utils/exportAsImage";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function App() {
  const exportRef = useRef();
  const [enableToolbar, setEnableToolbar] = useState(false); // for demo purpose
  // const w = window.location.search.replace('?w=','');
  // console.log(w);
  const [width, setWidth] = useState(600); // for demo purpose
  const [editorRef, setEditorRef] = useState(); // for demo purpose
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // for demo purpose
  // editorRef.focus();
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    // editorState.getCurrentContent().getPlainText();
  }
  const imageExport = () => {
    exportAsImage(exportRef.current, "test");
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();
    alert(text);
  }

  return (
    <>
      <div className="parent">
        <div
            className="wrapper"
            ref={exportRef}>
          <Editor
            // toolbarOnFocus
            placeholder="Enter some text and begin styling..."
            wrapperStyle={{width: `${width}px`}}
            editorRef={setEditorRef}
            toolbarHidden={enableToolbar}
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
          {/* <p className={enableOverflow ? "whitespace-nowrap" : ""}>
            Quis blandit turpis cursus in hac habitasse. Commodo quis imperdiet
            massa tincidunt nunc pulvinar sapien et ligula. Sit amet dictum sit
            amet justo donec. Cursus mattis molestie a iaculis. Vel pretium
            lectus quam id leo in vitae. Quam nulla porttitor massa id neque
            aliquam vestibulum morbi blandit.
          </p> */}
        </div>
      </div>
      <div className="sidebar">
        <div>
          <ol>
            <li><input value={width} name="width" type="number" step="15" onChange={(e)=>setWidth(e.target.value)}></input></li>
            <li>Enter and style text.</li>
            <li>
      <button onClick={() => setEnableToolbar(!enableToolbar)}>
        {enableToolbar ? "Show Toolbar" : "Hide Toolbar"}
      </button></li>
            <li>
      <button onClick={() => imageExport()}>
        Capture Image
      </button></li>
          </ol>
        </div>
      </div>
    </>
  );
}
