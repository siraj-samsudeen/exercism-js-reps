export function buildSign(occasion, name){
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
    //   return age < 50 ? "Happy Birthday! What a young fellow you are." :  'Happy Birthday! What a mature fellow you are.' 
    return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}

export function costOf(sign, currency) {
  const costs = 20 + sign.length * 2
  return `Your sign costs ${costs.toFixed(2)} ${currency}.`
}