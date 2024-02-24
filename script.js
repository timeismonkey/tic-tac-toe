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

    let row1 = Array.from(document.querySelectorAll('.row1  li'));
    let row2 = Array.from(document.querySelectorAll('.row2 li'));
    let row3 = Array.from(document.querySelectorAll('.row3 li'));

    let board = [row1, row2, row3]

    const playerMove = (symb, row, col) => {
        if (board[row][col].innerHTML === ''){
            board[row][col].innerHTML === symb;
            moveCount += 1;
            return true
        } 
         return false 
    }

    // Dom element with click event listener that runs playerMove(), then checks for gameOver() after move
    const checkWinnerAndTie = () => {
        for (let line = 0; line < board.length; line++) {
            if ((board[line][0].innerHTML !== '')  && (board[line][0].innerHTML === board[line][1].innerHTML) && (board[line][1].innerHTML === board[line][2].innerHTML)) {
                return board[line][0].innerHTML 
            }

            if (board[0][line].innerHTML && (board[0][line].innerHTML === board[1][line].innerHTML) && (board[1][line].innerHTML === board[2][line].innerHTML)) {
                return board[0][line].innerHTML 
            }
        }

        // Check for diagnols 
        if ((board[0][0].innerHTML !== '') && (board[0][0].innerHTML === board[1][1].innerHTML) && (board[1][1].innerHTML === board[2][2].innerHTML)) {
            return board[0][0].innerHTML
        }

        if ((board[0][2].innerHTML !== '') && (board[0][2].innerHTML === board[1][1].innerHTML) && (board[1][1].innerHTML === board[2][0].innerHTML) ) {
            return board[0][2].innerHTML
        }

        // Check tie
        if (moveCount === 9) {
            return 'tie'
        }
    } 

    const reset = () => board.forEach((row, index) => (board[index].forEach((item) => item.innerHTML = '')));   

    return {board, playerMove, checkWinnerAndTie, reset}
}


const board = gameBoard();
// console.log(board.checkWinnerAndTie());

console.log(board.board);