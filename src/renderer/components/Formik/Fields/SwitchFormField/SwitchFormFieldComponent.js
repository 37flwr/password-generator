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
      className={classNames("toggle-input-container", customContainerClassName)}
    >
      <div className="toggle-control">
        <Field
          name={name}
          id={id}
          {...(component && { component })}
          type={type}
          className="toggle-field"
        />
        <label htmlFor={id} className="control" />
      </div>
      <label
        className={classNames("toggle-label", customFieldClassName)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default SwitchFormFieldComponent;
