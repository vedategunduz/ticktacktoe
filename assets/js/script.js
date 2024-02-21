const boxs = document.querySelectorAll(".box");
const btnRestart = document.getElementById("restart");
const result = document.getElementById("result");

const winningConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

var player = true;
var gameEnded = false;
var drawControl;

boxs.forEach(box => {
    box.addEventListener("click", () => {
        if (!gameEnded) {
            if (box.innerText == "") {
                if (player) {
                    player = !player;
                    box.innerText = "x";
                }
                else {
                    player = !player;
                    box.innerText = "o";
                }
                checkWinner();
            }
        }
    });
});

function checkWinner() {
    drawControl = 0;
    for (let i = 0; i < winningConditions.length; i++) {
        if (boxs[winningConditions[i][0]].innerText != "" &&
            boxs[winningConditions[i][1]].innerText != "" &&
            boxs[winningConditions[i][2]].innerText != "") {
            if (
                (boxs[winningConditions[i][0]].innerText == boxs[winningConditions[i][1]].innerText) &&
                (boxs[winningConditions[i][1]].innerText == boxs[winningConditions[i][2]].innerText)
            ) {
                gameEnded = !gameEnded;
                result.style.display = "block";
                btnRestart.style.display = "block";
                result.innerText = boxs[winningConditions[i][0]].innerText.toUpperCase() + " is win";
            } else {
                drawControl++;
            }
        }
    }

    if (drawControl == 8) {
        gameEnded = !gameEnded;
        result.innerText = "Draw";
        result.style.display = "block";
        btnRestart.style.display = "block";
    }
}

btnRestart.addEventListener("click", () => {
    gameEnded = !gameEnded;
    result.style.display = "none";
    btnRestart.style.display = "none";
    boxs.forEach(box => {
        box.innerText = "";
    });
});