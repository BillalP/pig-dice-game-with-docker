let newGameBtn = document.querySelector('.btn-new');
let rollDiceBtn = document.querySelector('.btn-roll');
let holdBtn = document.querySelector('.btn-hold');
let diceImage = document.querySelector('.dice');

let playerOnePanel = document.querySelector('.player-0-panel');
let playerTwoPanel = document.querySelector('.player-1-panel');

let playerTotalScores = document.querySelectorAll('.player-score');
let playerRoundScores = document.querySelectorAll('.player-current-score');
let activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');

let diceNumber;

let runningTotalScore = null;
let roundScore = null;

const newGame = () => {
	newGameBtn.addEventListener('click', () => {
		resetScores();
		diceImage.style.display = 'block';
		rollDiceBtn.style.display = 'block';
		holdBtn.style.display = 'block';
	});
}

const resetScores = () => {
	playerTotalScores[0].textContent = 0;
	playerTotalScores[1].textContent = 0;
	playerRoundScores[0].textContent = 0;
	playerRoundScores[1].textContent = 0;
}

const getRandomDiceNumber = () => {
	let randomRoundedNumber = ((Math.random()) * 6) + 1;
	return floorNum = Math.floor(randomRoundedNumber);
}

const togglePlayerTurn = () => {
	playerOnePanel.classList.toggle('active');
	playerTwoPanel.classList.toggle('active');
}

const rollDice = () => {
	rollDiceBtn.addEventListener('click', () => {
		diceNumber = getRandomDiceNumber();
		diceImage.src=`./assets/dice-images/dice-${diceNumber}.png`;
		let activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
		if (diceNumber !== 1) {
			roundScore += diceNumber;
			activeRoundScores.innerHTML = roundScore;
		} else {
			roundScore = 0;
			activeRoundScores.innerHTML = roundScore;
			togglePlayerTurn();
		}
	});
}

const holdRoundScore = () => {
	holdBtn.addEventListener('click', () => {
		let totalScore = document.querySelector('.active > .player-score');
		currentTotalScore = parseInt(totalScore.innerHTML);

		runningTotalScore = roundScore + currentTotalScore;
		totalScore.innerHTML = runningTotalScore;
		let activeRoundScore = document.querySelector('.active > .player-current-box > .player-current-score');

		activeRoundScore.innerHTML = 0;
		
		roundScore = 0;

		if (totalScore.innerHTML >= 100) {
			displayWinner(); 
		} else {
			togglePlayerTurn();
		}
	});
}

const displayWinner = () => {
	document.querySelector('div:not(.active) > .player-name').innerHTML = 'Loser';
	document.querySelector('.active > .player-name').innerHTML = '<strong>Winner!</strong>';
	document.querySelector('.active').classList.remove('active');
	diceImage.style.display = 'none';
}

// Functions
rollDice();
newGame();
holdRoundScore();