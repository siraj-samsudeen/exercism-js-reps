export const dayRate = (hourlyRate) => {
  const workingHoursPerDay = 8;
  return hourlyRate * workingHoursPerDay;
};

export const daysInBudget = (budget, hourlyRate) => {
  return Math.floor(budget / dayRate(hourlyRate));
};

export const priceWithMonthlyDiscount = (hourlyRate, projectDays, discount) => {
  const balanceDays = projectDays % 22;
  const projectMonths = Math.floor(projectDays / 22);
  const overallMonthAmount = projectMonths * 22 * dayRate(hourlyRate);
  return Math.ceil(
    overallMonthAmount -
      overallMonthAmount * discount +
      balanceDays * dayRate(hourlyRate)
  );
};
