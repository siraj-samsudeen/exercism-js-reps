export const dayRate = (ratePerHour) => {
    const WORKING_HOURS = 8;
    return ratePerHour * WORKING_HOURS;
}

export const daysInBudget = (FIXED_BUDGET, ratePerHour) => {
    return Math.floor(FIXED_BUDGET / dayRate(ratePerHour))
}

export const priceWithMonthlyDiscount = (ratePerHour, NUMBER_OF_DAYS, discount) => {
    const BILLABLE_DAYS = 22;
    const months = Math.floor(NUMBER_OF_DAYS / BILLABLE_DAYS);
    const monthlyRate = BILLABLE_DAYS * dayRate(ratePerHour);
    const monthlyDiscount = (1 - discount) * monthlyRate;
    const extraDays = NUMBER_OF_DAYS % BILLABLE_DAYS;
    const extraDayPrice = extraDays * dayRate(ratePerHour);
    return Math.ceil(months * monthlyDiscount + extraDayPrice);
  }