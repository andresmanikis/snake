import { asMatrix } from "../asMatrix";
import { Snake } from "../Snake";

it("converts a location into a matrix", () => {
  const snake = new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ]);

  expect(asMatrix(snake, 3, 4)).toEqual(
    // prettier-ignore
    [
      [true,  true,  true, false],
      [false, false, true, false],
      [false, false, true, false],
    ]
  );
});
