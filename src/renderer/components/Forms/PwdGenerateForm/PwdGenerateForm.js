import { Form, useField } from "formik";
import { Fragment } from "react";
import FormButton from "../../Buttons/FormButton";
import {
  CopyFormField,
  RangeFormField,
  SwitchFormField,
} from "../../Formik/Fields";
import {
  pwdGenerateFormFields,
  pwdGenerateRangeField,
} from "./pwdGenerateFormFields";
import "./styles.scss";

const renderPwdGenerateRange = ({ show, ...fieldProps }) => (
  <RangeFormField key={fieldProps.id} {...fieldProps} />
);

const renderPwdGenerateFormFields = (props) => (
  <SwitchFormField key={props.id} {...props} />
);

const PwdGenerateForm = ({ pwd }) => {
  return (
    <Form className="pwd-generate-form" id="pwd-generate-form">
      {renderPwdGenerateRange(pwdGenerateRangeField)}
      {pwdGenerateFormFields().map(renderPwdGenerateFormFields)}
      <FormButton type="submit" text="Generate" />
      <CopyFormField key="copy" value={pwd} />
    </Form>
  );
};

export default PwdGenerateForm;
