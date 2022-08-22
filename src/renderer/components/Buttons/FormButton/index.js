import classNames from "classnames";
import React from "react";
import "./styles.scss";

const FormButton = ({ type, text, customClassName }) => {
  return (
    <button type={type} className={classNames("form-button", customClassName)}>
      {text}
    </button>
  );
};

export default FormButton;
