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
  const [modal, setModal] = useState(false);

  const handleSubmit = (form) => {
    const generatedPwd = pwdGenerator(form);
    setModal(true);
    // navigator.clipboard.writeText(generatedPwd);
    setPwd(generatedPwd);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(form) => handleSubmit(form)}
    >
      {() => <PwdGenerateForm pwd={pwd} modal={modal} setModal={setModal} />}
    </Formik>
  );
};

export default PwdGenerateFormContainer;
