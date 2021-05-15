

const getBoard = () => {

  board = [[], [], [], [], [], [], [], [], []]

  var i;
  var j;

  for (i = 0; i < 9; i++){
    for (j = 0; j < 9; j++){

      let str = '' + i + j;

      board[j][i] = parseInt(document.getElementById(str).value);

      if (isNaN(board[j][i])){
        board[j][i] = 0;
      }


    }
  }

  return board

}

const returnBoard = () => {

  var i;
  var j;

  for (i = 0; i < 9; i++){
    for (j = 0; j < 9; j++){

      let str = '' + i + j;

      if (matrix[j][i]!==0 && matrix[j][i]!==undefined){

        document.getElementById(str).value = '' + matrix[j][i];

    }
    }
  }

}

const clearBoard = () => {

  let str;

  for (i = 0; i < 9; i++){
    for (j = 0; j < 9; j++){

      str = '' + i + j;

        document.getElementById(str).value = '';

    }
  }




}

let matrix;



class SudokuSolver {

  constructor() {
    this.solution = '';
    this.count = 0
  }

  possible(y, x, n) {
    let i, j, x0, y0;
    for (i = 0; i < 9; i++){
      if (matrix[y][i] == n){
        return false;
      }
      if (matrix[i][x] == n){
        return false;
      }
    }

    x0 = (Math.floor(x/3))*3;
    y0 = (Math.floor(y/3))*3;

    for (i = 0; i < 3; i++){
      for (j = 0; j < 3; j++){
        if (matrix[y0+i][x0+j] == n){
          return false;
        }
      }
    }

    return true;

  }

  solve () {
    this.count++
    let y, x, n;
    for (y=0; y<9; y++){
      for (x=0; x<9; x++){
        if (matrix[y][x]==0){
          for (n=1; n<10; n++){
            if (this.possible(y, x, n)){
              matrix[y][x] = n;
              this.solve();
              matrix[y][x] = 0
            }
          }
          return;
        }
      }
    }
    returnBoard(matrix)
    readline()
  }

}







document.getElementById('solve').addEventListener('click', function() {

  matrix = getBoard()
  s = new SudokuSolver()
  s.solve();

})


document.getElementById('clear').addEventListener('click', function() {

  clearBoard()

})
