// Game object will host the game
const game = () => {
    const gameBoard = gameBoard();

    player1 = player('Doug', 'X');
    player2 = player('Mat', 'O');

    // Set a player's turn to true
    player1.updateTurn();

    // Simulate a game
    // If it is a players turn, get their move
    const promptPlayerMove = () => {
        let row, col;
        if (player1.getTurn() === true) {
            do {
                row = prompt(`What row would you like to place ${player1.symbol} in?`);
                col = prompt(`What column would you like to place ${player1.symbol} in?`);
            } while (!gameBoard.playerMove(player1.symbol, row, col));

            player1.updateTurn();
        } else {
            do {
                row = prompt(`What row would you like to place ${player2.symbol} in?`);
                col = prompt(`What column would you like to place ${player2.symbol} in?`);
            } while (!gameBoard.playerMove(player2.symbol, row, col));

            player2.updateTurn();
        }
    }

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
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const playerMove = (symb, row, col) => {
        if (board[row][col] === ''){
            board[row][col] === symb;
            return true
        } 
         return false 
    }

    const checkGameOver = () => {

    }

    const reset = () => board.forEach((row, index) => (board[index] = ['', '', '']));   

    // const reset = () => (board = [
    //     ['', '', ''],
    //     ['', '', ''],
    //     ['', '', '']
    // ]);

    return {board, playerMove, reset}
}


const gameInstance = game();

