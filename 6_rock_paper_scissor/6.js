// 6.js

// Get elements from the DOM
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const yourScore = document.getElementById('your-score');
const compScore = document.getElementById('comp-score');
const message = document.getElementById('message');

let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update the score
function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        yourScore.textContent = playerScore;
        message.textContent = 'You win!';
        message.style.color = 'green';
    } else if (winner === 'computer') {
        computerScore++;
        compScore.textContent = computerScore;
        message.textContent = 'Computer wins!';
        message.style.color = 'red';
    } else {
        message.textContent = 'It\'s a draw!';
        message.style.color = 'orange';
    }
}

// Function to handle the player's choice
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
}

// Add event listeners to each choice
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissor.addEventListener('click', () => playGame('scissor'));
