const Node = require("./node");
const Stack = require("./stack");

module.exports = class Maze {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.nodes = {};
    this.generateMaze();
  }

  // include meta data with cardinal direction to set values in node.js
  findNeighbors(node) {
    const neighbors = [];
    // above
    if (node.y - 1 >= 0) {
      neighbors.push([this.nodes[`${node.x},${node.y - 1}`], "above"]);
    }

    // right
    if (node.x + 1 < this.width) {
      neighbors.push([this.nodes[`${node.x + 1},${node.y}`], "right"]);
    }

    // below
    if (node.y + 1 < this.length) {
      neighbors.push([this.nodes[`${node.x},${node.y + 1}`], "below"]);
    }

    // left
    if (node.x - 1 >= 0) {
      neighbors.push([this.nodes[`${node.x - 1},${node.y}`], "left"]);
    }
    return neighbors;
  }

  generateMaze() {
    this.initializeNodes();
    // const startingNode = this.randomNode();
    const stack = new Stack();
    stack.push(this.randomNode());

    while (stack.length) {
      const currentNode = stack.peek();
      currentNode.visited = true;

      let neighbors = this.findNeighbors(currentNode);
      neighbors = neighbors.filter((elem) => !elem[0].visited);
      // console.log("neighbors", neighbors);

      if (neighbors.length) {
        const [nextNode, direction] = neighbors[
          Math.floor(Math.random() * neighbors.length)
        ];

        currentNode[direction] = nextNode;
        // let reverse;

        const reverse = {
          above: "below",
          left: "right",
          right: "left",
          below: "above",
        };

        // switch (direction) {
        //   case "above":
        //     reverse = "below";
        //     break;

        //   case "right":
        //     reverse = "left";
        //     break;

        //   case "below":
        //     reverse = "above";
        //     break;

        //   case "left":
        //     reverse = "right";
        //     break;
        // }

        nextNode[reverse[direction]] = currentNode;
        stack.push(nextNode);
      } else {
        stack.pop();
      }
    }
  }

  // this is the grid
  initializeNodes() {
    for (let y = 0; y < this.length; y++) {
      for (let x = 0; x < this.width; x++) {
        this.nodes[`${x}, ${y}`] = new Node(x, y);
      }
    }
  }

  findNode(x, y) {
    return this.nodes[`${x}, ${y}`];
  }

  // seed of the node -- where creation begins
  randomNode() {
    const randomX = Math.floor(Math.random() * this.width);
    const randomY = Math.floor(Math.random() * this.length);
    return this.findNode(randomX, randomY);
  }
};
