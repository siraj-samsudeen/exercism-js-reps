export const frontDoorResponse = (arr) => {
    return arr[0]
}

export const frontDoorPassword = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export const backDoorResponse = (word) => {
    const trimmedWord =  word.trim()
    return trimmedWord[trimmedWord.length - 1]
}

export const backDoorPassword = (word) => {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
    return `${capitalizedWord}, please`
}