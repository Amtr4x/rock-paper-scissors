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
        console.log("Game drawn!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log("You win!");
        console.log(`You : ${humanScore} - ${computerScore} Computer`);
    } else {
        computerScore++;
        console.log("You lose!");
        console.log(`You : ${humanScore} - ${computerScore} Computer`);
    }
}

// ********************************************* Main Execution *********************************************************
let humanScore = 0;
let computerScore = 0;
let turnsPlayed = 0;

playGame();
