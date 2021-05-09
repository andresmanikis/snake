import { useEffect, useRef, useState } from "react";

import { asMatrix } from "./asMatrix";
import { Board } from "./Board";
import { handleKey } from "./handleKey";
import { BumpedIntoMyselfError, Direction } from "./Snake";
import { BOARD_HEIGHT, BOARD_WIDTH, createSnake, reachedBorder } from "./utils";

function App() {
  const snakeRef = useRef(createSnake());
  const [stateMatrix, setStateMatrix] = useState<boolean[][]>(
    updateStateMatrix()
  );
  const [gameOver, setGameOver] = useState<boolean>(false);

  function onKeydown(e: KeyboardEvent) {
    handleKey(e, snakeRef.current);
  }

  function registerKeyboardListener() {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }

  function setStartingDirection() {
    snakeRef.current.setDirection(Direction.Right);
  }

  function registerInterval() {
    function updateGame() {
      try {
        snakeRef.current.move();
        if (reachedBorder(snakeRef.current)) {
          snakeRef.current.setDirection(Direction.Still);
          setGameOver(true);
        }
      } catch (e) {
        if (e instanceof BumpedIntoMyselfError) {
          snakeRef.current.setDirection(Direction.Still);
          setGameOver(true);
        }
      }
      setStateMatrix(updateStateMatrix);
    }

    const interval = setInterval(updateGame, 100);
    return () => clearInterval(interval);
  }

  function updateStateMatrix() {
    return asMatrix(snakeRef.current, BOARD_HEIGHT, BOARD_WIDTH);
  }

  useEffect(registerKeyboardListener, []);
  useEffect(setStartingDirection, []);
  useEffect(registerInterval, []);

  if (gameOver) {
    return <div>GAME OVER :(</div>;
  } else {
    return <Board stateMatrix={stateMatrix} />;
  }
}

export default App;
