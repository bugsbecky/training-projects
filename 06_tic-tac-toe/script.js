const playField = document.getElementById("play-field");
const gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let currentPlayer = "X";
let gameActive = true;


function createBoard (rowCount, columnCount) {
    for (let row = 0; row < rowCount; row++) {

        for (let col = 0; col < columnCount; col ++) {

            const playFieldBtn = document.createElement("button");

            playFieldBtn.setAttribute("data-row", row);
            playFieldBtn.setAttribute("data-col", col);
            playFieldBtn.classList.add("play-field-btn");

            playField.appendChild(playFieldBtn);
        }
    }
}

createBoard(3, 3);


function playerMark (clickedBtn) {
    if (currentPlayer === "X") {
            currentPlayer = "O";
            clickedBtn.classList.add("player-x-mark");
       } else {
            currentPlayer = "X";
            clickedBtn.classList.add("player-o-mark");
    }
}

function checkRowWin(player) {
    for (let i = 0; i < gameBoard.length; i++) { // loop over gameboard rows
        const row = gameBoard[i];                // ["X", "X", "X"], ["O", "", "X"]
        let rowWin = true;

        for (let j = 0; j < row.length; j++) {   // loop over row items
            if (row[j] !== player) {
                rowWin = false;
                break;
            }
        }
        if (rowWin) return true;
    }
    return false;
}

function checkColumnWin(player) {
        for (let c = 0; c < gameBoard.length; c++) {  
            let columnWin = true;                

            for (let r = 0; r < gameBoard.length; r++) {
                if (gameBoard[r][c] !== player) {
                    columnWin = false;
                    break;
                }
            }
            if (columnWin) return true;
    }
    return false;
}

function checkDiagonalWin(player) {
    const totalRows = gameBoard.length;
    const totalColumns = gameBoard[0].length;

    let diagonal1Win = true;
    let diagonal2Win = true;

    if (totalRows === totalColumns) {

        for (let i = 0; i < totalRows; i++) {
            if (gameBoard[i][i] !== player) {
                diagonal1Win = false;
                break;
            }
        }

        for (let i = 0; i < totalRows; i++) {
            if (gameBoard[i][totalRows - 1 -i] !== player) {
                diagonal2Win = false;
                break;
            }
        }

        if (diagonal1Win || diagonal2Win) return true;
    }
    return false;
}

function checkWin(player) { //player e.g. x/o
    return checkRowWin(player) === true || 
        checkColumnWin(player) === true || 
        checkDiagonalWin(player) === true;
}

function winEvent(){
    if (checkWin(currentPlayer)) {
        const winnerText = document.createElement("p");
        //winnerText.textContent = "Player " + currentPlayer + " has won!";
        winnerText.textContent = `player "${currentPlayer}" has won`;
        document.body.appendChild(winnerText);
    }
}

playField.addEventListener("click", function(event) {
    const clickedBtn = event.target;

    if (clickedBtn.tagName === "BUTTON") { /*in caps weil Browser Element in caps zurück gibt*/
        const row = Number(clickedBtn.dataset.row);
        const col = Number(clickedBtn.dataset.col);

        gameBoard[row][col] = currentPlayer;
        console.log(gameBoard);

        clickedBtn.textContent = currentPlayer;

        clickedBtn.disabled = true;

        winEvent();
        playerMark(clickedBtn);
    }
});






