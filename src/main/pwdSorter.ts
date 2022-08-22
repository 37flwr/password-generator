import { shuffleArray } from "./shuffleArray";

export const pwdSorter = (pwd: string, len: number): string => {
  const password = shuffleArray(pwd.split(""));
  return password.substring(0, len);
};
