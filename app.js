const Stack = require("./classes/stack");
const Node = require("./classes/node");
const Maze = require("./classes/maze");

const stack = new Stack();
const node1 = new Node(0, 0);
const node2 = new Node(1, 0);

stack.push(node1).push(node2);
console.log(stack);

const maze = new Maze(5, 5);
console.log(maze);
// stack.push("hello");
// console.log(stack);
// console.log(stack.length);

// const peekItem = stack.peek();
// console.log(peekItem);

// const poppedItem = stack.pop();
// console.log(poppedItem);
