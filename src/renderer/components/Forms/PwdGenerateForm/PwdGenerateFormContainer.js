import { Formik } from "formik";
import { useState } from "react";
import { pwdGenerator } from "src/main";
import PwdGenerateForm from "./PwdGenerateForm";

const PwdGenerateFormContainer = ({
  initialValues = {
    range: 10,
    strInclude: true,
    upperCase: true,
    numsInclude: true,
    punctInclude: false,
  },
}) => {
  const [pwd, setPwd] = useState("");

  const handleSubmit = (form) => {
    const a = pwdGenerator(form);
    navigator.clipboard.writeText(a);
    setPwd(a);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(form) => handleSubmit(form)}
    >
      {() => <PwdGenerateForm pwd={pwd} />}
    </Formik>
  );
};

export default PwdGenerateFormContainer;
