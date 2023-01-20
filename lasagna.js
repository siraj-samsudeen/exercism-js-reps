export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = (COMPLETED_MINUTES_IN_OVEN) => {
    return EXPECTED_MINUTES_IN_OVEN - COMPLETED_MINUTES_IN_OVEN
}

export const preparationTimeInMinutes = (PREPARATION) => {
    return PREPARATION * 2
}

export const totalTimeInMinutes = (PREPARATION_TIME, COOKING_TIME) => {
    return ((PREPARATION_TIME + PREPARATION_TIME) + COOKING_TIME)
}