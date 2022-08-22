import Slider from "calcite-react/Slider";
import classNames from "classnames";
import { Field, useField } from "formik";
import "./styles.scss";

const RangeFormField = (props) => {
  const {
    component,
    name,
    id,
    type,
    value,
    min,
    max,
    label,
    customContainerClassName,
    customFieldClassName,
  } = props;
  const [field] = useField(name);

  return (
    <div className={classNames("range-form-field", customContainerClassName)}>
      <label
        className={classNames("range-field-label", customFieldClassName)}
        htmlFor={id}
      >
        {label}
      </label>
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
      <span className="range-form-value">{field.value}</span>
    </div>
  );
};

export default RangeFormField;
