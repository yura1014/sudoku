//module.exports =
function solveSudoku(matrix) {
  function remainZeros(matrix) {
    let zeros = 0;
    for (let i = 0; i < matrix.length; i++) {
      zeros =
        zeros +
        matrix[i].reduce((acc, el) => {
          if (el === 0) {
            return acc + 1;
          } else return acc;
        }, 0);
    }
    return zeros;
  }
  return remainZeros(matrix);
  // your solution
  //  function solve(){
  //    if (){}
  //  }
}
/*boolean solve()
    if the board is filled
        return true

    for each cell that is not empty
        for n = 1 .. 9
            if n does not exist in this row, column and box
                place n in this cell
                if solve()
                    return true
                remove n from this cell
    return false
    */
const initial = [
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0],
];
console.log(solveSudoku(initial));
