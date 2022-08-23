import classNames from "classnames";
import { Field } from "formik";
import CopyButton from "src/renderer/components/Buttons/CopyButton";
import "./styles.scss";

const CopyFormField = (props) => {
  const { component, value } = props;

  return (
    <div className={classNames("copy-form-field")}>
      <label
        className={classNames("copy-field-label")}
        htmlFor="copy-form-field"
      >
        Your password
      </label>
      <div className="copy-field-container">
        <Field
          name="copy-form-field"
          id="copy-form-field"
          {...(component && { component })}
          value={value}
          type="text"
          className="copy-field"
          readOnly
        />
        <CopyButton customClassName="copy-field-btn" value={value} />
      </div>
    </div>
  );
};

export default CopyFormField;
