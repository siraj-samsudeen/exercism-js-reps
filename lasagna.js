

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(time){
return EXPECTED_MINUTES_IN_OVEN - time
}

export function preparationTimeInMinutes(time){
 return time * 2
}


export function totalTimeInMinutes(time, layers){
    return   preparationTimeInMinutes(time) + layers
}