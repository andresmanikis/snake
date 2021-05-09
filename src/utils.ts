import { Snake } from "./Snake";

export const BOARD_WIDTH = 20;
export const BOARD_HEIGHT = 10;

export function createSnake(): Snake {
  return new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [3, 6],
  ]);
}

export function reachedBorder(snake: Snake): boolean {
  const head = snake.getHead();

  return (
    head[0] < 0 ||
    head[0] >= BOARD_HEIGHT ||
    head[1] < 0 ||
    head[1] >= BOARD_WIDTH
  );
}
