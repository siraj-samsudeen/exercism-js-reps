export const canExecuteFastAttack = (knightIsAwake) => {
  return !knightIsAwake;
};

export const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
};

export const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
  return !archerIsAwake && prisonerIsAwake;
};

export const canFreePrisoner = (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) => {
  if (!knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent)
    return true;
  else if (!archerIsAwake && petDogIsPresent) return true;
  else return false;
};
