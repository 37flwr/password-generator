import React from "react";
import Header from "src/renderer/components/Header";
import PwdGenerateFormContainer from "../../components/Forms/PwdGenerateForm/PwdGenerateFormContainer";
import "./styles.scss";

const PwdPage = () => {
  return (
    <section>
      <Header />
      <section className="pwd-page">
        <PwdGenerateFormContainer />
      </section>
    </section>
  );
};

export default PwdPage;
