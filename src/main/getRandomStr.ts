const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //to upper

export const getRandomStr = (len: number = 22): string => {
  let result = "";
  for (let i = 0; i < len; i++) {
    result = string[Math.floor(Math.random() * string.length)];
  }
  return result;
};
