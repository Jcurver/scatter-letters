import { A, B, C, D, E, F, G, H, I, J } from "./alphabetArray.js";

const customBlank = (width: number): number[][] => {
  if (width < 1) {
    return [[-1]];
  }
  let x = [];
  for (let i = 0; i < width; i++) {
    x.push(0);
  }
  return new Array(20).fill(x);
};

const combineAlphabet = (
  oldArr: number[][],
  newArr: number[][]
): number[][] => {
  if (oldArr[0][0] === -1) {
    return newArr;
  }
  let combineArr = [];
  for (let i = 0; i < 20; i++) {
    combineArr.push([...oldArr[i], ...newArr[i]]);
  }
  return combineArr;
};

export const getRGB = (HEX: string): number[] =>
  HEX.replace(/^#/, "")
    .match(/.{2}/g)
    ?.map((replacer) => parseInt(replacer, 16) || 0) || [0, 0, 0];

export const getStrs = (
  strs: string,
  blankWidth: number,
  letterSpacing: number
): number[][] => {
  if (strs.length > 40) return [[-1]];
  const strsArr = strs.toUpperCase().split("");

  let dotArr = [[-1]];
  for (let i = 0; i < strsArr.length; i++) {
    switch (strsArr[i]) {
      case " ":
        dotArr = combineAlphabet(dotArr, customBlank(blankWidth));
        break;
      case "A":
        dotArr = combineAlphabet(dotArr, A);
        break;
      case "B":
        dotArr = combineAlphabet(dotArr, B);
        break;
      case "C":
        dotArr = combineAlphabet(dotArr, C);
        break;
      case "D":
        dotArr = combineAlphabet(dotArr, D);
        break;
      case "E":
        dotArr = combineAlphabet(dotArr, E);
        break;
      case "F":
        dotArr = combineAlphabet(dotArr, F);
        break;
      case "G":
        dotArr = combineAlphabet(dotArr, G);
        break;
      case "H":
        dotArr = combineAlphabet(dotArr, H);
        break;
      case "I":
        dotArr = combineAlphabet(dotArr, I);
        break;
      case "J":
        dotArr = combineAlphabet(dotArr, J);
        break;
      default:
        break;
    }
    if (i !== strsArr.length - 1) {
      dotArr = combineAlphabet(dotArr, customBlank(letterSpacing));
    }
  }
  return dotArr;
};
