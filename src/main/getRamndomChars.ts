export const getRandomChars = (str: string, len: number): string => {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * str.length)];
  }
  return result;
};
