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
  const [width, setWidth] = useState(400); // for demo purpose
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // for demo purpose
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    // editorState.getCurrentContent().getPlainText();
  }
  const imageExport = () => {
    exportAsImage(exportRef.current, "test");
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();
    console.log(text);
  }

  return (
    <>
      <div className="parent">
        <div
            className="wrapper"
            ref={exportRef}>
          <Editor
            // toolbarOnFocus
            autofocus
            wrapperStyle={{width: `${width}px`}}
            // editorRef={setEditorReference}
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
            <li>Adjust Width</li>
            <li>Design Text</li>
            <li>Hide Toolbar</li>
            <li>Capture Image</li>
          </ol>
        </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
        <div>
      <label for="width">Width: </label>
      <input value={width} name="width" type="number" step="15" onChange={(e)=>setWidth(e.target.value)}></input>
      </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
        <div>
      <button onClick={() => setEnableToolbar(!enableToolbar)}>
        {enableToolbar ? "Show Toolbar" : "Hide Toolbar"}
      </button>
      </div>
        <div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      </div>
        <div>
      <button onClick={() => imageExport()}>
        Capture Image
      </button>
      </div>
        <div>
      {/* <button onClick={()=>changeWidth(width)}>Change Width</button> */}
      </div>
      </div>
    </>
  );
}
