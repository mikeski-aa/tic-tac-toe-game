//  function to create a 2d array of the game space
const gameBoard = () => {
    const rows = 3; 
    const cols = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
//  at each array position in original board array, the for loop creates a new array
//  this is denoted by []
//  adding items to the new array within each board[i] location creates a 2D array of the board
        board[i] = [];
        for (let j = 0; j < cols; j++){
            board[i].push('0');
        }
    }

//  this allows for extracting the gameboard.
    const getBoard = () => board;

// this function will print the game board
    function printBoard(){
        console.table(getBoard());
    }

    return ({getBoard, printBoard});
    
} 
let myboard = gameBoard();
