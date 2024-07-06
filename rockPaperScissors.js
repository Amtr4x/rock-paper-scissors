// @ts-check

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
 * Prompts the user to input their choice among "rock", "paper", or "scissors".
 * Keeps prompting until a valid choice is entered.
 *
 * @returns {string} The user's entered choice, converted to the correct case (e.g., "ROCK").
 */
function getHumanChoice() {
    let choice = "";

    while (
        choice.toLowerCase() !== "rock" &&
        choice.toLowerCase() !== "paper" &&
        choice.toLowerCase() !== "scissors"
    ) {
        let input = prompt(
            "(Rock, Paper, Scissors)\nPlease introduce your choice: "
        );

        if (input !== null) {
            choice = input;
        }
    }

    return choice.toLowerCase();
}

/**
 * Plays a round of Rock, Paper, Scissors between the human and computer.
 * Determines the winner by comparing the choices and updates scores accordingly.
 *
 * @param {string} humanChoice - The human player's choice, which should be either "rock", "paper", or "scissors".
 * @param {string} computerChoice - The computer's choice, which should be either "rock", "paper", or "scissors".
 */
function playRound(humanChoice, computerChoice) {
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

/**
 * Plays a full game of Rock, Paper, Scissors, consisting of 5 rounds.
 * Displays the results of each round and the final winner based on scores.
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(
        `The final winner ${
            humanScore > computerScore ? "are You!!!" : "is the Computer :("
        }`
    );
}

// ********************************************* Main Execution *********************************************************
let humanScore = 0;
let computerScore = 0;

playGame();
