export function cookingStatus(timer){
    return timer === 0 ? 'Lasagna is done.' : timer === undefined ? 'You forgot to set the timer.' : 'Not done, please wait.'
}

export function preparationTime(layers, averagePreparationTime = 2){
    return layers.length * averagePreparationTime
}

export function quantities(layers){

    return {
     noodles : layers.filter((layer) => layer === "noodles").length * 50,
     sauce : layers.filter((layer) => layer === "sauce").length * 0.2
    }
} 

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portions){
    const scaled = { ...recipe }
    const factor = portions / 2
    for (let ingredient in recipe) {
      scaled[ingredient] *= factor
    }   
    return scaled
}

