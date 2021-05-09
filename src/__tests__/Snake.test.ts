import { Snake } from "../Snake";

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
