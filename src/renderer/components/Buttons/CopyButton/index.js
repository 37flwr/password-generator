import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Check from "./Check";
import Clippy from "./Clippy";
import "./styles.scss";

const CopyButton = ({ value, customClassName }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      copied && setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  const clickHandler = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  return (
    <button
      disabled={!value || copied}
      className={classNames("copy-btn", customClassName)}
      onClick={clickHandler}
      type="button"
    >
      {copied ? <Check className="check" /> : <Clippy className="clippy" />}
    </button>
  );
};

export default CopyButton;
