import { useState } from "react";
import Board from "./components/Board";
import { calculatePossibleMoves } from "./utils";
import "./App.css";

function App() {
  const rows = 8;
  const columns = 8;
  const [boardStatus, setBoardStatus] = useState({
    selected: null,
    highlighted: [],
  });
  const [theme, setTheme] = useState("light");

  // handle click on a square
  const select = (event) => {
    const { row, column } = event.target.dataset;
    const selected = row + column;
    // calculate possible moves of knight
    const possibleMoves = calculatePossibleMoves(Number(row), Number(column));
    // update state to re-render board
    setBoardStatus((prev) => ({
      ...prev,
      selected,
      highlighted: possibleMoves,
    }));
  };
  const changeTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
  };

  return (
    <div className={`container ${theme}`}>
      <h1>
        Click on a square to highlight possible moves of a knight from that
        square
      </h1>
      <select onChange={changeTheme} value={theme} className="select_theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      <div className="App">
        <Board {...{ rows, columns, select, boardStatus }} />
      </div>
    </div>
  );
}

export default App;
