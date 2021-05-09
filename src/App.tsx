import { useEffect, useRef, useState } from "react";

import { asMatrix } from "./asMatrix";
import { Board } from "./Board";
import { handleKey } from "./handleKey";
import { BumpedIntoMyselfError, Direction, Snake } from "./Snake";

function createSnake(): Snake {
  return new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [3, 6],
  ]);
}

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
    const interval = setInterval(() => {
      try {
        snakeRef.current.move();
      } catch (e) {
        if (e instanceof BumpedIntoMyselfError) {
          snakeRef.current.setDirection(Direction.Still);
          setGameOver(true);
        }
      }
      setStateMatrix(updateStateMatrix);
    }, 100);

    return () => clearInterval(interval);
  }

  function updateStateMatrix() {
    return asMatrix(snakeRef.current, 10, 20);
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
