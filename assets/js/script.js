let displayPlayerChoice = document.getElementById('player-choice');
let displayHostChoice = document.getElementById('host-choice');
let displayResult = document.getElementById('result');
let playerOptions = document.getElementsByClassName('player');
let playerChoice = null;
let hostChoice = null;
let result = null;
const winMessage = 'You Win!';
const loseMessage = 'Better Luck Next Time.';
const tieMessage = 'Its a Tie!';
const ROCK_TXT = 'Rock ⛰️';
const PAPER_TXT = 'Paper 📃';
const SCISSORS_TXT = 'Scissors ✂️';
const LIZARD_TXT = 'Lizard 🦎';
const SPOCK_TXT = 'Spock 🖖';

/** Game will start once player makes their choice */
function initialGame() {
    Array.from(playerOptions).forEach(playerOption => playerOption.addEventListener('click', onPlayerOptionClick));

    /** Scores will reset when reset button is clicked */
    document.getElementById('reset').addEventListener('click', resetScore);
}

/** When player clicks button, host choice will appear and game will be played */
function onPlayerOptionClick(event) {
    playerChoice = event.target.textContent;
    displayPlayerChoice.innerHTML = playerChoice;
    randomHostChoice();
    whoWins();
}

/** How the host makes its random choice */
function randomHostChoice() {
    const randomNumber = Math.floor(Math.random() * playerOptions.length) + 1;

    if (randomNumber === 1) {
        hostChoice = ROCK_TXT;
    }
    if (randomNumber === 2) {
        hostChoice = PAPER_TXT;
    }
    if (randomNumber === 3) {
        hostChoice = SCISSORS_TXT;
    }
    if (randomNumber === 4) {
        hostChoice = LIZARD_TXT;
    }
    if (randomNumber === 5) {
        hostChoice = SPOCK_TXT;
    }
    displayHostChoice.innerHTML = hostChoice;
}

/** How the game determines who wins */
function whoWins() {
    if (hostChoice === playerChoice) {
        result = tieMessage;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === PAPER_TXT) {
        result = loseMessage;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === LIZARD_TXT) {
        result = loseMessage;
    } else if (hostChoice === PAPER_TXT && playerChoice === ROCK_TXT) {
        result = loseMessage;
    } else if (hostChoice === PAPER_TXT && playerChoice === SPOCK_TXT) {
        result = loseMessage;
    } else if (hostChoice === ROCK_TXT && playerChoice === LIZARD_TXT) {
        result = loseMessage;
    } else if (hostChoice === ROCK_TXT && playerChoice === SCISSORS_TXT) {
        result = loseMessage;
    } else if (hostChoice === LIZARD_TXT && playerChoice === SPOCK_TXT) {
        result = loseMessage;
    } else if (hostChoice === LIZARD_TXT && playerChoice === PAPER_TXT) {
        result = loseMessage;
    } else if (hostChoice === SPOCK_TXT && playerChoice === ROCK_TXT) {
        result = loseMessage;
    } else if (hostChoice === SPOCK_TXT && playerChoice === SCISSORS_TXT) {
        result = loseMessage;
    } else if (hostChoice === PAPER_TXT && playerChoice === SCISSORS_TXT) {
        result = winMessage;
    } else if (hostChoice === LIZARD_TXT && playerChoice === SCISSORS_TXT) {
        result = winMessage;
    } else if (hostChoice === ROCK_TXT && playerChoice === PAPER_TXT) {
        result = winMessage;
    } else if (hostChoice === SPOCK_TXT && playerChoice === PAPER_TXT) {
        result = winMessage;
    } else if (hostChoice === LIZARD_TXT && playerChoice === ROCK_TXT) {
        result = winMessage;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === ROCK_TXT) {
        result = winMessage;
    } else if (hostChoice === SPOCK_TXT && playerChoice === LIZARD_TXT) {
        result = winMessage;
    } else if (hostChoice === PAPER_TXT && playerChoice === LIZARD_TXT) {
        result = winMessage;
    } else if (hostChoice === ROCK_TXT && playerChoice === SPOCK_TXT) {
        result = winMessage;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === SPOCK_TXT) {
        result = winMessage;
    }
    displayResult.innerHTML = result;
    if (result === winMessage) {
        playerScore();
    } else if (result === loseMessage) {
        hostScore();
    }
}

/** Incrementing players score when they win */
function playerScore() {
    let oldScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++oldScore;
}

/** Incrementing host score when they win */
function hostScore() {
    let oldScore = parseInt(document.getElementById('host-score').innerText);
    document.getElementById('host-score').innerText = ++oldScore;
}

/** Reset scores to 0 when function is called */
function resetScore() {
    if (confirm('Are you sure?') == true) {
        document.getElementById('player-score').innerText = 0;
        document.getElementById('host-score').innerText = 0;
    }
}

/** Game will play once all other content is loaded */
addEventListener('DOMContentLoaded', initialGame);