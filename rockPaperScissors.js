/**
 * Generates a random computer choice from the set ["ROCK", "PAPER", "SCISSORS"].
 *
 * @returns {string} The computer's choice, which can be either "ROCK", "PAPER", or "SCISSORS".
 */
function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    const RGN = Math.floor(Math.random() * 100);

    if (RGN <= 33) {
        return CHOICES[0];
    } else if (RGN <= 66) {
        return CHOICES[1];
    } else {
        return CHOICES[2];
    }
}

/**
 * Sets up the event listener for the game buttons, allowing the human player to make a choice.
 * Handles the human player's choice, generates the computer's choice, and updates the scores
 * based on the outcome of each round.
 */
function playGame() {
    let humanChoice = "";
    const buttonPanel = document.querySelector(".card__btns-container");

    buttonPanel.addEventListener("click", (e) => {
        const buttonPressed = e.target;

        switch (buttonPressed.id) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
                break;
            case "scissors":
                humanChoice = "scissors";
                break;
        }

        handleScores(humanChoice, getComputerChoice());
    });
}

/**
 * Plays a round of Rock, Paper, Scissors between the human and computer.
 * Determines the winner by comparing the choices and updates scores accordingly.
 *
 * @param {string} humanChoice - The human player's choice, which should be either "rock", "paper", or "scissors".
 * @param {string} computerChoice - The computer's choice, which should be either "rock", "paper", or "scissors".
 */
function handleScores(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updateUI("drawn");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        updateUI("player");
    } else {
        computerScore++;
        updateUI("computer");
    }
}

function updateUI(winner) {
    const playerPoints = document.querySelector(".marker__player-count");
    const computerPoints = document.querySelector(".marker__computer-count");
    const roundResume = document.querySelector(".round-resume");

    if (winner === "player") {
        roundResume.textContent = "You win!";
        roundResume.removeAttribute("style");
        roundResume.setAttribute("style", "color: #5c9bff");

        playerPoints.textContent = `You ${humanScore}`;
    } else if (winner === "computer") {
        roundResume.textContent = "Computer win!";
        roundResume.removeAttribute("style");
        roundResume.setAttribute("style", "color: #ff5c5c");

        computerPoints.textContent = `${computerScore} Computer`;
    } else {
        roundResume.textContent = "GAME DRAWN!";
        roundResume.removeAttribute("style");
    }

    turnsPlayed++;
}

// TODO create a function that generates a pop up with a final result and a restart game button
// * one idea is to create the popup styles in the style.css and just generate the component and blur the
// * screen behind the pop up.

// ********************************************* Main Execution *********************************************************
let humanScore = 0;
let computerScore = 0;
let turnsPlayed = 0;

playGame();
