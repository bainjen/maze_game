module.exports = class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.above = null;
    this.right = null;
    this.left = null;
    this.below = null;
  }
};
