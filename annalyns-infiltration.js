export const canExecuteFastAttack = (knightIsAwake) => {
    return !knightIsAwake
} 

export const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
    return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    return !archerIsAwake && prisonerIsAwake
}

export const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
    return (!knightIsAwake && !archerIsAwake && prisonerIsAwake || (petDogIsPresent && !archerIsAwake))
}