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
  // prettier-ignore
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);

  snake.move(Direction.Right);

  // prettier-ignore
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [0, 3]]);
});

it("moves down", () => {
  // prettier-ignore
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);

  snake.move(Direction.Down);

  // prettier-ignore
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [1, 2]]);
});

it("moves left", () => {
  // prettier-ignore
  const snake = new Snake([[0, 0], [0, 1], [1, 1]]);

  snake.move(Direction.Left);

  // prettier-ignore
  expect(snake.getLocation()).toEqual([[0, 1], [1, 1], [1, 0]]);
});

it("moves up", () => {
  // prettier-ignore
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);

  snake.move(Direction.Up);

  // prettier-ignore
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [-1, 2]]);
});

it.todo("prevents moving into forbidden directions");
