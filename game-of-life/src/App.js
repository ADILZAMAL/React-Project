import "./App.css";
import { useCallback, useRef, useState } from "react";
import produce from "immer";
const numRow = 50;
const numCol = 50;
const operations = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];
function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRow; i++) {
      rows.push(Array.from(Array(numCol), () => 0));
    }
    // console.log(rows);
    return rows;
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef();
  runningRef.current = running;
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    //simulate
    setGrid((g) => {
      produce(g, (gridCopy) => {
        for (let i = 0; i < numRow; i++) {
          for (let j = 0; j < numCol; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              let newI = i + x;
              let newY = j + y;
              if (newI >= 0 && newI < numRow && newY >= 0 && newY < numCol) {
                neighbors += g[newI][newY];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (gridCopy[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 1000);
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCol}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                width: 20,
                height: 20,
                border: "1px solid black",
                backgroundColor: grid[i][j] ? "pink" : undefined,
              }}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
