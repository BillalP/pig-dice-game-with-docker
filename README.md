Pig Dice Game
==============

#### An old age popular dice game. The rules are:

- The game is for 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they whish. Each result get added to their ROUND score
- BUT, if the player rolls a 1, all their ROUND score is lost
- Then it is the next player's turn
- Players can choose to 'hold', which means that their ROUND score is added to their TOTAL score. Subsequently, it is the next player's turn
- The first player to reach at least 100 points as a TOTAL score, wins the game!

The frontend was produced by Jonas Schmedtmann (https://codingheroes.io/) as part of his Udemy course. I have developed all of the logic and made a few small changes to the HTML/CSS.

### Setup

```shell
# Build the Docker image.
docker build . -t pig-game

# Verify image has been built.
docker image ls

# Start the Docker container.
docker run -d pig-game

# Open http://localhost:3000
```
