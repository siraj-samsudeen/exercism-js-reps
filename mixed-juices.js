export function timeToMixJuice(string) {
    switch (string) {
      case "Pure Strawberry Joy":
        return 0.5;
      case "Energizer":
        return 1.5;
      case "Green Garden":
        return 1.5;
      case "Tropical Island":
        return 3;
      case "All or Nothing":
        return 5;
      default:
        return 2.5;
    }
  }
  
  export function limesToCut(wedges, limes) {
    let index = 0;
    while (wedges > 0 && index < limes.length) {
      switch (limes[index]) {
        case "small":
          wedges = wedges - 6;
          break;
        case "medium":
          wedges = wedges - 8;
          break;
        default:
          wedges = wedges - 10;
      }
  
      index++;
    }
  
    return index;
  }
  
  export function remainingOrders(timeLeft, orders) {
    let time = 0;
    let index = 0;
    let completedOrders = [];
    do {
      switch (orders[index]) {
        case "Pure Strawberry Joy":
          time = 0.5;
          break;
        case "Energizer":
          time = 1.5;
          break;
        case "Green Garden":
          time = 1.5;
          break;
        case "Tropical Island":
          time = 3;
          break;
        case "All or Nothing":
          time = 5;
          break;
        default:
          time = 2.5;
      }
      timeLeft = timeLeft - time;
      index++;
  
      completedOrders = orders.slice(0, index);
    } while (timeLeft > 0);
  
    orders.splice(0, completedOrders.length);
  
    return orders;
  }
  