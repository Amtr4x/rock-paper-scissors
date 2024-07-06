// @ts-check

/**
 * Generates a random computer choice from the set ["ROCK", "PAPER", "SCISSORS"].
 *
 * @returns {string} The computer's choice, which can be either "ROCK", "PAPER", or "SCISSORS".
 */
function getComputerChoice() {
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
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

    return choice;
}
