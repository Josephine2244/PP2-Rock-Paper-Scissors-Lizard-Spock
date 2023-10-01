let displayPlayerChoice = document.getElementById('player-choice');
let displayHostChoice = document.getElementById('host-choice');
let displayResult = document.getElementById('result');
let playerOptions = document.getElementsByClassName('player');
let playerChoice = null;
let hostChoice = null;
let result = null;
let roundsPlayed = 0;
const WIN_MESSAGE = 'You Win!';
const LOSE_MESSAGE = 'Better Luck Next Time.';
const TIE_MESSAGE = 'Its a Tie!';
const ROCK_TXT = 'Rock ⛰️';
const PAPER_TXT = 'Paper 📃';
const SCISSORS_TXT = 'Scissors ✂️';
const LIZARD_TXT = 'Lizard 🦎';
const SPOCK_TXT = 'Spock 🖖';

/** Game will start once player makes their choice */
function initialiseGame() {
    Array.from(playerOptions).forEach(playerOption => playerOption.addEventListener('click', onPlayerOptionClick));
    /** Scores will reset when reset button is clicked */
    document.getElementById('reset').addEventListener('click', resetScore);
}

/** When player clicks button, host choice will appear and game will be played */
function onPlayerOptionClick(event) {
    playerChoice = event.target.textContent;
    displayPlayerChoice.innerHTML = playerChoice;
    showHostChoice();
    getResult();
    roundsPlayed++;
}

/** Round is complete once a players score reaches 5 */
function completeRound() {
    if (document.getElementById('player-score').innerText === 5) {
        displayPlayerScore();
    } else if (document.getElementById('host-score').innerText === 5) {
        displayHostScore();
    }
    document.getElementById('player-score').innerText = 0;
    document.getElementById('host-score').innerText = 0;
}

/** Alert messages pop up when a score reaches five to tell player who has won  */
function firstToFive() {
    let displayPlayerScore = parseInt(document.getElementById('player-score').innerText);
    let displayHostScore = parseInt(document.getElementById('host-score').innerText);
    if (roundsPlayed === 9 || displayPlayerScore === 5 || displayHostScore === 5) {
        completeRound();
    }
    if (displayPlayerScore === 5) {
        alert('You Beat the Host!');
        incrementRoundCounter();
    } else if (displayHostScore === 5) {
        alert('The Host wins!');
    }
}

/** How the host makes its random choice */
function showHostChoice() {
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

/** How the game determines the result */
function getResult() {
    if (hostChoice === playerChoice) {
        result = TIE_MESSAGE;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === PAPER_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === LIZARD_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === PAPER_TXT && playerChoice === ROCK_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === PAPER_TXT && playerChoice === SPOCK_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === ROCK_TXT && playerChoice === LIZARD_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === ROCK_TXT && playerChoice === SCISSORS_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === LIZARD_TXT && playerChoice === SPOCK_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === LIZARD_TXT && playerChoice === PAPER_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === SPOCK_TXT && playerChoice === ROCK_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === SPOCK_TXT && playerChoice === SCISSORS_TXT) {
        result = LOSE_MESSAGE;
    } else if (hostChoice === PAPER_TXT && playerChoice === SCISSORS_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === LIZARD_TXT && playerChoice === SCISSORS_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === ROCK_TXT && playerChoice === PAPER_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === SPOCK_TXT && playerChoice === PAPER_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === LIZARD_TXT && playerChoice === ROCK_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === ROCK_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === SPOCK_TXT && playerChoice === LIZARD_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === PAPER_TXT && playerChoice === LIZARD_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === ROCK_TXT && playerChoice === SPOCK_TXT) {
        result = WIN_MESSAGE;
    } else if (hostChoice === SCISSORS_TXT && playerChoice === SPOCK_TXT) {
        result = WIN_MESSAGE;
    }
    displayResult.innerHTML = result;
    if (result === WIN_MESSAGE) {
        displayPlayerScore();
    } else if (result === LOSE_MESSAGE) {
        displayHostScore();
    }
    firstToFive();
}

/** Incrementing players score when they win */
function displayPlayerScore() {
    let oldScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++oldScore;
}

/** Incrementing host score when they win */
function displayHostScore() {
    let oldScore = parseInt(document.getElementById('host-score').innerText);
    document.getElementById('host-score').innerText = ++oldScore;
}

function incrementRoundCounter() {
    let roundsPlayed = parseInt(document.getElementById('round-counter').innerText);
    document.getElementById('round-counter').innerText = ++roundsPlayed;
}

/** Reset scores to 0 when function is called */
function resetScore() {
    if (confirm('Are you sure?') == true) {
        document.getElementById('player-score').innerText = 0;
        document.getElementById('host-score').innerText = 0;
        document.getElementById('round-counter').innerText = 0;
    }
}

/** Game will play once all other content is loaded */
addEventListener('DOMContentLoaded', initialiseGame);