function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 10);
	if (computerChoice === 0) {
		getComputerChoice();
		return;
	} else if (computerChoice < 4) {
		computerChoice = "rock";
	} else if (computerChoice < 7) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	return computerChoice;
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection === computerSelection) {
		console.log(`You picked ${playerSelection}. 
        The computer chose ${computerSelection}.
        You TIED!`);
		return "tie";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		console.log(`You picked ${playerSelection}. 
        The computer chose ${computerSelection}.
        You WON!`);
		return "win";
	} else {
		console.log(`You picked ${playerSelection}. 
        The computer chose ${computerSelection}.
        You LOST!`);
		return "lose";
	}
}
