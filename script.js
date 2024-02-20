// Game is made up of a board and 2 players

// Game object will host the game
// gameBoard should have a method to place on it
const game = () => {
    const gameBoard = gameBoard();

    player1 = player('Doug', 'X');
    player2 = player('Mat', ')');

};


// Player object creates a player with a name
// Player can make a choice of where to land on the gameboard
const player = (name, symbol) => {
    return {name, symbol}
}

const gameBoard = () => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const place = (symb, row, col) => {
        if (board[row][col] === ''){
            board[row][col] === symb;
            return true
        } 
         return false 
    }

    const reset = () => board.forEach((row, index) => (board[index] = ['', '', '']));   

    // const reset = () => (board = [
    //     ['', '', ''],
    //     ['', '', ''],
    //     ['', '', '']
    // ]);

    return {board, place, reset}
}