const Stack = require("./classes/stack");

const stack = new Stack();

stack.push("hello");
console.log(stack);
console.log(stack.length);

const peekItem = stack.peek();
console.log(peekItem);

const poppedItem = stack.pop();
console.log(poppedItem);
