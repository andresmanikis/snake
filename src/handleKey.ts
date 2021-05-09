import { AbruptDirectionChangeError, Direction, Snake } from "./Snake";

function calculateNewDirection(code: string) {
  switch (code) {
    case "ArrowLeft":
      return Direction.Left;
    case "ArrowRight":
      return Direction.Right;
    case "ArrowUp":
      return Direction.Up;
    case "ArrowDown":
      return Direction.Down;
    default:
      return null;
  }
}

export function handleKey(e: KeyboardEvent, snake: Snake) {
  const newDirection = calculateNewDirection(e.code);

  if (newDirection === null) {
    return;
  }

  try {
    snake.setDirection(newDirection);
  } catch (e) {
    if (e instanceof AbruptDirectionChangeError) {
      // Nothing happens, just keep going and ignore the direction change.
    }
  }
}
