let mainContainer = document.querySelector('.main');
let startBtn = mainContainer.querySelector('#start-btn');
let winnerModal = document.querySelector('dialog');

startBtn.addEventListener('click', () => gameController.start());

const gameBoard = (() => {
    let board = [];

    for (let r = 0; r < 3; r++) {
        let row = [];

        for (let c = 0; c < 3; c++) {
            row.push('');
        }

        board.push(row);
    }

    const getBoard = () => board;

    const updateGameBoard = (row, col, symbol) => (board[row][col] = symbol);

    // Render board element
    const render = () => {
        // If boardElement already exists, clear it
        if (mainContainer.querySelector('.board')) {
            mainContainer.removeChild(mainContainer.querySelector('.board'));
        }

        let boardElement = document.createElement('div');
        boardElement.classList.add('board');

        for (let r = 0; r < board.length; r++) {
            let rowElement = document.createElement('div');
            rowElement.classList.add('row');
            for (let c = 0; c < board[r].length; c++) {
                let cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                // cellElement.setAttribute('id', `row-${r} col-${c}`);
                cellElement.dataset.row = `${r}`;
                cellElement.dataset.col = `${c}`;
                cellElement.innerHTML = board[r][c];
                rowElement.appendChild(cellElement);
            }
            boardElement.appendChild(rowElement);
        }

        mainContainer.appendChild(boardElement);

        // Add event listeners to cells
        boardElement
            .querySelectorAll('.cell')
            .forEach((cell) =>
                cell.addEventListener('click', gameController.handleCellClick)
            );
    };

    return { getBoard, updateGameBoard, render };
})();

const Player = (name, symbol) => {
    return { name, symbol };
};

const displayController = (() => {
    const clearMain = () => {
        mainContainer
            .querySelectorAll('input')
            .forEach((input) => (input.style.display = 'none'));
        startBtn.style.display = 'none';
    };

    const showWinner = () => {
        
    }

    return { clearMain };
})();

const gameController = (() => {
    let gameEnd;
    let winner;
    let players = [];
    let currentPlayer;
    let board = gameBoard.getBoard();

    // const getStartingSymbol = () => startingSymbol = random();
    const getPlayers = () => {
        let player1 = mainContainer.querySelector('#player-1-name').value;
        let player2 = mainContainer.querySelector('#player-2-name').value;
        player1 = Player(player1, 'X');
        player2 = Player(player2, 'O');
        players.push(player1, player2);

        mainContainer.querySelector('#player-1-name').value = '';
        mainContainer.querySelector('#player-2-name').value = '';
    };

    const start = () => {
        // Store user input player's names in 'players'
        getPlayers();

        // Set starting player
        currentPlayer = players[0];

        // Render game
        displayController.clearMain();
        gameBoard.render();
    };

    const checkWinner = () => {
        for (let i = 0; i < 3; i++) {
            // Check each row
            if ((board[i][0] !== '') && (board[i][0] === board[i][1] && (board[i][1] === board[i][2]))) {
                winner = currentPlayer;
                return true
            }

            // Check each column
            if ((board[0][i] !== '') && (board[0][i] === board[1][i] && (board[1][i] === board[2][i]))) {
                winner = currentPlayer;
                return true
            }
        }

        // Check first diagnol
        if ((board[0][0] !== '') && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
            winner = currentPlayer;
            return true
        }

        // Check second diagnol
        if ((board[0][2] !== '') && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
            winner = currentPlayer;
            return true
        }
    }

    const handleCellClick = (e) => {
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        const symbol = currentPlayer.symbol;

        if (board[row][col] === '') {
            gameBoard.updateGameBoard(row, col, symbol);
            // Check for winner
            if (checkWinner()) {
                // displayController.showWinner(winner);                
            }
            updateCurrentPlayer();
            gameBoard.render();
        } else {
            console.log('Already filled');
            // Create a method in displayController() that turns the symbol chose cell red and shakes the symbol
        }
    };

    const updateCurrentPlayer = () =>
        (currentPlayer =
            currentPlayer === players[0] ? players[1] : players[0]);

    return { start, handleCellClick };
})();
