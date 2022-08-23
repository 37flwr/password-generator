import { Form } from "formik";
import FormButton from "../../Buttons/FormButton";
import {
  CopyFormField,
  RangeFormField,
  SwitchFormField,
} from "../../Formik/Fields";
import Modal from "../../Modal";
import {
  pwdGenerateFormFields,
  pwdGenerateRangeField,
} from "./pwdGenerateFormFields";
import "./styles.scss";

const renderPwdGenerateRange = ({ ...fieldProps }) => (
  <RangeFormField key={fieldProps.id} {...fieldProps} />
);

const renderPwdGenerateFormFields = (props) => (
  <SwitchFormField key={props.id} {...props} />
);

const PwdGenerateForm = ({ pwd, modal, setModal }) => {
  return (
    <Form className="pwd-generate-form" id="pwd-generate-form">
      {renderPwdGenerateRange(pwdGenerateRangeField)}
      <div className="pwd-generate-form-params">
        {pwdGenerateFormFields().map(renderPwdGenerateFormFields)}
      </div>
      <FormButton type="submit" text="Generate" />
      {modal && (
        <Modal setModal={setModal}>
          <CopyFormField key="copy" value={pwd} />
          <FormButton type="submit" text="Refresh" />
        </Modal>
      )}
    </Form>
  );
};

export default PwdGenerateForm;
