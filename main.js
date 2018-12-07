let cells = document.querySelectorAll('.box');
let topLeft = document.getElementById('top-left');
let topMiddle = document.getElementById('top-middle');
let topRight = document.getElementById('top-right');
let middleLeft = document.getElementById('middle-left');
let middleCenter = document.getElementById('center');
let middleRight = document.getElementById('middle-right');
let bottomLeft = document.getElementById('bottom-left');
let bottomMiddle = document.getElementById('bottom-middle');
let bottomRight = document.getElementById('bottom-right');
let winnerIs = document.getElementById('winnerCircle');
let boardClick = document.getElementById('board');

let x = 0; // counter to determine player turn
let gameOver = 0; // gameOver=1 once a winner is determined

function isEven(x) {
    return x % 2 == 0;
}

cells.forEach(function(box) {
    box.addEventListener('click', boxClicked, true)
});

boardClick.addEventListener('click', itOver, true);

function boxClicked(box) {
    if (gameOver == 1) {
        itOver();
    } else if (box.target.textContent == 'O' || box.target.textContent == 'X') {
        box.textContent += '';
    } else if (isEven(x)) {
        x++;
        box.target.textContent = 'X';
        checkForWinner();
    } else {
        x++;
        box.target.textContent = 'O';
        checkForWinner();
    }
}


function checkForWinner() {
    let tRow = (topLeft.textContent + topMiddle.textContent + topRight.textContent);
    let mRow = (middleLeft.textContent + middleCenter.textContent + middleRight.textContent);
    let bRow = (bottomLeft.textContent + bottomMiddle.textContent + bottomRight.textContent);
    let lColumn = (topLeft.textContent + middleLeft.textContent + bottomLeft.textContent);
    let cColumn = (topMiddle.textContent + middleCenter.textContent + bottomMiddle.textContent);
    let rColumn = (topRight.textContent + middleRight.textContent + bottomRight.textContent);
    let fSlash = (topLeft.textContent + middleCenter.textContent + bottomRight.textContent);
    let bSlash = (topRight.textContent + middleCenter.textContent + bottomLeft.textContent);
    let pWins = [tRow, mRow, bRow, lColumn, cColumn, rColumn, fSlash, bSlash];
    for (var i = 0; i < pWins.length; i++) {
        if (pWins[i] === 'XXX') {
            winnerIs.textContent += 'And the winner is... X!';
            gameOver++;
        } else if (pWins[i] === 'OOO') {
            winnerIs.textContent += 'And the winner is... O!';
            gameOver++;
        };
    };
    if (x == 9 && gameOver == 0) {
        winnerIs.textContent += 'Looks like we have a draw!';
        gameOver++;
    };
};

function itOver() {
    if (gameOver === 1) {
        window.location.reload();
    } 
};