var newGameBtn = document.querySelector('.btn-new');
var rollDiceBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-hold');
var diceImage = document.querySelector('.dice');

var playerOnePanel = document.querySelector('.player-0-panel');
var playerTwoPanel = document.querySelector('.player-1-panel');

var playerTotalScores = document.querySelectorAll('.player-score');
var playerRoundScores = document.querySelectorAll('.player-current-score');

var diceNumber;

var runningTotalScore = null;
var roundScore = null;

function newGame() {
	newGameBtn.addEventListener('click', function() {
		resetScores();
		diceImage.style.display = 'block';
		rollDiceBtn.style.display = 'block';
		holdBtn.style.display = 'block';
	});
}

function resetScores() {
	playerTotalScores[0].textContent = 0;
	playerTotalScores[1].textContent = 0;
	playerRoundScores[0].textContent = 0;
	playerRoundScores[1].textContent = 0;
}

function getRandomDiceNumber() {
	var randomRoundedNumber = ((Math.random()) * 6) + 1;
	return floorNum = Math.floor(randomRoundedNumber);
}

function togglePlayerTurn() {
	playerOnePanel.classList.toggle('active');
	playerTwoPanel.classList.toggle('active');
}

function rollDice() {
	rollDiceBtn.addEventListener('click', function() {
		diceNumber = getRandomDiceNumber();
		diceImage.src='./assets/dice-images/dice-' + diceNumber + '.png';
		if (diceNumber !== 1) {
			roundScore += diceNumber;

			var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
			activeRoundScores.innerHTML = roundScore;
		} else {
			roundScore = 0;
			var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
			activeRoundScores.innerHTML = roundScore;
			togglePlayerTurn();
		}
	});
}

function holdRoundScore() {
	holdBtn.addEventListener('click', function() {
		var totalScore = document.querySelector('.active > .player-score');
		currentTotalScore = parseInt(totalScore.innerHTML);

		runningTotalScore = roundScore + currentTotalScore;
		totalScore.innerHTML = runningTotalScore;

		var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
		activeRoundScores.innerHTML = 0;
		
		roundScore = 0;

		if (totalScore.innerHTML >= 10) {
			displayWinner(); 
		} else {
			togglePlayerTurn();
		}
	});
}

function displayWinner() {
	document.querySelector('div:not(.active) > .player-name').innerHTML = 'Loser';
	document.querySelector('.active > .player-name').innerHTML = '<strong>Winner!</strong>';
	document.querySelector('.active').classList.remove('active');
	diceImage.style.display = 'hidden';
}

// Functions
rollDice();
newGame();
holdRoundScore();




