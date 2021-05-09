import { asMatrix } from "./asMatrix";
import { Board } from "./Board";
import { Snake } from "./Snake";

function App() {
  const snake = new Snake([
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

  return <Board stateMatrix={asMatrix(snake, 10, 10)} />;
}

export default App;
