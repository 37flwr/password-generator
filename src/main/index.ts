import { getRandomInt } from "./getRandomInt";
import { getRandomPunct } from "./getRandomPunct";
import { getRandomStr } from "./getRandomStr";
import { pwdSorter } from "./pwdSorter";

export const pwdGenerator = (
  len = 10,
  strLength = 5,
  upperCase = false,
  numLength = 5,
  punctLength = 0
): string => {
  const str = getRandomStr(strLength, upperCase);
  const nums = getRandomInt(numLength);
  const punct = getRandomPunct(punctLength);
  const pwd = pwdSorter(str + punct + nums, len);

  return pwd;
};
