function getComputerChoice() {
	let randomNumber = Math.ceil(Math.random() * 9);
	if (randomNumber < 4) {
		return "rock";
	} else if (randomNumber < 7) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playGame(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === computerSelection) {
		return "tie";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		return "win";
	} else {
		return "lose";
	}
}
