var lives = 3;
var score = 0;

document.getElementById('clickboba').onclick = function changeposition() {
  document.getElementById('clickboba').innerHTML = Math.floor(Math.random() * 1000);
  getRandomPosition();
}


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



/*
onEvent("start_button", "click", function() {
  setScreen("game_screen");
  score = 0;
  setText("total_score", score);
  lives = 3;
  setText("number_lives", lives);
});
var score = 0;
onEvent("banana", "click", function() {
  score = score + 1;
  setText("total_score", score);
  setPosition("banana", randomNumber(50,280), randomNumber(50, 350));
  if (score==10) {
    setScreen("win_screen");
    setText("win_label", "You win!!!");
  }
});
onEvent("playAgain_button", "click", function() {
  setScreen("welcome_screen");
});
onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen");
  score = 0;
  setText("total_score", score);
  lives = 3;
  setText("number_lives", lives);
});


var lives = 3;
onEvent("image1", "click", function(){
lives = lives-1 ;
setText("number_lives", lives);
if (lives == 0) {
  setScreen("lose_screen");
  setText("lose_label", "You Lose!!!");
}
});

*/
