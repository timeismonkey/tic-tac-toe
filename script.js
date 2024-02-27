// Game object will host the game
const gameController = () => {
    let currentSymbol = 'X';
    let winner;
    const board = gameBoard.board;

    let  player1 = player('Doug', 'X');
    let player2 = player('Mat', 'O');


    // Set a player's turn to true
    // player1.updateTurn();
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

const gameBoard = (function() {
    let moveCount = 0;

    const board = [];
    for (let i = 1; i <= 3; i++) {
        const row = [];
        for (let j = 1; j <= 3; j++) {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            row.push(cell);
        }
        board.push(row)
    }

    // console.log(board);
    // let row1 = Array.from(document.querySelectorAll('.row1  span'));
    // let row2 = Array.from(document.querySelectorAll('.row2 span'));
    // let row3 = Array.from(document.querySelectorAll('.row3 span'));

    // let board = [row1, row2, row3]

    // const playerMove = (symb, row, col) => {
    //     if (board[row][col].innerHTML === ''){
    //         board[row][col].innerHTML = symb;
    //         moveCount += 1;
    //         return true
    //     } 
    //      return false 
    // }

    const playerMove = (symbol, cell) => {
        if (cell.innerHTML === '') {
            cell.innerHTML = currentSymbol;
            moveCount += 1;
            currentSymbol = (currentSymbol === 'X') ? 'O' : 'X';
            return true
        } else {
            return false
        }
    }

    // Add event listener to each cell in the board
    board.forEach((row) => row.forEach((item) => item.addEventListener('click', (e) => {
        playerMove(currentSymbol, e.target);
        checkWinnerAndTie();
    })))

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
})();

const displayController = (function() {
    let main = document.querySelector('.main')

    // Create a board element
    const board = gameBoard.board;
    const boardElement = document.createElement('div');
    boardElement.classList.add('.board');

    // Add row elements to boardElement
    for (let i = 1; i <= 3; i++) {
        const row = document.createElement('div');
        row.classList.add(`row`, `row${i}`);

        for (let j = 0; j < board[i-1].length; j++) {
            row.appendChild(board[i-1][j]);
        }
        boardElement.appendChild(row)
    }

    main.appendChild(boardElement);
    return {boardElement}

    // Create gameboard element and render it to the page 
    // const boardContainer = document.createElement('div');
    // boardContainer.classList.add('board-container')



    // for (let i = 1; i <= 3; i++) {
    //     const row = document.createElement('div');
    //     row.classList.add(`row`, `row${i}`);
    //     row.dataset.row = i;
    //     for (let j = 1; j <= 3; j++) {
    //         const cell = document.createElement('span');
    //         cell.classList.add('cell');
    //         cell.dataset.row = i;
    //         cell.dataset.col = j;
    //         row.appendChild(cell);
    //     }
    //     boardContainer.appendChild(row)
    // }
})();


// gameBoard();

// game()

// displayController()


// const board = gameBoard();
// console.log(board.checkWinnerAndTie());

// console.log(board.board);

// The game function will hold the game and the players, it will control the flow of the game. It calls the game function to create a game object
// The game object will create the gameboard, add event listeners to the gameboard to listen to players moves 

