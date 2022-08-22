export const pwdGenerateFormFields = () => [
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
