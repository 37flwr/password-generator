import React from "react";
import "./styles.scss";

const CopyButton = ({ clickHandler, text }) => {
  return (
    <button type="button" className="copy-button" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default CopyButton;
