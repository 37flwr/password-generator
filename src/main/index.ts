import { getRandomInt } from "./getRandomInt";
import { getRandomPunct } from "./getRandomPunct";
import { getRandomStr } from "./getRandomStr";
import { pwdSorter } from "./pwdSorter";

function password_generator(
  len: number = 10,
  strLength: number = 5,
  numLength: number = 5,
  punctLength: number = 0
): string {
  let pwd = "";
  const str = getRandomStr(strLength);
  const nums = getRandomInt(numLength);
  const punct = getRandomPunct(punctLength);
  pwd = pwdSorter(str + punct + nums, len);
  return pwd;
}

console.log(password_generator());
