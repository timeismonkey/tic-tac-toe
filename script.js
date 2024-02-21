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
        ['O', 'X', ''],
        ['O', 'O', 'O'],
        ['', '', 'O']
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
        let row1 = board[0];
        let row2 = board[1];
        let row3 = board[2];
        let col1 = [board[0][0], board[1][0], board[2][0]];
        let col2 = [board[0][1], board[1][1], board[2][1]];
        let col3 = [board[0][2], board[1][2], board[2][2]];
        let diagStart = [board[0][0], board[1][1], board[2][2]];
        let diagEnd = [board[0][2], board[1][1], board[2][0]];

        const winningCombinations = [row1, row2, row3, col1, col2, col3, diagStart, diagEnd];

        for (array of winningCombinations) {
            let xWinner = true;
            let oWinner = true;

            for (let x = 0; x < array.length; x++) {
                if (array[x] !== 'X') {
                    xWinner = false;
                } 

                if (array[x] !== 'O') {
                    oWinner = false;
                }
            }

            if (xWinner === true) {
                return 'X'
            }

            if (oWinner === true) {
                return 'O'
            }
        }
    }

        // Make these global variables, that get added to everytime a player makes a move, use checkWinner to check these globals for a winner

        // let rowX, rowO;
        // Check for any 3 in a rows
        // for (let row = 0; row < board.length; row++) {
        //     rowX = true;
        //     rowO = true;
        //     for (let col = 0; col < board[row].length; col++) {
        //         // if (board[row][col] === board[row][col+1]){
        //         //     if (board[row][col] === 'X'){
        //         //         rowX+=1;
        //         //     }

        //         //     if (board[row][col] === 'O'){
        //         //         rowO+=1;
        //         //     }

        //         // Track rows
        //         if (board[row][col] !== 'X') {
        //             rowX = false;
        //         }

        //         if (board[row][col] !== 'O') {
        //             rowO = false;
        //         }

        //         // Track columns
        //         if (col === 0) {
        //             col1.push(board[row][col])
        //         } else if (col === 1) {
        //             col2.push(board[row][col])
        //         } else {
        //             col3.push(board[row][col])
        //         }
        //     }

        //     if (rowX) {
        //         return 'X'
        //     }

        //     if (rowO) {
        //         return 'O'
        //     }

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

