/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerOne = {
	totalScore: 0,
	roundScore: 0
};

var playerTwo = {
	totalScore: 0,
	roundScore: 0	
};

var newGameBtn = document.querySelector('.btn-new');
var rollDiceBtn = document.querySelector('.btn-roll');

var playerTotalScores = document.querySelectorAll('.player-score');
var playerRoundScores = document.querySelectorAll('.player-current-score');

function resetGame() {
	newGameBtn.addEventListener('click', function() {
		playerTotalScores[0].textContent = playerOne.totalScore;
		playerTotalScores[1].textContent = playerTwo.totalScore;
		playerRoundScores[0].textContent = playerOne.roundScore;
		playerRoundScores[1].textContent = playerTwo.roundScore;
	});
}

function getRandomDiceNumber() {
	var randomRoundedNumber = ((Math.random()) * 6) + 1;
	return floorNum = Math.floor(randomRoundedNumber);
}

function rollDice() {
	rollDiceBtn.addEventListener('click', function() {
		var diceNumber = getRandomDiceNumber();
		document.querySelector('.dice').src='./assets/dice-images/dice-' + diceNumber + '.png';
		return diceNumber;
	});
}

function addRunningScore() {

}


rollDice();
resetGame();