import {
  lowerCaseAlph,
  numeric,
  punctuation,
  upperCaseAlph,
} from "./enums/pwdStrings.enum";
import { getRandomChars } from "./getRamndomChars";
import { IPwdOptions } from "./interfaces";
import { pwdSorter } from "./pwdSorter";

export const pwdGenerator = (params: IPwdOptions): string => {
  const str = params.strInclude
    ? getRandomChars(
        params.upperCase ? upperCaseAlph : lowerCaseAlph,
        params.range
      )
    : "";
  const nums = params.numsInclude ? getRandomChars(numeric, params.range) : "";
  const punct = params.punctInclude
    ? getRandomChars(punctuation, params.range)
    : "";
  const pwd = pwdSorter(str + punct + nums, params.range);

  return pwd;
};
