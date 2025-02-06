// 
let xTurn = true;
let xScore = 0;
let oScore = 0;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;
    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style.color = "rgb(120, 12, 40)";
            document.getElementById(buttonId).style.backgroundColor = "rgb(245, 235, 235)";
            document.getElementById(buttonId).style.fontWeight = "bold"; 
            document.getElementById(buttonId).style.fontSize = "20px"; 
            document.getElementById("winNoti").innerHTML = "O's turn";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style.color = "rgb(21, 120, 12)";
            document.getElementById(buttonId).style.backgroundColor = "rgb(240, 247, 237)";
            document.getElementById(buttonId).style.fontWeight = "bold"; 
            document.getElementById(buttonId).style.fontSize = "20px"; 
            document.getElementById("winNoti").innerHTML = "X's turn";
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function checkWin() {

    let a1 = document.getElementById("a1").innerHTML; 
    let b1 = document.getElementById("b1").innerHTML; 
    let c1 = document.getElementById("c1").innerHTML; 
    let a2 = document.getElementById("a2").innerHTML; 
    let b2 = document.getElementById("b2").innerHTML; 
    let c2 = document.getElementById("c2").innerHTML; 
    let a3 = document.getElementById("a3").innerHTML; 
    let b3 = document.getElementById("b3").innerHTML; 
    let c3 = document.getElementById("c3").innerHTML; 
    // TODO: Retrieve the marks from the remaining buttons
    
    // X-WIN conditions
    if ( // side-to-side
        (a1 == b1 && b1 == c1 && a1 == "X") ||
        (a2 == b2 && b2 == c2 && a2 == "X") ||
        (a3 == b3 && b3 == c3 && a3 == "X") ||
        // up-down
        (a1 == a2 && a2 == a3 && a1 == "X") ||
        (b1 == b2 && b2 == b3 && b1 == "X") ||
        (c1 == c2 && c2 == c3 && c1 == "X") ||
        // diagonal left-right
        (a1 == b2 && b2 == c3 && a1 == "X") ||
        (c3 == b2 && b2 == a1 && c3 == "X") ||
        // diagonal right-left
        (a3 == b2 && b2 == c1 && a3 == "X") ||
        (c1 == b2 && b2 == a3 && c1 == "X")
    ){
        document.getElementById("winNoti").innerHTML = "X wins!";
        xScore++;
        document.getElementById("playerX").innerHTML = xScore;
        resetBoard();
    }

    // O-WIN conditions
    if ( // side-to-side
        (a1 == b1 && b1 == c1 && a1 == "O") ||
        (a2 == b2 && b2 == c2 && a2 == "O") ||
        (a3 == b3 && b3 == c3 && a3 == "O") ||
        // up-down
        (a1 == a2 && a2 == a3 && a1 == "O") ||
        (b1 == b2 && b2 == b3 && b1 == "O") ||
        (c1 == c2 && c2 == c3 && c1 == "O") ||
        // diagonal left-right
        (a1 == b2 && b2 == c3 && a1 == "O") ||
        (c3 == b2 && b2 == a1 && c3 == "O") ||
        // diagonal right-left
        (a3 == b2 && b2 == c1 && a3 == "O") ||
        (c1 == b2 && b2 == a3 && c1 == "O")
    ){
        document.getElementById("winNoti").innerHTML = "O wins!";
        oScore++;
        document.getElementById("playerO").innerHTML = oScore;
        resetBoard();
    }
}

function resetBoard() {
    document.getElementById("a1").innerHTML = ""; 
    document.getElementById("b1").innerHTML = ""; 
    document.getElementById("c1").innerHTML = ""; 
    document.getElementById("a2").innerHTML = ""; 
    document.getElementById("b2").innerHTML = ""; 
    document.getElementById("c2").innerHTML = ""; 
    document.getElementById("a3").innerHTML = ""; 
    document.getElementById("b3").innerHTML = ""; 
    document.getElementById("c3").innerHTML = ""; 

    document.getElementById("a1").style.backgroundColor = "rgb(241, 241, 241)"; 
    document.getElementById("b1").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("c1").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("a2").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("b2").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("c2").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("a3").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("b3").style.backgroundColor = "rgb(241, 241, 241)";
    document.getElementById("c3").style.backgroundColor = "rgb(241, 241, 241)";

    document.getElementById("winNoti").innerHTML = "X, click a button to begin!";
    xTurn = true;
}

function resetScore() {
    oScore = 0;
    xScore = 0;
    document.getElementById("playerX").innerHTML = xScore;
    document.getElementById("playerO").innerHTML = oScore;
}

