import { Direction, Snake } from "./Snake";

export function handleKey(e: KeyboardEvent, snake: Snake) {
  console.log(e.code);
  switch (e.code) {
    case "ArrowLeft":
      snake.setDirection(Direction.Left);
      break;
    case "ArrowRight":
      snake.setDirection(Direction.Right);
      break;
    case "ArrowUp":
      snake.setDirection(Direction.Up);
      break;
    case "ArrowDown":
      snake.setDirection(Direction.Down);
      break;
  }
}
