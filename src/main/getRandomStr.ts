const upperCaseString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseString = "abcdefghijklmnopqrstuvwxyz";

export const getRandomStr = (len = 22, upperCase: boolean): string => {
  let result = "";
  const string = upperCase ? upperCaseString : lowercaseString;
  for (let i = 0; i < len; i++) {
    result += string[Math.floor(Math.random() * string.length)];
  }
  return result;
};
