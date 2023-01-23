export const totalBirdCount = (birdsPerDay) => {
  let totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i];
  }
  return totalBirds;
};

export const birdsInWeek = (birdsPerDay, week) => {
  return totalBirdCount(birdsPerDay.slice(week * 7 - 7, week * 7));
};

export const fixBirdCountLog = (birdsPerDay) => {
  for (let index = 0; index < birdsPerDay.length; index += 2) {
    birdsPerDay[index]++;
  }
  return birdsPerDay;
};
``;
