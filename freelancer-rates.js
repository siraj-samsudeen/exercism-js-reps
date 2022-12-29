export function dayRate(hourlyRate) {
  const HOURS_PER_DAY = 8;
  return hourlyRate * HOURS_PER_DAY;
}
