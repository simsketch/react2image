import { useRef, useState } from "react";
import "./styles.css";
import exportAsImage from "./utils/exportAsImage";

export default function App() {
  const exportRef = useRef();
  const [enableOverflow, setOverflow] = useState(true); // for demo purpose
  return (
    <>
      <div className="parent">
        <div ref={exportRef}>
          <p className={enableOverflow ? "whitespace-nowrap" : ""}>
            Quis blandit turpis cursus in hac habitasse. Commodo quis imperdiet
            massa tincidunt nunc pulvinar sapien et ligula. Sit amet dictum sit
            amet justo donec. Cursus mattis molestie a iaculis. Vel pretium
            lectus quam id leo in vitae. Quam nulla porttitor massa id neque
            aliquam vestibulum morbi blandit.
          </p>
        </div>
      </div>
      <button onClick={() => exportAsImage(exportRef.current, "test")}>
        Capture Image
      </button>
      <button onClick={() => setOverflow(!enableOverflow)}>
        {enableOverflow ? "Disable Overflow" : "Enable Overflow"}
      </button>
    </>
  );
}
