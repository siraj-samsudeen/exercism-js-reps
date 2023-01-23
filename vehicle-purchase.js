export const needsLicense = (vehicle) => {
    switch (vehicle) {
        case 'car':
        case 'truck':
            return true;
        case 'bike':
        case 'stroller':
        case 'e-scooter':
            return false;
    }
}

export function chooseVehicle(option1, option2) {
    return [option1, option2].sort()[0] +' is clearly the better choice.';
}

export function calculateResellPrice(originalPrice, age) {
    if(age < 3) {
      return 0.8 * originalPrice
    } else if(age >= 3 && age <= 10){
      return 0.7 * originalPrice
    } else {
      return 0.5 * originalPrice
    }
  }