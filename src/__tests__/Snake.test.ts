import { Direction, Snake } from "../Snake";

// prettier-ignore
it("returns its location", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]]);
  expect(snake.getLocation()).toEqual([[0, 0], [0, 1],[0, 2], [1, 0], [1, 1]]);
});

// prettier-ignore
it('stays still', () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 0], [0, 1], [0, 2]]);
});

// prettier-ignore
it("moves right", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Right);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [0, 3]]);
});

// prettier-ignore
it("moves down", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Down);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [1, 2]]);
});

// prettier-ignore
it("moves left", () => {
  const snake = new Snake([[0, 0], [0, 1], [1, 1]]);
  snake.setDirection(Direction.Left);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [1, 1], [1, 0]]);
});

// prettier-ignore
it("moves up", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Up);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [-1, 2]]);
});

it.todo("prevents moving into forbidden directions");
