var lives = 3;
var score = 0;

for (lives = 3; lives > -1; lives--) {
  displayLives(lives);
  console.log(lives);
}

function displayLives(lives){
  livecount.innerHTML = " LIVES: " + lives;
}

for (score = 0; score < 1001; score++){
  displayScore(score);
  console.log(score);
}

function displayScore(score){
  scorecount.innerHTML = " SCORE: " + score;
}

 




