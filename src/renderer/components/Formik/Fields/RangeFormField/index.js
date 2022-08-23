import classNames from "classnames";
import { Field, useField } from "formik";
import "./styles.scss";

const RangeFormField = (props) => {
  const {
    component,
    name,
    id,
    type,
    min,
    max,
    label,
    customContainerClassName,
    customFieldClassName,
  } = props;
  const [field] = useField(name);

  return (
    <div className={classNames("range-form-field", customContainerClassName)}>
      <div className="range-form-field-data">
        <label
          className={classNames("range-field-label", customFieldClassName)}
          htmlFor={id}
        >
          {label}:
        </label>
        <span className="range-form-value">{field.value}</span>
      </div>
      <Field
        name={name}
        id={id}
        {...(component && { component })}
        value={field.value}
        min={min}
        max={max}
        type={type}
        className="range-field"
      />
    </div>
  );
};

export default RangeFormField;
