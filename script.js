let gameCharacters = ["X", "O"];
let startCharacter = 0;
let selectedBoxs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxItems = Array.from(document.getElementsByClassName("box-item"));

for (let i = 0; i < boxItems.length; i++) {

    boxItems[i].addEventListener("click", function () {
        // box item click event
        if (boxItems[i].innerHTML == "") {
            whoIsNextPlayer(boxItems[i], i);
        }
    });
}
function whoIsNextPlayer(element, param) {
    if (startCharacter % 2 == 0) {
        element.innerHTML = gameCharacters[0];
        selectedBoxs[param] = gameCharacters[0];
        whoIsWinner(gameCharacters[0]);
    } else {
        element.innerHTML = gameCharacters[1];
        selectedBoxs[param] = gameCharacters[1];
        whoIsWinner(gameCharacters[1]);
    }
    startCharacter++;
}
function whoIsWinner(param) {
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
    for (let i = 0; i < wins.length; i++) {
        if (selectedBoxs[wins[i][0]] == selectedBoxs[wins[i][1]] && selectedBoxs[wins[i][1]] == selectedBoxs[wins[i][2]]) {
            document.getElementById("finish").style.display = "flex";
            document.getElementById("finish").innerHTML = param + " is winner.";
            break;
        } else if (startCharacter == 8) {
            document.getElementById("finish").style.display = "flex";
            document.getElementById("finish").innerHTML = "Draw.";
        }
    }
}
function restartGame() {
    document.getElementById("finish").style.display = "none";
    selectedBoxs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    startCharacter = 0;
    boxItems.forEach(element => {
        element.innerHTML = "";
    });
}
