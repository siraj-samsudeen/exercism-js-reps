export const twoSum = (array1, array2) => {
  return Number(array1.join("")) + Number(array2.join(""));
};

export const luckyNumber = (value) => {
  return String(value) === String(value).split("").reverse().join("");
};

export const errorMessage = (value) => {
  if (value === "" || value === null || value === undefined) {
    return "Required field";
  } else if (!Number(value)) {
    return "Must be a number besides 0";
  } else return "";
};
