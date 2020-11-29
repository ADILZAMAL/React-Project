import "./App.css";
import { useCallback, useRef, useState } from "react";
import produce from "immer";
const numRow = 50;
const numCol = 50;
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRow; i++) {
      rows.push(Array.from(Array(numCol), () => 0));
    }
    return rows;
  });
  const [running, setRunning] = useState(false);
  // const runningRef = useRef(running);
  // runningRef.current = running;

  const runSimulation = useCallback(() => {
    console.log("simulation function rendered");
    console.log(running);
    if (running) {
      return;
    }
    //simulate
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRow; i++) {
          for (let k = 0; k < numCol; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRow && newK >= 0 && newK < numCol) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              console.log(neighbors);
              gridCopy[i][k] = 1;
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
          console.log(running);
          if (!running) {
            // runningRef.current = true;
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
                backgroundColor: grid[i][j] ? "red" : undefined,
              }}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
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
