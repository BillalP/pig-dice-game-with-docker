/*
  
  GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's 
  the next player's turn
- The first player to reach 100 points as a GLOBAL score, wins the game

*/

var newGameBtn = document.querySelector('.btn-new');
var rollDiceBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-hold');
var diceImage = document.querySelector('.dice');

var playerOnePanel = document.querySelector('.player-0-panel');
var playerTwoPanel = document.querySelector('.player-1-panel');

// var totalScore = document.querySelector('.active > .player-score');

var playerTotalScores = document.querySelectorAll('.player-score');
var playerRoundScores = document.querySelectorAll('.player-current-score');

// var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');

var diceNumber;

var runningTotalScore = null;
var roundScore = null;

function newGame() {
	newGameBtn.addEventListener('click', function() {
		resetScores();
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
	playerOnePanel.classList.toggle("active");
	playerTwoPanel.classList.toggle("active");
}

function rollDice() {
	rollDiceBtn.addEventListener('click', function() {
		diceNumber = getRandomDiceNumber();
		diceImage.src='./assets/dice-images/dice-' + diceNumber + '.png';
		if (diceNumber !== 1) {
			roundScore += diceNumber;
			var roundScoreString = roundScore.toString();
			// Update
			var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
			activeRoundScores.innerHTML = roundScore;
		} else {
			roundScore = 0;
			var roundScoreString = roundScore.toString();
			var activeRoundScores = document.querySelector('.active > .player-current-box > .player-current-score');
			activeRoundScores.innerHTML = roundScoreString;
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

		if (totalScore.innerHTML >= 100) {
			displayWinner();
		};

		togglePlayerTurn();
	});
}

function displayWinner() {
	resetScores();
	document.querySelector('.active > .player-name').innerText = 'Winner';
}

// Functions
rollDice();
newGame();
holdRoundScore();




