import classNames from "classnames";
import React from "react";
import "./styles.scss";

const FormButton = ({ type, text, customClassName, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={classNames("form-button", customClassName)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FormButton;
