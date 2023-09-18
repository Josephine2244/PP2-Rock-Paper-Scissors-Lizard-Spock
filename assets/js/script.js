const displayPlayerChoice = document.getElementById('player-choice');
const displayHostChoice = document.getElementById('host-choice');
const displayResult = document.getElementById('result');
const playerOptions = document. getElementsByClassName('player');
let playerChoice;
let hostChoice;
let result;

Array.from(playerOptions).forEach(playerOption => playerOption.addEventListener('click', (event) => {
    playerChoice = event.target.textContent;
    displayPlayerChoice.innerHTML = playerChoice;
    randomHostChoice();
    whoWins();
}))

function randomHostChoice() {
    const randomNumber = Math.floor(Math.random() * playerOptions.length) + 1;

    if (randomNumber === 1 {
        hostChoice = 'Rock ⛰️';
    }
    if (randomNumber === 2 {
        hostChoice = 'Paper 📃';
    }
    if (randomNumber === 3 {
        hostChoice = 'Scissors ✂️';
    }
    if (randomNumber === 4 {
        hostChoice = 'Lizard 🦎';
    }
    if (randomNumber === 5 {
        hostChoice = 'Spock 🖖';
    }
    displayHostChoice.innerHTML = hostChoice;
}

function whoWins() {

}

function playerScore() {

}

function hostScore() {

}

function resetScore() {

}