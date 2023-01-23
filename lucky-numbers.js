export function twoSum(leftInput, rightInput){
    return Number(leftInput.join("")) + Number(rightInput.join(""));
}

export function luckyNumber(number){
    return number == String(number).split("").reverse().join("")
}

export function errorMessage(value){
    if (!value){
        return 'Required field'
    }
   return Number(value) ? "" : 'Must be a number besides 0' 
}

    