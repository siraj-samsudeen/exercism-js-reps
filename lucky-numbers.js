export function twoSum(leftInput, rightInput) {
  //   return +leftInput.join('') + +rightInput.join('')
  return Number(leftInput.join("")) + Number(rightInput.join(""));
}

export function luckyNumber(val) {
  return val == [...String(val)].reverse().join("");
}

export function errorMessage(input) {
  return !input ? "Required field" : Number(input) ?  "" : 'Must be a number besides 0';
}
