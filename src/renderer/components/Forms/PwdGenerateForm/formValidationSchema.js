import lodash from "lodash";
import * as Yup from "yup";

const getValidationSchema = () => {
  //   return Yup.object().shape({
  //     name: Yup.string().required('Name is required'),
  //     email: Yup.string()
  //       .email('Must be a valid email')
  //       .required('Email is required'),
  //   });
  //   return Yup.object()
  //     .shape({
  //       strInclude: Yup.string().required("asd"),
  //       numsInclude: Yup.string(),
  //     })
  //     .test(
  //       "email or mobile",
  //       "email or mobile is required",
  //       (value) =>
  //         lodash.has(value, "numsInclude") || lodash.has(value, "strInclude")
  //     );
  return Yup.object().shape(
    {
      strInclude: Yup.string().when(["numsInclude", "punctInclude"], {
        is: (numsInclude, punctInclude) => !numsInclude && !punctInclude,
        then: Yup.string().required(),
      }),
      numsInclude: Yup.string().when(["strInclude", "punctInclude"], {
        is: (strInclude, punctInclude) => !strInclude && !punctInclude,
        then: Yup.string().required(),
      }),
      c: Yup.string().when(["strInclude", "numsInclude"], {
        is: (strInclude, numsInclude) => !strInclude && !numsInclude,
        then: Yup.string().required(),
      }),
    },
    [
      ["strInclude", "numsInclude"],
      ["strInclude", "punctInclude"],
      ["numsInclude", "punctInclude"],
    ]
  );
};

export default getValidationSchema;
