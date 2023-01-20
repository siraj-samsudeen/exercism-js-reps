export function frontDoorResponse(word){
   return word[0]
}

export function frontDoorPassword(word){
   return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export function backDoorResponse(word)  {
    return word.trim().slice(-1)
}

export function backDoorPassword(word){
    return `${frontDoorPassword(word)}, please`
}