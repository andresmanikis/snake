import { Snake } from "./Snake";

export type StateMatrix = Array<Array<boolean>>;

export function asMatrix(
  snake: Snake,
  width: number,
  height: number
): StateMatrix {
  const snakeLocation = snake.getLocation();

  const rows = [];

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const cols = [];

    for (let colIndex = 0; colIndex < width; colIndex++) {
      if (
        snakeLocation.find((el) => el[0] === rowIndex && el[1] === colIndex)
      ) {
        cols.push(true);
      } else {
        cols.push(false);
      }
    }

    rows.push(cols);
  }

  return rows;
}
