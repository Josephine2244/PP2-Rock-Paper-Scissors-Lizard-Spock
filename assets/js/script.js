const displayPlayerChoice = document.getElementById('player-choice');
const displayHostChoice = document.getElementById('host-choice');
const displayResult = document.getElementById('result');
const playerOptions = document.getElementsByClassName('player');
let playerChoice;
let hostChoice;
let result;

Array.from(playerOptions).forEach(playerOption => playerOption.addEventListener('click', (event) => {
    playerChoice = event.target.textContent;
    displayPlayerChoice.innerHTML = playerChoice;
    randomHostChoice();
    whoWins();
}));

document.getElementById('reset').addEventListener('click', resetScore);

function randomHostChoice() {
    const randomNumber = Math.floor(Math.random() * playerOptions.length) + 1;

    if (randomNumber === 1) {
        hostChoice = 'Rock ⛰️';
    }
    if (randomNumber === 2) {
        hostChoice = 'Paper 📃';
    }
    if (randomNumber === 3) {
        hostChoice = 'Scissors ✂️';
    }
    if (randomNumber === 4) {
        hostChoice = 'Lizard 🦎';
    }
    if (randomNumber === 5) {
        hostChoice = 'Spock 🖖';
    }
    displayHostChoice.innerHTML = hostChoice;
}

function whoWins() {
    if (hostChoice === playerChoice) {
        result = 'Its a Tie!';
    }
    if (hostChoice === 'Scissors ✂️' && playerChoice === 'Paper 📃') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Scissors ✂️' && playerChoice === 'Lizard 🦎') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Paper 📃' && playerChoice === 'Rock ⛰️') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Paper 📃' && playerChoice === 'Spock 🖖') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Rock ⛰️' && playerChoice === 'Lizard 🦎') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Rock ⛰️' && playerChoice === 'Scissors ✂️') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Lizard 🦎' && playerChoice === 'Spock 🖖') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Lizard 🦎' && playerChoice === 'Paper 📃') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Spock 🖖' && playerChoice === 'Rock ⛰️') {
        result = 'Better Luck Next Time.';
    }
    if (hostChoice === 'Spock 🖖' && playerChoice === 'Scissors ✂️') {
        result = 'Better Luck Next Time.';
    }

    if (hostChoice === 'Paper 📃' && playerChoice === 'Scissors ✂️') {
        result = 'You Win!';
    }
    if (hostChoice === 'Lizard 🦎' && playerChoice === 'Scissors ✂️') {
        result = 'You Win!';
    }
    if (hostChoice === 'Rock ⛰️' && playerChoice === 'Paper 📃') {
        result = 'You Win!';
    }
    if (hostChoice === 'Spock 🖖' && playerChoice === 'Paper 📃') {
        result = 'You Win!';
    }
    if (hostChoice === 'Lizard 🦎' && playerChoice === 'Rock ⛰️') {
        result = 'You Win!';
    }
    if (hostChoice === 'Scissors ✂️' && playerChoice === 'Rock ⛰️') {
        result = 'You Win!';
    }
    if (hostChoice === 'Spock 🖖' && playerChoice === 'Lizard 🦎') {
        result = 'You Win!';
    }
    if (hostChoice === 'Paper 📃' && playerChoice === 'Lizard 🦎') {
        result = 'You Win!';
    }
    if (hostChoice === 'Rock ⛰️' && playerChoice === 'Spock 🖖') {
        result = 'You Win!';
    }
    if (hostChoice === 'Scissors ✂️' && playerChoice === 'Spock 🖖') {
        result = 'You Win!';
    }
    displayResult.innerHTML = result;
    if (result === 'You Win!') {
        playerScore()
    } else if (result === 'Better Luck Next Time.') {
        hostScore();
    }
}

function playerScore() {
    let oldScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++oldScore;
}

function hostScore() {
    let oldScore = parseInt(document.getElementById('host-score').innerText);
    document.getElementById('host-score').innerText = ++oldScore;
}

function resetScore() {
    document.getElementById('player-score').innerText = 0;
    document.getElementById('host-score').innerText = 0;
}