export function getItem(stack, position) {
  return stack[position];
}

export function setItem(stack, position, replace) {
  // stack[position] = replace

  // return stack

  stack.splice(position, 1, replace);
  return stack;
}

export function insertItemAtTop(stack, newCard) {
  //  stack.push(newCard);
  //  return stack;

  stack.splice(3, 0, newCard);
  return stack;
}

export function removeItem(stack, position) {
  stack.splice(position, 1);
  return stack;
}

export function removeItemFromTop(stack) {
  stack.pop();
  return stack;
}

export function insertItemAtBottom(stack, newCard) {
  // stack.splice(0,0,newCard)
  // return stack

  stack.unshift(newCard);
  return stack;
}

export function removeItemAtBottom(stack) {
  //   stack = [];
  //   return stack

  stack.shift();
  return stack;
}


export function checkSizeOfStack(cards,stackSize){
 return cards.length === stackSize    

  
}