import {
  AbruptDirectionChangeError,
  BumpedIntoMyselfError,
  Direction,
  Snake,
} from "../Snake";

// prettier-ignore
test("returns its location", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]]);
  expect(snake.getLocation()).toEqual([[0, 0], [0, 1],[0, 2], [1, 0], [1, 1]]);
});

// prettier-ignore
test('stays still', () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 0], [0, 1], [0, 2]]);
});

// prettier-ignore
test("moves right", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Right);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [0, 3]]);
});

// prettier-ignore
test("moves down", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Down);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [1, 2]]);
});

// prettier-ignore
test("moves left", () => {
  const snake = new Snake([[0, 0], [0, 1], [1, 1]]);
  snake.setDirection(Direction.Left);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [1, 1], [1, 0]]);
});

// prettier-ignore
test("moves up", () => {
  const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
  snake.setDirection(Direction.Up);
  snake.move();
  expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [-1, 2]]);
});

describe("prevents abrupt changes of direction", () => {
  test("right to left", () => {
    // prettier-ignore
    const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
    snake.setDirection(Direction.Right);
    expect(() => snake.setDirection(Direction.Left)).toThrow(
      AbruptDirectionChangeError
    );
    snake.move();
    // prettier-ignore
    expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [0, 3]]);
  });

  test("left to right", () => {
    // prettier-ignore
    const snake = new Snake([[0, 0], [0, 1], [1, 1]]);
    snake.setDirection(Direction.Left);
    expect(() => snake.setDirection(Direction.Right)).toThrow(
      AbruptDirectionChangeError
    );
    snake.move();
    // prettier-ignore
    expect(snake.getLocation()).toEqual([[0, 1], [1, 1], [1, 0]]);
  });

  test("up to down", () => {
    // prettier-ignore
    const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
    snake.setDirection(Direction.Up);
    expect(() => snake.setDirection(Direction.Down)).toThrow(
      AbruptDirectionChangeError
    );
    snake.move();
    // prettier-ignore
    expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [-1, 2]]);
  });

  test("down to up", () => {
    // prettier-ignore
    const snake = new Snake([[0, 0], [0, 1], [0, 2]]);
    snake.setDirection(Direction.Down);
    expect(() => snake.setDirection(Direction.Up)).toThrow(
      AbruptDirectionChangeError
    );
    snake.move();
    // prettier-ignore
    expect(snake.getLocation()).toEqual([[0, 1], [0, 2], [1, 2]]);
  });
});

it("throws BumpedIntoMyselfError when bumping into itself", () => {
  /**
   * *****     ****     *#*
   *     *       ^*      **
   *    <*       **      **
   */

  // prettier-ignore
  const snake = new Snake([
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 3]
  ]);

  snake.setDirection(Direction.Up);

  expect(() => snake.move()).not.toThrow();
  expect(() => snake.move()).toThrow(BumpedIntoMyselfError);
});
