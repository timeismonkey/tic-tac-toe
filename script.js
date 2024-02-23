// Game object will host the game
const game = () => {
    const gameBoard = gameBoard();

    player1 = player('Doug', 'X');
    player2 = player('Mat', 'O');

    // Set a player's turn to true
    player1.updateTurn();

    // Simulate a game
    
    // Get players move


    return {promptPlayerMove}
};

const player = (name, symbol) => {
    let score = 0;
    let turn = false;

    const getScore = () => (score);
    const addScore = () => (++score);
    const getTurn = () => (turn);
    const updateTurn = () => (turn = !turn);

    return {name, symbol, getScore, addScore, getTurn, updateTurn}
}

const gameBoard = () => {
    let moveCount = 0;

    // let board = [
    //     ['', 'O', 'O'],
    //     ['', 'x', ''],
    //     ['X', 'O', 'X']
    // ]

    let row1 = Array.from(document.querySelectorAll('.row1  li'));
    let row2 = Array.from(document.querySelectorAll('.row2 li'));
    let row3 = Array.from(document.querySelectorAll('.row3 li'));

    row1 = row1.map((item) => item.innerHTML);
    row2 = row2.map((item) => item.innerHTML);
    row3 = row3.map((item) => item.innerHTML);

    let board = [row1, row2, row3]



    const playerMove = (symb, row, col) => {
        if (board[row][col] === ''){
            board[row][col] === symb;
            moveCount += 1;
            return true
        } 
         return false 
    }

    // Dom element with click event listener that runs playerMove(), then checks for gameOver() after move
    const checkWinnerAndTie = () => {
        for (let line = 0; line < board.length; line++) {
            if ((board[line][0] !== '')  && (board[line][0] === board[line][1]) && (board[line][1] === board[line][2])) {
                return board[line][0]; 
            }

            if (board[0][line] && (board[0][line] === board[1][line]) && (board[1][line] === board[2][line])) {
                return board[0][line]; 
            }
        }

        // Check for diagnols 
        if ((board[0][0] !== '') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
            return board[0][0]
        }

        if ((board[0][2] !== '') && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) ) {
            return board[0][2]
        }

        // Check tie
        if (moveCount === 9) {
            return 'tie'
        }
    } 

    const reset = () => board.forEach((row, index) => (board[index] = ['', '', '']));   

    return {board, playerMove, checkWinnerAndTie, reset}
}


const board = gameBoard();
// console.log(board.checkWinnerAndTie());

console.log(board.board);