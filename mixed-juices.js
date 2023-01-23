export const timeToMixJuice = (juice) => {
  let preparationTime;
  switch (juice) {
    case "Pure Strawberry Joy":
      preparationTime = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      preparationTime = 1.5;
      break;
    case "Tropical Island":
      preparationTime = 3;
      break;
    case "All or Nothing":
      preparationTime = 5;
      break;
    default:
      preparationTime = 2.5;
  }
  return preparationTime;
};

export const limesToCut = (wedgesNeeded, limes) => {
  let index = 0;
  while (wedgesNeeded > 0 && index < limes.length) {
    switch (limes[index]) {
      case "small":
        wedgesNeeded = wedgesNeeded - 6;
        break;
      case "medium":
        wedgesNeeded = wedgesNeeded - 8;
        break;
      case "large":
        wedgesNeeded = wedgesNeeded - 10;
        break;
    }
    index++;
  }
  return index;
};

export const remainingOrders = (timeLeft, orders) => {
  let index = 0;
  let time = 0;
  let completedOrders = [];
  do {
    time = timeToMixJuice(orders[index]);
    timeLeft = timeLeft - time;
    index++;
    completedOrders = orders.slice(0, index);
  } while (timeLeft > 0);
  orders.splice(0, completedOrders.length);
  return orders;
};
