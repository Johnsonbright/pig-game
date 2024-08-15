/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
"Use Strict Mode"
const player0El = document.querySelector(`.player-0-panel`);
const player1El = document.querySelector(`.player-1-panel`);
const score0 = document.querySelector(`.player-score`);
const score1 = document.querySelector(`#score-1`);
const dice5 = document.querySelector(`.dice`);
const btnnew = document.querySelector(`.btn-new`);
const btnroll = document.querySelector(`.btn-roll`);
const btnhold = document.querySelector(`.btn-hold`);
const currentScore = document.getElementById(`current-0`);
const currentScore1 = document.getElementById(`current-1`)

score0.textContent = 0;
score1.textContent = 0;
dice5.classList.add(`hidden`);
currentScore.textContent = 0;
currentScore1.textContent = 0;

let playing, scores, current, activePlayer;
const init = function() {
 playing = true;
 scores = [0,0];
current = 0;
activePlayer = 0;
score0.textContent = 0;
score1.textContent = 0; 
currentScore.textContent = 0;
currentScore1.textContent = 0;
player0El.classList.remove(`winner`);
player1El.classList.remove(`winner`);
player0El.classList.add(`active`);
player1El.classList.remove(`active`)

}

const switchPlayer = function() {
  document.getElementById(`current-${activePlayer}`).textContent= 0;
  current = 0;
activePlayer = activePlayer === 0 ? 1 : 0; 
}

btnroll.addEventListener(`click`, function() 
{
  if(playing) {
  //generate random number
const dice = Math.trunc(Math.random() * 6) + 1;

//display dice
dice5.classList.remove(`hidden`);
dice5.src =`dice-${dice}.png`;
// check for rolled 1
 if (dice !== 1) {
  //add dice to current score
current += dice;
document.getElementById(`current-${activePlayer}`).textContent = current;}
else {
  //switch /to next player
  switchPlayer();
// change later
player0El.classList.toggle(`active`);
player1El.classList.toggle(`active`);

} 
}
})

btnhold.addEventListener(`click`, function() {
  if(playing) {
  //add current score to active player's score
scores[activePlayer] += current;

document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

//check if score is > 100 to win
if(scores[activePlayer] >= 10) {
  playing = false;
  
  dice5.classList.add(`hidden`)
document.querySelector(`.player-${activePlayer}-panel`).classList.add(`winner`)
document.querySelector(`.player${activePlayer}-panel`).classList.remove(`active`)
}
else {
//switch player
switchPlayer();
player0El.classList.toggle(`active`);
player1El.classList.toggle(`active`);
}
  }
})
btnnew.addEventListener(`click`, init )