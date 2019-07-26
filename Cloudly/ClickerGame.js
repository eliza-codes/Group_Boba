var lives = 3;
var score = 0;
var finish = false;
var timelimit = 60;
displayScore(score);
timer(0);


function displayLives(lives) {
	livecount.innerHTML = " LIVES: " + lives;
}

function timer(time) {
	if (finish == false){
	timercount.innerHTML = "TIMER: " + Math.ceil(timelimit - time);
	}
}

/*for (score = 0; score < 150; score++){
  displayScore(score);
  console.log(score);
} */

function displayScore(score) {
	scorecount.innerHTML = " SCORE: " + score;
}
/*
function onMouseDown(event){
	var mouse = event.point;
	console.log("x equals = " + mouse.x + " y equals = " + mouse.y);
	if(mouse.x >= 30 && mouse.x <= 90 && mouse.y >= path.position.y-30 && mouse.y <= path.position.y+30){
		score++;
		displayScore(score);
		path.remove();
	} else if(mouse.x >= 70 && mouse.x <= 130 && mouse.y >= c1.position.y-70 && mouse.y <= c1.position.y+70){
		score++;
		displayScore(score);
		c1.remove();
	}	

	
}
*/

var boba = 150;

var path = new Path.Circle({
	center: [60, 60],
	radius: 30,
	fillColor: "#000000",
	strokeColor: 'black'
});



function onMouseDown(event) {
	//var mouse = event.point;
	if (finish == false) {
		for (var i = 0; i < boba; i++) {
			var item = project.activeLayer.children[i];

			if (event.point.x >= item.position.x - 30 && event.point.x <= item.position.x + 30 && event.point.y >= item.position.y - 30 && event.point.y <= item.position.y + 30) {
				score++;
				displayScore(score);
				item.position = [1500, 10];
			}
			else {
				lives--;
			}
		}
	}

}




/*
function onFrame(event) {
	
		path.position.y += path.bounds.height / 20;
		if (path.bounds.top > view.size.height) {
			path.position.y = -path.bounds.height;
		}
		c1.position.y += c1.bounds.height / 20;
		if (c1.bounds.top > view.size.height) {
			c1.position.y = -c1.bounds.height;
		}
		
} 
*/


var symbol = new Symbol(path);


for (var i = 0; i < boba; i++) {

	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	//placedSymbol.scale(i / 2);
}

function onFrame(event) {
	timer(event.time);
	if (event.time >= timelimit) {
		finish = true;
	}
	if (finish == false) {
		for (var i = 0; i < boba; i++) {
			var item = project.activeLayer.children[i];
			item.position.y += item.bounds.height / 20;

			if (item.bounds.top > view.size.height) {
				item.position.y = -item.bounds.height;
			}
		}
	}
}


