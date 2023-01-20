export function canExecuteFastAttack(knightIsAwake){
 return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
//  if (knightIsAwake) {
//     return true;
//   }else if (archerIsAwake){
//     return true;
//   }else {
//     return prisonerIsAwake
//   }
   
 return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
   return prisonerIsAwake && !archerIsAwake
}

export function canFreePrisoner (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    if (petDogIsPresent && !archerIsAwake) {
        return true;
      }else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
        return true;
      } else return false;
    
}