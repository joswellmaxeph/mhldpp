import { useState } from "react";

function OkWindow({ text, id, onClose, quote, showing }) {
  const [pageTitle, setPageTitle] = useState("MHLD26");
  const helpClick = () => {
    setPageTitle(quote);
  }

  return (
    <div class="window" id={id} style={{ opacity: showing ? 1 : 0, transition: "opacity 0.5s" }}>
      <div class="title-bar">
        <div class="title-bar-text">{pageTitle}</div>
        <div class="title-bar-controls">
          <button aria-label="Help" onClick={helpClick}></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div class="window-body">
        <p>{text}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default OkWindow;