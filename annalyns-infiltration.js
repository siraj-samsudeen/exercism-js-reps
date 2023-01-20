export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake,archerIsAwake,prisonerIsAwake) {
//   return (!knightIsAwake && (!archerIsAwake && prisonerIsAwake || archerIsAwake && !prisonerIsAwake )) || !knightIsAwake && (archerIsAwake && prisonerIsAwake) || (knightIsAwake && !archerIsAwake &&
//   !prisonerIsAwake) || (knightIsAwake && !archerIsAwake &&
//     prisonerIsAwake) || (knightIsAwake && archerIsAwake &&
//         prisonerIsAwake)

// return knightIsAwake || archerIsAwake || prisonerIsAwake

 if(knightIsAwake){
    return true;
 }else if(archerIsAwake){
    return true
 }else {
    return prisonerIsAwake
 }

}


export function canSignalPrisoner(archerIsAwake,prisonerIsAwake) {
 return !archerIsAwake && prisonerIsAwake  
}

export function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent) {
//   return (!knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent) || !knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent || (!knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent) || knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent || knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent

return (!knightIsAwake && !archerIsAwake && prisonerIsAwake) || (!archerIsAwake && petDogIsPresent)

}