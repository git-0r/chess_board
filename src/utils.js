const calculatePossibleMoves = (selectedRow, selectedColumn) => {
  const possibleMoves = [];

  // Possible moves of a knight
  // knight moves in L shape
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  // Check if each possible move is valid or not
  for (let i = 0; i < 8; i++) {
    // Position of knight after move
    let newRow = selectedRow + X[i];
    let newColumn = selectedColumn + Y[i];

    // check valid moves
    if (newRow >= 0 && newColumn >= 0 && newRow < 8 && newColumn < 8)
      possibleMoves.push(`${newRow.toString()}${newColumn.toString()}`);
  }
  return possibleMoves;
};

export { calculatePossibleMoves };
