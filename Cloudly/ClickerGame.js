var lives = 3;
var score = 0;

for (lives = 3; lives > -1; lives--) {
  displayLives(lives);
  console.log(lives);
}

function displayLives(lives){
  livecount.innerHTML = " LIVES: " + lives;
}

/*for (score = 0; score < 150; score++){
  displayScore(score);
  console.log(score);
} */

function displayScore(score){
  scorecount.innerHTML = " SCORE: " + score;
}

function onMouseDown(event){
	var mouse = event.downPoint;
	console.log("x equals = " + mouse.x + " y equals = " + mouse.y);
	//return mouse.x;

	
}

var boba = 10;

var path = new Path.Circle({
	center: [0, 0],
	radius: 30,
	fillColor: "#000000",
	strokeColor: 'black'
});

var symbol = new Symbol(path);


for (var i = 0; i < boba; i++) {
	
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	//placedSymbol.scale(i / 2);
}

function onFrame(event) {
	
	for (var i = 0; i < boba; i++) {
		var item = project.activeLayer.children[i];
		item.position.y += item.bounds.height / 20;
		
		if (item.bounds.top > view.size.height) {
			item.position.y = -item.bounds.height;
		}
	}
} 







