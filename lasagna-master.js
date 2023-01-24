export function cookingStatus(time){
return time === 0 ? 'Lasagna is done.' : time === undefined ? 'You forgot to set the timer.' : 'Not done, please wait.'
}


export function preparationTime(layers, time = 2){
    return layers.length * time
}


export function quantities(layers){
return {
    noodles: layers.filter((layer) => layer  === 'noodles' ).length * 50,

    sauce : layers.filter((layer) => layer  === 'sauce' ).length * 0.2
}
}


export function addSecretIngredient(friendsList, myList){
 const secreIncgredient = friendsList[friendsList.length - 1]
   myList.push(secreIncgredient)   
}

export function scaleRecipe(recipe, portions){
 const scaleRecipe = {...recipe}
 const factor = portions / 2

 for (let ingredient in scaleRecipe){
    scaleRecipe[ingredient] *= factor 
 }

 return scaleRecipe

}