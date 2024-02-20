// Game object will host the game
const game = () => {
    const gameBoard = gameBoard();

    player1 = player('Doug', 'X');
    player2 = player('Mat', 'O');

    // Set a player's turn to true
    player1.updateTurn();

    // Simulate a game

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

