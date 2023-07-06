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
