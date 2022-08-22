import { Formik } from "formik";
import PwdGenerateForm from "./PwdGenerateForm";

const PwdGenerateFormContainer = ({
  initialValues = {
    range: 10,
    strInclude: true,
    strLength: 5,
    numsInclude: true,
    numsLength: 5,
    punctInclude: false,
    punctLength: 0,
  },
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(form) => console.log(form)}
    >
      {({ values }) => <PwdGenerateForm values={values} />}
    </Formik>
  );
};

export default PwdGenerateFormContainer;
