export function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`
  }
  
export function buildBirthdaySign(age) {
    if (age < 50){
      return 'Happy Birthday! What a young fellow you are.'
    } else if (age >= 50){
      return 'Happy Birthday! What a mature fellow you are.'
    }
  }

export function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`
}


export function costOf(sign, currency) {
    const BASE_PRICE = 20;
    const price = (sign.length * 2) + BASE_PRICE;
    return `Your sign costs ${price}.00 ${currency}.`
  }