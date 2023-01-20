export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((a, b) => a + b);
}

export function birdsInWeek(birdsPerDay, week) {
  return totalBirdCount(birdsPerDay.slice(7 * week - 7, 7 * week));
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }

  return birdsPerDay;
}
