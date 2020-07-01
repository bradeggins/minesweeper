document.addEventListener('DOMContentLoaded', startGame)

// Declare empty board object
var board = {}

var defaultSize = 6

function reset(){
  location.reload()
}

createBoard(defaultSize)

// Define function to create board properties
function createBoard (sideLength){
  board.cells = []
  // Loop for declaring rows value
  for (var i = 0; i < sideLength; i++){
    // Loop for declaring col value
    for (var j = 0; j < sideLength; j++){
      // Push value to end of array
      // Randomly assign random true to mines https://stackoverflow.com/questions/36756331/js-generate-random-boolean
      var randomBool = Math.random() >= 0.9
      board.cells.push({
                      row: i, 
                      col: j, 
                      isMine: randomBool,
                      hidden: true 
                      })

    }
  }
}
// Function call to create board

function startGame () {
  
  
// Loop through board.cells
 
  for (var i = 0; i < board.cells.length; i++){
    // Call countSurroundingMines on cell
    // Assign return to cell property of each object
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

  // Assign left click to call checkForWin()
  document.addEventListener("click", checkForWin)
  // Assign right click to call checkForWin()
  document.addEventListener("contextmenu", checkForWin)

// Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:

// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var win = true;
  // Loop through board cells
  for (var i = 0; i < board.cells.length; i++){
    // Check to see if cell is mine and if it is marked and set win to false
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false){
      win = false;
    } 
    // Check to see if cell is mine and is hidden, set win to false
    if (board.cells[i].isMine != true && board.cells[i].hidden == true){
      win = false;
    } 
  }
  if(win == true ){
    lib.displayMessage('You win!')
  }
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
    // Call getsurrounding cells
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    // Set count to 0
    var count = 0;
    // Loop through surrounding
    for (var i = 0; i < surrounding.length; i++){
      // Check if surrounding is mine
      if (surrounding[i].isMine === true){
        // Add to count
        count ++;
      }
    }
    return count;
}
