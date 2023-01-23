export function totalBirdCount(birdsPerDay) {
    var totalCount = 0;
    const totalBirds = (item) => {
      totalCount += item;
    };
    birdsPerDay.forEach(totalBirds);
    return totalCount;
}

export function birdsInWeek(birdsPerDay, week) {
    var days = week * 7;
    var sum = 0;
    if (week === 1) {
      for (let i = 0; i < days; i++) {
        sum += birdsPerDay[i];
      }
      return sum;
    } else {
      for (let i = (week - 1) * 7; i < days; i++) {
        sum += birdsPerDay[i];
      }
      return sum;
    }
  }

export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) birdsPerDay[i]++;
    return birdsPerDay;
  }