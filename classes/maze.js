const Node = require("./node");

module.exports = class Maze {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.nodes = {};
    this.initializeNodes();
  }

  findNeighbors(node) {
    const neighbors = [];
    // above
    if (node.y - 1 >= 0) {
      neighbors.push(this.nodes[`${node.x}, ${node.y - 1}`]);
    }

    // right
    if (node.x < this.width) {
      neighbors.push(this.nodes[`${node.x + 1}, ${node.y}`]);
    }
    // below
    if (node.y + 1 < this.length) {
      neighbors.push(this.nodes[`${node.x}, ${node.y + 1}`]);
    }

    // left
    if (node.x - 1 >= 0) {
      neighbors.push(this.nodes[`${node.x - 1}, ${node.y}`]);
    }
    return neighbors;
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
