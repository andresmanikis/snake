import { Board } from "./Board";

function App() {
  // prettier-ignore
  const stateMatrix = [
    [false, false, false, false, false],
    [false, true,  false, true,  false],
    [false, false, true,  false, false],
    [false, true,  false, true,  false],
    [false, false, false, false, false],
  ];

  return <Board stateMatrix={stateMatrix} />;
}

export default App;
