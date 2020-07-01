document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// Declare empty board with array in cells
var board = {
            cells:[]
            }
// Defin function to create board properties
function createBoard (obj, sideLength){
  // Loop for declaring rows value
  for (var i = 0; i < sideLength; i++){
    // Loop for declaring col value
    for (var j = 0; j < sideLength; j++){
      // Push value to end of array
      obj.cells.push({
                      row: i, 
                      col: j, 
                      isMine: false,
                      hidden: true 
                      })

    }
  }
}
// Function call to creat board
var create = createBoard(board, 6)

function startGame () {
// Loop through board.cells
 
  for (var i = 0; i < board.cells.length; i++){
    // Call countSurroundingMines on cell
    // Assign return to cell property of each object
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
// Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:

// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  
    
}

