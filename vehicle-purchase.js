export const needsLicense = (vehicle) => {
  return ["car", "truck"].includes(vehicle);
};

export const chooseVehicle = (vehicle1, vehicle2) => {
  if (vehicle1 > vehicle2) {
    return `${vehicle2} is clearly the better choice.`;
  } else return `${vehicle1} is clearly the better choice.`;
};

export const calculateResellPrice = (price, age) => {
  if (age < 3) {
    return Number(price * 0.8);
  } else if (age > 10) {
    return Number(price * 0.5);
  } else if (age >= 3 && age <= 10) return Number(price * 0.7);
};
