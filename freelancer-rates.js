export function dayRate(ratePerHour){
    return ratePerHour * 8
}

export function daysInBudget(budget, ratePerHour){
    return Math.floor(budget / dayRate(ratePerHour)) 
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount){
    const remainingDays = numDays % 22
    const fullDays = numDays - remainingDays
    const dayRates = dayRate(ratePerHour)
    return Math.ceil((dayRates * fullDays * (1-discount)) + (dayRates * remainingDays))
}