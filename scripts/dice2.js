const newGame = document.getElementById("newGame");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const pressRoll = document.getElementById("pressRoll");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
let scoreContainer2 = document.getElementById("scoreContainer2");
let scoreContainer = document.getElementById("scoreContainer");
let currentScore = document.getElementById("score1");
let currentScore2 = document.getElementById("score2")
let randomNumber = [];
let player1total = 0;
let player2total = 0;

// write a game over function
// Add to player 1 after they press hold
// 


newGame.addEventListener("click", () => {
    newGame.style.display = "none";
    player1roll.style.display = "block";
    player1hold.style.display = "block";
    pressRoll.style.display = "block";
    player1.style.display = "block";
});
function changeScore(text) {
    document.getElementById("scoreContainer").innerHTML = text;
}
player1roll.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        player1total = (player1total + randomNumber);
        console.log(randomNumber);
        console.log(player1total);
    }

    if (randomNumber == 1) {
        dice1.style.display = "block";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        player1roll.style.display = "none";
        player1hold.style.display = "none";
        player2roll.style.display = "block";
        player2hold.style.display = "block";
        player1.style.display = "none";
        player2.style.display = "block";
        player1total = 0;
        changeScore(`${player1total}`);
    }
    if (randomNumber == 2) {
        dice1.style.display = "none";
        dice2.style.display = "block";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player1total}`);
    }
    if (randomNumber == 3) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "block";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player1total}`);
    }
    if (randomNumber == 4) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "block";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player1total}`);
    }
    if (randomNumber == 5) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "block";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player1total}`);
    }
    if (randomNumber == 6) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "block";
        pressRoll.style.display = "none";
        changeScore(`${player1total}`);
    }
    function youWin(text) {
        document.getElementById("player1").innerHTML = (text);
    }
    function changeText(text) {
        document.getElementById("score1").innerHTML = (text);
    }
    function changeText2(text) {
        document.getElementById("score2").innerHTML = (text);
    }
    if (player1total >= 20) {

        player1roll.style.display = "none";
        player1hold.style.display = "none";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        player2.style.display = "none";
        youWin("Well Done Player 1, You Win!")
        newGame.style.display = "block";
        changeText("Total Score:")
        changeText2("Total Score:")

    }
});

player1hold.addEventListener("click", () => {
    function changeText(text) {
        document.getElementById("score1").innerHTML = (text);
    }
    function youWin(text) {
        document.getElementById("player2").innerHTML = (text);
    }
    if (currentScore == currentScore2) {
        player1roll.style.display = "none";
        player1hold.style.display = "none";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        youWin("Player 1")

        // if (player1total < player2total) {
        //     console.log("HI");
        //     player2.style.display = "block";
        //     youWin("Well Done Player 2, You Win!")
        // } else if (player2total < player1total) {
        //     player2.style.display = "block";
        //     youWin("Well Done Player 1, You Win!")
        // } else {
        //     youWin("Really? A draw??")
        // }
    }
    player1roll.style.display = "none";
    player1hold.style.display = "none";
    player2roll.style.display = "block";
    player2hold.style.display = "block";
    player1.style.display = "none";
    player2.style.display = "block";
    changeText("Total Score:");
});

player2roll.addEventListener("click", () => {
    function changeScore(text) {
        document.getElementById("scoreContainer2").innerHTML = text;
    }
    for (let i = 0; i < 1; i++) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        player2total = (player2total + randomNumber);
        console.log(randomNumber);
        console.log(player2total);
    }
    if (randomNumber == 1) {
        dice1.style.display = "block";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        player2total = 0;
        changeScore(`${player2total}`);
        player1roll.style.display = "block";
        player1hold.style.display = "block";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        player1.style.display = "block";
        player2.style.display = "none";
    }
    if (randomNumber == 2) {
        dice1.style.display = "none";
        dice2.style.display = "block";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player2total}`);
    }
    if (randomNumber == 3) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "block";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player2total}`);
    }
    if (randomNumber == 4) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "block";
        dice5.style.display = "none";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player2total}`);
    }
    if (randomNumber == 5) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "block";
        dice6.style.display = "none";
        pressRoll.style.display = "none";
        changeScore(`${player2total}`);
    }
    if (randomNumber == 6) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "block";
        pressRoll.style.display = "none";
        changeScore(`${player2total}`);
    }
    if (player2total >= 20) {
        function youWin(text) {
            document.getElementById("player2").innerHTML = (text);
        }
        function changeText(text) {
            document.getElementById("score2").innerHTML = (text);
        }
        player1roll.style.display = "none";
        player1hold.style.display = "none";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        player1.style.display = "none";
        // player2.style.display = "none";
        youWin("Well Done Player 2, You Win!")
        newGame.style.display = "block";
        changeText("Total Score:");
    }
});
player2hold.addEventListener("click", () => {
    function changeText2(text) {
        document.getElementById("score2").innerHTML = (text);
    }
    function changeText(text) {
        document.getElementById("score1").innerHTML = (text);
    }
    // function youWin(text) {
    //     document.getElementById("player2").innerHTML = (text);
    // }
    // if (currentScore == currentScore2) {
    //     newGame.style.display = "block";
    //     player1roll.style.display = "none";
    //     player1hold.style.display = "none";
    //     player2roll.style.display = "none";
    //     player2hold.style.display = "none";
    //     player2.style.display = "block";


    //     // if (player1total < player2total) {
    //     //     player2.style.display = "block";
    //     //     youWin("Well Done Player 2, You Win!")
    //     // } else if (player2total < player1total) {
    //     //     console.log("HI");
    //     //     player2.style.display = "block";
    //     //     youWin("Well Done Player 1, You Win!")
    //     // } else {
    //     //     youWin("Really? A draw??")
    //     // }
    // }
    if (player1total == 0) {
        player1roll.style.display = "block";
        player1hold.style.display = "block";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        player1.style.display = "block";
        player2.style.display = "none";
        changeText2("Total Score:");
        changeText("Score");
    } else {
        player1roll.style.display = "none";
        player1hold.style.display = "none";
        player2roll.style.display = "none";
        player2hold.style.display = "none";
        player1.style.display = "none";
        player2.style.display = "none";
        changeText2("Total Score:");
    }

    // youWin("Well Done Player 2, You Win!")
});
newGame.addEventListener("click", () => {
    function newGame(text) {
        document.getElementById("player1").innerHTML = (text);
    }
    function newGame2(text) {
        document.getElementById("player2").innerHTML = (text);
    }
    function changeScore(text) {
        document.getElementById("scoreContainer").innerHTML = text;
    }

    function changeScore2(text) {
        document.getElementById("scoreContainer2").innerHTML = text;
    }
    function changeText(text) {
        document.getElementById("score1").innerHTML = (text);
    }
    function changeText2(text) {
        document.getElementById("score2").innerHTML = (text);
    }
    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    pressRoll.style.display = "block";
    player2.style.display = "none";
    newGame("Player 1");
    newGame2("Player 2")
    player1total = 0;
    player2total = 0;
    changeScore(`${player1total}`);
    changeScore2(`${player2total}`);
    changeText("Score:");
    changeText2("Score:");
})