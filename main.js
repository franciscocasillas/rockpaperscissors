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

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Rock, paper, scissors?");
		const computerSelection = getComputerChoice();
		const score = [0, 0];
		let result = playGame(playerSelection, computerSelection);
		if (result === "tie") {
			console.log(
				`You chose ${playerSelection}. The computer chose ${computerSelection}. You TIE!`
			);
			console.log(score);
		} else if (result === "win") {
			console.log(
				`You chose ${playerSelection}. The computer chose ${computerSelection}. You WIN!`
			);
			score[0] += 1;
			console.log(score);
		} else {
			console.log(
				`You chose ${playerSelection}. The computer chose ${computerSelection}. You LOSE!`
			);
			score[1] += 1;
			console.log(score);
		}
	}
}
