import { Direction, Snake } from "../Snake";

it("returns its location", () => {
  const snake = new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
  ]);

  expect(snake.getLocation()).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
  ]);
});

it("moves right", () => {
  const snake = new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

  snake.move(Direction.Right);

  expect(snake.getLocation()).toEqual([
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
});

it("moves down", () => {
  const snake = new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

  snake.move(Direction.Down);

  expect(snake.getLocation()).toEqual([
    [0, 1],
    [0, 2],
    [1, 2],
  ]);
});
