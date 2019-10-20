/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var players = [
	{
		playerName: 'Player One',
		totalScore: 0,
		roundScore: 0
	},
	{
		playerName: 'Player Two',
		totalScore: 0,
		roundScore: 0	
	}
];

var newGameBtn = document.querySelector('.btn-new');
var rollDiceBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-hold');

var playerTotalScores = document.querySelectorAll('.player-score');
var playerRoundScores = document.querySelectorAll('.player-current-score');

var diceNumber;

var runningTotalScore = null;
var roundScore = null;

function resetGame() {
	newGameBtn.addEventListener('click', function() {
		// playerTotalScores[0].textContent = players[0].totalScore;
		// playerTotalScores[1].textContent = players[1].totalScore;
		// playerRoundScores[0].textContent = players[0].roundScore;
		// playerRoundScores[1].textContent = players[1].roundScore;
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

function rollDice() {
	rollDiceBtn.addEventListener('click', function() {
		diceNumber = getRandomDiceNumber();
		document.querySelector('.dice').src='./assets/dice-images/dice-' + diceNumber + '.png';
		if (diceNumber !== 1) {
			roundScore += diceNumber;
		} else {
			roundScore = 0;
			playerTotalScores[0].textContent += roundScore;
			// and change turns 
		}
	});
}

function holdRoundScore() {
	holdBtn.addEventListener('click', function() {
		players[0].totalScore = runningTotalScore;
		// switch active player symbol
		document.querySelector('.player-0-panel.active').className = "player-0-panel";
		document.querySelector('.player-1-panel').className = "player-1-panel active";
	});
}


// Functions
rollDice();
resetGame();
holdRoundScore();




