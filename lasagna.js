export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = (actualMinutes) => {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutes;
};

export const preparationTimeInMinutes = (numberOfLayers) => {
  const eachLayerPreparationTime = 2;
  return numberOfLayers * eachLayerPreparationTime;
};

export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
};
