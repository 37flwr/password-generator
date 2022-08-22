export const pwdSorter = (pwd: string, len: number): string => {
  let password = pwd;
  password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return password.substring(0, len);
};
