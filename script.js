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

var playerTotalScores = document.querySelectorAll('.player-score');
var playerRoundScores = document.querySelectorAll('.player-current-score');

var diceNumber;

var runningTotalScore = null;
var roundScore = null;

function resetGame() {
	newGameBtn.addEventListener('click', function() {
		playerTotalScores[0].textContent = 0;
		playerTotalScores[1].textContent = 0;
		playerRoundScores[0].textContent = 0;
		playerRoundScores[1].textContent = 0;
	});
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
			var te = roundScore.toString();
			playerRoundScores[0].innerHTML(roundScore);
		} else {
			roundScore = 0;
			togglePlayerTurn();
		}
	});
}

function holdRoundScore() {
	holdBtn.addEventListener('click', function() {
		runningTotalScore = runningTotalScore;
		// player
		togglePlayerTurn();
	});
}


// Functions
rollDice();
resetGame();
holdRoundScore();




