export function needsLicense(vehicle){
return vehicle === 'car' || vehicle === 'truck'
}

export function chooseVehicle(option1,option2){
return (option1 < option2 ? option1 : option2) + ' is clearly the better choice.'
}


export function calculateResellPrice(price,age){
    //  if(age < 3){
    //    return price * 0.8
    //  }else if(age > 10){
    //     return price * 0.5
    //  }else{
    //     return price * 0.7
    //  }

    return age < 3 ? price * 0.8 : age > 10 ? price * 0.5 : price * 0.7
  
}