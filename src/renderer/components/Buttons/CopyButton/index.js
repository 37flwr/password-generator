import React, { useState } from "react";
import CopyIcon from "../../../assets/CopyIcon.png";
import "./styles.scss";

const CopyButton = ({ value }) => {
  const [btnStatus, setBtnStatus] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText(value);
    setBtnStatus((currStatus) => !currStatus);
  };

  return (
    <button type="button" className="copy-button" onClick={clickHandler}>
      {btnStatus ? <div>1</div> : <img src={CopyIcon} />}
    </button>
  );
};

export default CopyButton;
