export const pwdGenerateFormFields = () => [
  {
    id: "strInclude",
    name: "strInclude",
    type: "checkbox",
    label: "Include alphabetic characters",
    show: true,
  },
  {
    id: "upperCase",
    name: "upperCase",
    type: "checkbox",
    label: "Include uppercase alphabetic characters",
    relation: "strInclude",
    show: true,
  },
  {
    id: "numsInclude",
    name: "numsInclude",
    type: "checkbox",
    label: "Include numeric characters",
    show: true,
  },
  {
    id: "punctInclude",
    name: "punctInclude",
    type: "checkbox",
    label: "Include punctuation characters",
    show: true,
  },
];

export const pwdGenerateRangeField = {
  id: "range",
  name: "range",
  value: 10,
  min: 2,
  max: 30,
  type: "range",
  label: "Password length",
  show: true,
};
