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
        updateUI("nobody");
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

/**
 * Update UI components to display the round advances.
 * When the game is over, it displays the winner.
 *
 * @param {String} winner - used to manage the marker
 */
function updateUI(winner) {
    const playerPoints = document.querySelector(".marker__player-count");
    const computerPoints = document.querySelector(".marker__computer-count");
    const roundResume = document.querySelector(".round-resume");

    if (winner === "player") {
        roundResume.textContent = "You win!";
        roundResume.setAttribute("style", "color: #5c9bff");

        playerPoints.textContent = `You ${humanScore}`;
    } else if (winner === "computer") {
        roundResume.textContent = "Computer win!";
        roundResume.setAttribute("style", "color: #ff5c5c");

        computerPoints.textContent = `${computerScore} Computer`;
    } else {
        roundResume.textContent = "GAME DRAWN!";
        roundResume.removeAttribute("style");
    }

    turnsPlayed++;

    if (turnsPlayed === 5 || humanScore >= 3 || computerScore >= 3) {
        displayFinalResult();
    }
}

/**
 * Display the final result of the game throughout a modal.
 */
function displayFinalResult() {
    const modal = document.createElement("div");
    const result = document.createElement("p");
    const resetButton = document.createElement("button");
    const blurScreen = document.createElement("div");

    modal.classList = "result__modal";
    result.classList = "result__text";
    resetButton.classList = "result__reset-btn";
    blurScreen.classList = "result__blur-screen";

    if (humanScore > computerScore) {
        result.textContent = "You are the BIG WINNER! 🎉🥳🎉";
    } else if (computerScore > humanScore) {
        result.textContent = "Computer wins, better luck next time! 😥";
    } else {
        result.textContent = "It's a DRAW! 🫣";
    }

    resetButton.textContent = "Play Again! 🔄";
    resetButton.addEventListener("click", () => {
        location.reload();
    });

    modal.appendChild(result);
    modal.appendChild(resetButton);
    document.querySelector("body").appendChild(blurScreen);
    blurScreen.appendChild(modal);
}

// ********************************************* Main Execution *********************************************************
let humanScore = 0;
let computerScore = 0;
let turnsPlayed = 0;

playGame();
