import { getRandomInt } from "./getRandomInt";
import { getRandomPunct } from "./getRandomPunct";
import { getRandomStr } from "./getRandomStr";
import { IPwdOptions } from "./interfaces";
import { pwdSorter } from "./pwdSorter";

export const pwdGenerator = (params: IPwdOptions): string => {
  const str = params.strInclude
    ? getRandomStr(params.range, params.upperCase)
    : "";
  const nums = params.numsInclude ? getRandomInt(params.range) : "";
  const punct = params.punctInclude ? getRandomPunct(params.range) : "";
  const pwd = pwdSorter(str + punct + nums, params.range);

  return pwd;
};
