import classNames from "classnames";
import { Field } from "formik";
import React from "react";
import "./styles.scss";

const SwitchFormFieldComponent = (props) => {
  const {
    component,
    name,
    id,
    type,
    label,
    customContainerClassName,
    customFieldClassName,
  } = props;
  return (
    <div
      className={classNames("radio-input-container", customContainerClassName)}
    >
      <Field
        name={name}
        id={id}
        {...(component && { component })}
        type={type}
        className="radio-field"
      />
      <label
        className={classNames("radio-label", customFieldClassName)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default SwitchFormFieldComponent;
