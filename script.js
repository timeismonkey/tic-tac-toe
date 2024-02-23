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
    let board = [
        ['O', 'X', 'X'],
        ['X', '', 'O'],
        ['X', 'O', 'O']
    ]

    const playerMove = (symb, row, col) => {
        if (board[row][col] === ''){
            board[row][col] === symb;
            return true
        } 
         return false 
    }

    // Dom element with click event listener that runs playerMove(), then checks for gameOver() after move
    const checkWinner = () => {
        for (let line = 0; line < board.length; line++) {
            if ((board[line][0] !== '')  && (board[line][0] === board[line][1]) && (board[line][1] === board[line][2])) {
                return board[line][0]; 
            }

            if (board[0][line] && (board[0][line] === board[1][line]) && (board[1][line] === board[2][line])) {
                return board[0][line]; 
            }

            // if (winning_symbol) {
            //     return winning_symbol
            // }
        }

        // Check for diagnols 
        if ((board[0][0] !== '') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
            return board[0][0]
        }

        if ((board[0][2] !== '') && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) ) {
            return board[0][2]
        }

    } 

    const reset = () => board.forEach((row, index) => (board[index] = ['', '', '']));   

    // const reset = () => (board = [
    //     ['', '', ''],
    //     ['', '', ''],
    //     ['', '', '']
    // ]);

    return {board, playerMove, checkWinner, reset}
}


// const gameInstance = game();
const board = gameBoard();
// board.checkWinner();
console.log(board.checkWinner());

