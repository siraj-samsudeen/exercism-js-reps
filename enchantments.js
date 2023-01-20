export const getItem = (stack, position) => {
    return stack[position]
}

export const setItem = (stack, position, replacement) => {
    stack[position] = replacement
    return stack
}

export const insertItemAtTop = (stack, newCard) => {
    stack.push(newCard)
    return stack
}

export const removeItem = (stack, position) => {
    stack.splice(position, 1)
    return stack
}

export const removeItemFromTop = (stack) => {
    stack.pop()
    return stack
}

export const insertItemAtBottom = (stack, newCard) => {
    stack.unshift(newCard)
    return stack
}

export const removeItemAtBottom = (stack) => {
    stack.shift()
    return stack
}

export const checkSizeOfStack = (stack, position) => {
    return stack.length === position
}