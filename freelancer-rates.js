export function dayRate(ratePerHour){
return ratePerHour * 8
}

export function daysInBudget(budget,ratePerHour){
 return Math.floor(budget/dayRate(ratePerHour))
}


export function priceWithMonthlyDiscount(ratePerHour,numDays,discount){
   const remainDays = numDays % 22
   const fullDays = numDays - remainDays

   return Math.ceil(dayRate(ratePerHour) * fullDays * (1-discount) + remainDays * dayRate(ratePerHour))
}