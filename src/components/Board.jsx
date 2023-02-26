const Board = ({ rows, columns, select, boardStatus }) => {
  // to store all rows of a board
  const board = [];
  // to store all cells of a row
  let rowCells = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const key = i.toString() + j.toString();
      rowCells.push(
        <div
          key={key}
          className={`cell ${(i + j) % 2 === 0 ? "black" : "white"} ${
            key === boardStatus.selected ? "selected" : ""
          } ${boardStatus.highlighted.includes(key) ? "highlighted" : ""}`}
          onClick={select}
          data-row={i}
          data-column={j}
        >
          {key === boardStatus.selected && (
            <img
              src="https://img.freepik.com/free-vector/chess_53876-25644.jpg?w=826&t=st=1677415982~exp=1677416582~hmac=9f5e7ba27ff232613f96fde0da38de7d81691c4958139a27cfd9c366cec2b1d4"
              alt="knight"
              className="knight_img"
            />
          )}
        </div>
      );
    }
    board.push(rowCells);
    rowCells = [];
  }
  return <div className="board">{board}</div>;
};

export default Board;
