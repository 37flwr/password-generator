import classNames from "classnames";
import { Field } from "formik";
import CopyButton from "src/renderer/components/Buttons/CopyButton";
import "./styles.scss";

const CopyFormField = (props) => {
  const { component, name, id, type, label, value } = props;

  return (
    <div className={classNames("range-form-field")}>
      <label className={classNames("range-field-label")} htmlFor={id}>
        {label}
      </label>
      <Field
        name="copy-form-field"
        id="copy-form-field"
        {...(component && { component })}
        value={value}
        type="text"
        className="copy-field"
        readOnly
      />
      <CopyButton value={value} />
      <span className="range-form-value">{value}</span>
    </div>
  );
};

export default CopyFormField;
