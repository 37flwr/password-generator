const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

export const getRandomPunct = (len: number): string => {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += punctuation[Math.floor(Math.random() * punctuation.length)];
  }
  return result;
};
