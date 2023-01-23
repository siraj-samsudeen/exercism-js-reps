export function needsLicense(vehicle){
   return vehicle === "car" || vehicle === "truck"
}

export function chooseVehicle(option1, option2){
   return `${option1 > option2 ? option2 : option1} is clearly the better choice.`  
}

export function calculateResellPrice(price, age){
   return age < 3 ? price * 0.8 : age > 10 ? price * 0.5 : price * 0.7
}