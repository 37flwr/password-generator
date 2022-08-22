import { Form, useField } from "formik";
import { Fragment } from "react";
import FormButton from "../../Buttons/FormButton";
import { RangeFormField, SwitchFormField } from "../../Formik/Fields";
import { pwdGenerateFormFields } from "./pwdGenerateFormFields";
import "./styles.scss";

const renderPwdGenerateFormFields = (props) => {
  const [field] = useField(props[0].name);

  return (
    <Fragment key={props[0].id + props[1].id}>
      <SwitchFormField key={props[0].id} {...props[0]} />
      {field.value && <RangeFormField key={props[1].id} {...props[1]} />}
    </Fragment>
  );
};

const PwdGenerateForm = ({ values }) => {
  return (
    <Form className="pwd-generate-form" id="pwd-generate-form">
      {pwdGenerateFormFields({ values }).map(renderPwdGenerateFormFields)}
      <FormButton type="submit" text="Generate" />
    </Form>
  );
};

export default PwdGenerateForm;
