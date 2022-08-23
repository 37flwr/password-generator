import { useField } from "formik";
import SwitchFormFieldComponent from "./SwitchFormFieldComponent";

const SwitchFormField = (props) => {
  const { relation } = props;
  const relativeStatus = relation && useField(relation);

  return relativeStatus ? (
    relativeStatus[0].value && <SwitchFormFieldComponent {...props} />
  ) : (
    <SwitchFormFieldComponent {...props} />
  );
};

export default SwitchFormField;
