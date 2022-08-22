import React, { useState } from "react";
import Header from "src/renderer/components/Header";
import PwdGenerateFormContainer from "../../components/Forms/PwdGenerateForm/PwdGenerateFormContainer";
import "./styles.scss";

const PwdPage = () => {
  return (
    <section>
      <Header />
      <section>
        <h1>Password Generator</h1>
        <PwdGenerateFormContainer />
      </section>
    </section>
  );
};

export default PwdPage;
