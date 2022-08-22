const numeric = "0123456789";

export const getRandomInt = (len: number): string => {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += numeric[Math.floor(Math.random() * numeric.length)];
  }
  return result;
};
