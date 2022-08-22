import classNames from "classnames";
import { Field } from "formik";
import "./styles.scss";

const SwitchFormField = (props) => {
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

export default SwitchFormField;
