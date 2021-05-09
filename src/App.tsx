import { useEffect, useRef, useState } from "react";

import { asMatrix } from "./asMatrix";
import { Board } from "./Board";
import { Direction, Snake } from "./Snake";

function App() {
  const snakeRef = useRef(
    new Snake([
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
    ])
  );

  const [stateMatrix, setStateMatrix] = useState<boolean[][]>(
    updateStateMatrix()
  );

  useEffect(() => {
    snakeRef.current.setDirection(Direction.Right);
    setInterval(() => {
      snakeRef.current.move();
      setStateMatrix(updateStateMatrix);
    }, 100);
  }, []);

  function updateStateMatrix() {
    return asMatrix(snakeRef.current, 10, 20);
  }

  return <Board stateMatrix={stateMatrix} />;
}

export default App;
