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
