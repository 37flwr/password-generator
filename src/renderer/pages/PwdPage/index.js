import React, { useState } from "react";
import Header from "src/renderer/components/Header";
import PwdGenerateFormContainer from "../../components/Forms/PwdGenerateForm/PwdGenerateFormContainer";
import "./styles.scss";

const PwdPage = () => {
  const [range, setRange] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = new FormData(e.target);
    console.log(form);
  };
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
