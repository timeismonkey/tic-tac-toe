# Tic-Tac-Toe
Tic-tac-toe is a single page application that focuses on using factory functions and immediately invoked function expressions (IIFE) to create a two-player user interactive game. 

### <a href="">LIVE VERSION</a>
### Initial Page
![preview screenshot](tic-tac-toe-initial-page.png) 
### Board Page 
![preview screenshot](tic-tac-toe-board-page.png) 

## Usage
### Initial Page
Allows user to input names of player 1 and player 2 and start the game. If any field is left empty a default 'Player1' and 'Player2' will be used.

### Board Page
Displays the interactive board, the name of the player who is currently choosing and a reset button that will reset the board and take the user back to the initial page. 

## Learning Objectives
The main objectives for this project were to group my code into factory functions that would each serve distinct logical purposes. Also, immediately invoked functions expressons (IIFE) would be used on functions that require a single instance.

My program was grouped into 4 factory functions, 3 of which are IIFEs.

### `gameBoard`

The `gameBoard` module manages the game board and rendering logic for the game board:

- `getBoard()`: Returns the current game board.
- `clearBoard()`: Resets the game board.
- `updateGameBoard(row, col, symbol)`: Updates a cell on the game board.
- `render()`: Renders the game board in the DOM.

### `Player(name, symbol)`

The `Player` function creates a player object with a name and a symbol.

### `displayController`

The `displayController` module handles displaying game information:

- `showInitialMain()`: Shows the initial main elements.
- `hideInitialMain()`: Hides the initial main elements.
- `showWinner()`: Shows the winner dialog.
- `showTie()`: Shows the tie dialog.
- `filledCell(cell)`: Animates a cell that has already been filled.
- `showCurrentPlayer()`: Displays the current player's turn.

### `gameController`

The `gameController` module manages the game flow:

- `start()`: Starts the game.
- `getPlayers()`: Gets inputted players or default players.
- `getCurrentPlayer()`: Returns the current player that is up.
- `checkWinner()`: Checks if there's a winner.
- `checkTie()`: Checks if the game is a tie.
- `handleCellClick(e)`: Handles a cell click event.
- `updateCurrentPlayer()`: Updates the current player.
- `getWinner()`: Returns the winner.
- `endGame()`: Ends the game.
- `resetGame()`: Resets the game.


## Authors and Acknowledgment
Jerry Hara (Github: @timeismonkey)