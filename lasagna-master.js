export const cookingStatus = (time) => {
  if (time > 0) {
    return "Not done, please wait.";
  } else if (time === 0) {
    return "Lasagna is done.";
  } else return "You forgot to set the timer.";
};

export const preparationTime = (layers, averagePreparationTime = 2) => {
  return layers.length * averagePreparationTime;
};

export const quantities = (layers) => {
  const layerCount = (requiredLayer) => {
    return layers.filter((eachLayer) => eachLayer === requiredLayer).length;
  };
  const noodlesQuantity = layerCount("noodles") * 50;
  const sauceQuantity = layerCount("sauce") * 0.2;
  return {
    noodles: noodlesQuantity,
    sauce: sauceQuantity,
  };
};

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1]);
};

export const scaleRecipe = (recipe, portion) => {
  const newReceipe = {};
  for (const ingredient in recipe) {
    newReceipe[ingredient] = recipe[ingredient] * (portion / 2);
  }
  return newReceipe;
};
