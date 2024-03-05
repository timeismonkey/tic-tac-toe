let mainContainer = document.querySelector('.main');

const gameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getBoard = () => board;

    const clearBoard = () => board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

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
                cellElement.dataset.row = `${r}`;
                cellElement.dataset.col = `${c}`;
                let symbol = document.createElement('div');
                symbol.classList.add('symbol');
                symbol.innerHTML = board[r][c];
                cellElement.appendChild(symbol);
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

    return { getBoard, clearBoard, updateGameBoard, render };
})();

const Player = (name, symbol) => {
    return { name, symbol };
};

const displayController = (() => {
    let gameEndDialog = document.querySelector('dialog');
    let closeModal = gameEndDialog.querySelector('button');
    let outcomeElement = gameEndDialog.querySelector('.outcome');
    let resetBtn = mainContainer.querySelector('#reset-btn');
    let playerInput = mainContainer.querySelectorAll('input');
    let startBtn = mainContainer.querySelector('#start-btn');

    startBtn.addEventListener('click', () => gameController.start());

    const hideInitialMain = () => {
        playerInput.forEach((input) => (input.style.display = 'none'));
        startBtn.style.display = 'none';
        resetBtn.style.display = 'inline';
    };

    const showInitialMain = () => {
        playerInput.forEach((input) => input.style.display = 'inline');
        startBtn.style.display = 'inline';
        mainContainer.querySelector('.board').style.display = 'none';
        resetBtn.style.display = 'none';
    }

    const showWinner = () => {
        outcomeElement.innerHTML = `${gameController.getWinner().name} wins!`;
        gameEndDialog.showModal();
    };

    const showTie = () => {
        outcomeElement.innerHTML = 'Tie!';
        gameEndDialog.showModal();
    };

    const filledCell = (cell) => {
        let symbol = cell.querySelector('.symbol');
        symbol.classList.add('shake');
    }

    closeModal.addEventListener('click', () => gameEndDialog.close());

    resetBtn.addEventListener('click', () => gameController.resetGame());

    return { showInitialMain, hideInitialMain, showWinner, showTie, filledCell };
})();

const gameController = (() => {
    let gameEnd;
    let moveCount = 0;
    let winner;
    let players = [];
    let currentPlayer;

    // const getStartingSymbol = () => startingSymbol = random();
    const getPlayers = () => {
        let player1 = mainContainer.querySelector('#player-1-name').value || 'Player1';
        let player2 = mainContainer.querySelector('#player-2-name').value || 'Player2';
        player1 = Player(player1, 'X');
        player2 = Player(player2, 'O');
        players.push(player1, player2);

        // Clear input field
        mainContainer.querySelector('#player-1-name').value = '';
        mainContainer.querySelector('#player-2-name').value = '';
    };

    const start = () => {
        // Store user input player's names in 'players'
        getPlayers();

        // Set starting player
        currentPlayer = players[0];

        // Render game
        displayController.hideInitialMain();
        gameBoard.render();
    };

    const checkWinner = () => {
        let board = gameBoard.getBoard();
        for (let i = 0; i < 3; i++) {
            // Check each row
            if (
                board[i][0] !== '' &&
                board[i][0] === board[i][1] &&
                board[i][1] === board[i][2]
            ) {
                winner = currentPlayer;
                return true;
            }

            // Check each column
            if (
                board[0][i] !== '' &&
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i]
            ) {
                winner = currentPlayer;
                return true;
            }
        }

        // Check first diagnol
        if (
            board[0][0] !== '' &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            winner = currentPlayer;
            return true;
        }

        // Check second diagnol
        if (
            board[0][2] !== '' &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            winner = currentPlayer;
            return true;
        }
    };

    const checkTie = () => (moveCount === 9 ? true : false);

    const handleCellClick = (e) => {
        const row = e.currentTarget.dataset.row;
        const col = e.currentTarget.dataset.col;
        const symbol = currentPlayer.symbol;
        let board = gameBoard.getBoard();

        // Check if cell is empty
        if (board[row][col] === '') {
            gameBoard.updateGameBoard(row, col, symbol);
            moveCount += 1;
            gameBoard.render()

            if (checkWinner()) {
                displayController.showWinner();
                // gameBoard.render();
                return;
            }

            if (checkTie()) {
                displayController.showTie();
                // gameBoard.render();
                return;
            }

            updateCurrentPlayer();
            // gameBoard.render();
        } else {
            console.log('Already filled');
            displayController.filledCell(e.currentTarget);
            // Create a method in displayController() that turns the symbol chose cell red and shakes the symbol
        }
    };

    const updateCurrentPlayer = () =>
        (currentPlayer =
            currentPlayer === players[0] ? players[1] : players[0]);

    const getWinner = () => winner;

    const resetGame = () => {
        // Clear players
        players = [];
        // Clear moveCount
        moveCount = 0;
        // Clear winner
        winner = null;
        // Clear currentPlayer
        currentPlayer = null;
        // Clear gameBoard
        gameBoard.clearBoard();
        // Show start button and player name inputs
        displayController.showInitialMain();
    }

    return { start, handleCellClick, getWinner, resetGame };
})();
