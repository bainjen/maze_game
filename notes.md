# Maze

## What does a maze need?

- length (x)
- width (y)
- starting node (graphs have nodes)

## Limitations

- x \* y number of cells/nodes
- can only move in cardinal directions, no diagonals
- can't go back to already visited nodes

## Process

- using recursive backtracking
- add starting node to the stack
- have computer find neighbors of each node to make connections (pushing new nodes)
- if we need to backtrack because we reach a dead end, we can pop.

## Recursive Backtracking

1. Choose a starting node
2. Push starting node as the first element in the stack

While there nodes in the stack/While stack not empty:

3. Find the neighbors of the node

If there are neighbors that have not been visited:

4. Randomly make a choice to move
5. Make the nodes a graph by adding and edge between them (link the new node to the first node)
6. Push the new node onto the stack

If there are no neighbors to visit:

7. Pop the node off the stack

## Classes

- Player (stretch)
- Board/Maze
- Node
