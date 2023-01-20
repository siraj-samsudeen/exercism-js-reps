
export function totalBirdCount(birdsPerDay) {
    // let sum = 0
    //  for (var i = 0; i <birdsPerDay.length; i++) {
    //    sum += birdsPerDay[i]
    // }
    // return sum
    return birdsPerDay.reduce((total, birdCount) => total + birdCount, 0)
}

export function birdsInWeek(birdsPerDay, week) {
    // var startingDay = 7*(week-1);
    // var endingDay = startingDay+7;
    // var sum = 0;
    // for(let i=startingDay; i<endingDay; i++)  
    //   sum+=birdsPerDay[i];
    // return sum;
    return totalBirdCount(birdsPerDay.slice(week*7-7, week*7));
}

export function fixBirdCountLog(birdsPerDay) {
    const days = birdsPerDay.length;
    for (let i = 0; i < days; i += 2) {
      birdsPerDay[i] += 1
    }
    return birdsPerDay;
}