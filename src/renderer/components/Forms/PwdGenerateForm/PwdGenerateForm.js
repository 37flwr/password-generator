import { Form, useField } from "formik";
import React from "react";
import { RangeFormField, SwitchFormField } from "../../Formik/Fields";
import "./styles.scss";

const switchFormFields = () =>
  [
    {
      id: "strInclude",
      name: "strInclude",
      type: "checkbox",
      placeholder: "Include alphabetic characters",
      show: true,
    },
    {
      id: "numsInclude",
      name: "numsInclude",
      type: "checkbox",
      placeholder: "Include numeric characters",
      show: true,
    },
    {
      id: "punctInclude",
      name: "punctInclude",
      type: "checkbox",
      placeholder: "Include punctuation characters",
      show: true,
    },
  ].filter(({ show }) => show);

const rangeFormFields = () =>
  [
    {
      id: "strLength",
      name: "strLength",
      value: 5,
      min: 1,
      max: 20,
      type: "range",
      show: true,
    },
  ].filter(({ show }) => show);

const pwdGenerateFormFields = () => [
  [
    {
      id: "strInclude",
      name: "strInclude",
      value: true,
      type: "checkbox",
      placeholder: "Include alphabetic characters",
      show: true,
    },
    {
      id: "strLength",
      name: "strLength",
      value: 5,
      min: 1,
      max: 20,
      type: "range",
      show: true,
    },
  ],
  [
    {
      id: "numsInclude",
      name: "numsInclude",
      type: "checkbox",
      placeholder: "Include numeric characters",
      show: true,
    },
    {
      id: "numsLength",
      name: "numsLength",
      value: 5,
      min: 1,
      max: 20,
      type: "range",
      show: true,
    },
  ],
  [
    {
      id: "punctInclude",
      name: "punctInclude",
      type: "checkbox",
      placeholder: "Include punctuation characters",
      show: true,
    },
    {
      id: "punctLength",
      name: "punctLength",
      value: 5,
      min: 1,
      max: 20,
      type: "range",
      show: true,
    },
  ],
];

const renderPasswordGenerateForm = (props) => {
  const [field] = useField(props[0].name);

  return (
    <React.Fragment key={props[0].id + props[1].id}>
      <SwitchFormField key={props[0].id} {...props[0]} />
      {field.value && <RangeFormField key={props[1].id} {...props[1]} />}
    </React.Fragment>
  );
};

const PwdGenerateForm = ({ values }) => {
  return (
    <Form className="apply-form" id="apply-form">
      {pwdGenerateFormFields({ values }).map(renderPasswordGenerateForm)}
      <button type="submit">Generate</button>
    </Form>
  );
};

export default PwdGenerateForm;
