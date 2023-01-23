export function twoSum(array1, array2) {
    const firstNum = array1.join("");
    const secondNum = array2.join("");
    return Number(firstNum) + Number(secondNum);
  }
  
export function luckyNumber(value) {
    const reversedNumber = parseFloat(
      value.toString().split("").reverse().join("")
    );
    return reversedNumber === value;
  }

export function errorMessage(input) {
    if (!input || !String(input).trim()) {
      return "Required field";
    }
    if (!Number(input)) {
      return "Must be a number besides 0";
    }
    return "";
  }