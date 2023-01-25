export const getItem = (stack, position) => {
  return stack.at(position);
};

export const setItem = (stack, position, replacement) => {
  stack.splice(position, 1, replacement);
  return stack;
};

export const insertItemAtTop = (stack, newCard) => {
  stack.push(newCard);
  return stack;
};

export const removeItem = (stack, position) => {
  stack.splice(position, 1);
  return stack;
};

export const removeItemFromTop = (stack) => {
  stack.splice(stack.length - 1, 1);
  return stack;
};

export const insertItemAtBottom = (stack, newCard) => {
  stack.unshift(newCard);
  return stack;
};

export const removeItemAtBottom = (stack) => {
  stack.shift();
  return stack;
};

export const checkSizeOfStack = (stack, size) => {
  return stack.length === size;
};
