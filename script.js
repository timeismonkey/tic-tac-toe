// // Game object will host the game
// const gameController = () => {
//     let currentSymbol = 'X';
//     let winner;
//     const board = gameBoard.getBoard();

//     let  player1 = player('Doug', 'X');
//     let player2 = player('Mat', 'O');


//     // Set a player's turn to true
//     // player1.updateTurn();
// };

// const player = (name, symbol) => {
//     let score = 0;
//     let turn = false;

//     const getScore = () => (score);
//     const addScore = () => (++score);
//     const getTurn = () => (turn);
//     const updateTurn = () => (turn = !turn);

//     return {name, symbol, getScore, addScore, getTurn, updateTurn}
// }

// const gameBoard = (function() {
//     let moveCount = 0;

//     // Create an empty gameboard
//     const board = [];
//     for (let i = 1; i <= 3; i++) {
//         const row = [];
//         for (let j = 1; j <= 3; j++) {
//             const cell = document.createElement('span');
//             cell.classList.add('cell');
//             cell.dataset.row = i;
//             cell.dataset.col = j;
//             row.push(cell);
//         }
//         board.push(row)
//     }

//     const getBoard = () => (board);

//     // Log a player's move
//     const playerMove = (symbol, cell) => {
//         if (cell.innerHTML === '') {
//             cell.innerHTML = currentSymbol;
//             moveCount += 1;
//             currentSymbol = (currentSymbol === 'X') ? 'O' : 'X';
//             return true
//         } else {
//             return false
//         }
//     }

//     // Add event listener to each cell in the board
//     board.forEach((row) => row.forEach((item) => item.addEventListener('click', (e) => {
//         playerMove(currentSymbol, e.target);
//         checkWinner();
//     })))

//     // Dom element with click event listener that runs playerMove(), then checks for gameOver() after move
//     const checkWinner = () => {
//         for (let line = 0; line < board.length; line++) {
//             if ((board[line][0].innerHTML !== '')  && (board[line][0].innerHTML === board[line][1].innerHTML) && (board[line][1].innerHTML === board[line][2].innerHTML)) {
//                 return board[line][0].innerHTML 
//             }

//             if (board[0][line].innerHTML && (board[0][line].innerHTML === board[1][line].innerHTML) && (board[1][line].innerHTML === board[2][line].innerHTML)) {
//                 return board[0][line].innerHTML 
//             }
//         }

//         // Check for diagnols 
//         if ((board[0][0].innerHTML !== '') && (board[0][0].innerHTML === board[1][1].innerHTML) && (board[1][1].innerHTML === board[2][2].innerHTML)) {
//             return board[0][0].innerHTML
//         }

//         if ((board[0][2].innerHTML !== '') && (board[0][2].innerHTML === board[1][1].innerHTML) && (board[1][1].innerHTML === board[2][0].innerHTML) ) {
//             return board[0][2].innerHTML
//         }
//     }
    
//     const checkTie = () => {
//         // Check tie
//         if (moveCount === 9) {
//             return true
//         }   
//     }

//     const reset = () => board.forEach((row, index) => (board[index].forEach((item) => item.innerHTML = '')));   

//     return {getBoard, playerMove, checkWinnerAndTie, reset}
// })();

// const displayController = (function() {
//     let main = document.querySelector('.main')
//     const boardElement = document.createElement('div');
//     boardElement.classList.add('.board');
    
//     // renderBoard is only called when page is loaded and when a new
//     const renderBoard = () => {
//         // Reference board element
//         const board = gameBoard.getBoard();

//         // Clear cu
//         // const boardElement = document.createElement('div');
//         // boardElement.classList.add('.board');

//         // Add row elements to boardElement
//         for (let i = 1; i <= 3; i++) {
//             const row = document.createElement('div');
//             row.classList.add(`row`, `row${i}`);

//             for (let j = 0; j < board[i-1].length; j++) {
//                 row.appendChild(board[i-1][j]);
//             }
//             boardElement.appendChild(row)
//         }

//         main.appendChild(boardElement);
//     }
// })();


// Game object will host the game
const gameController = () => {
    let currentSymbol = 'X'; // Use random
    let winner;
    const board = gameBoard.getBoard();

    let  player1 = player('Doug', 'X'); // Use random to pick symbol or allow users to choose
    let player2 = player('Mat', 'O');

    displayController.renderBoard(board);

    // Game controller is going to keep track of the current symbol, the winner
    // Will create 2 players
    // Will render the board calling renderBoard(bpard), passing in the current state of the gameboard
    // 


};

const gameBoard = (function() {
    let moveCount = 0;

    // Create an empty gameboard
    const board = [];
    for (let i = 1; i <= 3; i++) {
        const row = [];
        for (let j = 1; j <= 3; j++) {
            row.push('');
        }
        board.push(row)
    }

    const getBoard = () => (board);

    // Log a player's move
    const playerMove = (symbol, row, col) => {
        // If cell is empty, update it
        if (board[row][col] === '') {
            board[row][col] = symbol;
            // Update current symbol if move is successful 
            currentSymbol = (currentSymbol === 'X') ? 'O' : 'X';
            return true
        } else {
            return false
        }
    }

    // Dom element with click event listener that runs playerMove(), then checks for gameOver() after move
    const checkWinner = () => {
        for (let line = 0; line < board.length; line++) {
            // Check each row
            if ((board[line][0] !== '')  && (board[line][0] === board[line][1]) && (board[line][1] === board[line][2])) {
                return board[line][0]
            }

            // Check each column
            if (board[0][line] && (board[0][line] === board[1][line]) && (board[1][line] === board[2][line])) {
                return board[0][line]
            }
        }

        // Check for diagnols 
        if ((board[0][0]!== '') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
            return board[0][0]
        }

        if ((board[0][2] !== '') && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) ) {
            return board[0][2]
        }
    }
    
    const checkTie = () => {
        // Check tie
        if (moveCount === 9) {
            return true
        }   
    }

    const resetBoard = () => board.forEach((row, index) => (board[index] = ['', '', '']))   

    return {getBoard, playerMove, checkWinner, checkTie, resetBoard}
})();


const player = (name, symbol) => {
    let score = 0;
    let turn = false;

    const getScore = () => (score);
    const addScore = () => (++score);
    const getTurn = () => (turn);
    const updateTurn = () => (turn = !turn);

    return {name, symbol, getScore, addScore, getTurn, updateTurn}
}

const displayController = (function() {
    let main = document.querySelector('.main')
    const boardElement = document.createElement('div');
    boardElement.classList.add('.board');
    
    // renderBoard is called every time a new move is made
    const renderBoard = (board) => {
        boardElement.innerHTML = '';
        // const board = gameBoard.getBoard();

        // Add row elements to boardElement
        for (let i = 1; i <= board.length; i++) {
            const row = document.createElement('div');
            row.classList.add(`row`, `row${i}`);

            for (let j = 1; j <= board[i-1].length; j++) {
                const cell = document.createElement('span');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.innerHTML = board[i-1][j-1];
                row.appendChild(cell);
            }
            boardElement.appendChild(row)
        }

        main.appendChild(boardElement);
    }

    

    {renderBoard}
})();

// After a cell is clicked, you want to check for winner and check for tie