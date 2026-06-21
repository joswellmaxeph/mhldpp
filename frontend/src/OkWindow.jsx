import { useState } from "react";

function OkWindow({ text, id, onClose, quote, showing }) {
  const [pageTitle, setPageTitle] = useState("MHLD26");
  const helpClick = () => {
    setPageTitle(quote);
  }

  return (
    <div className="window" id={id} style={{ opacity: showing ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
      <div className="title-bar">
        <div className="title-bar-text">{pageTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Help" onClick={helpClick}></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body">
        <p>{text}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default OkWindow;