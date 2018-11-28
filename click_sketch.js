//for mouse click makes a larger circle

    function setup() {
	createCanvas(200,200);
	background(100);
}

function draw() {
	background(150,150,150);
	//	fill(0,90,90);
		//	ellipse(width/2,height/2, 30);
	if (mouseIsPressed === true) {
		ellipse(width/2,height/2, 50);
	} 
	else { 
		fill(120,90,90);
		ellipse(width/2,height/2, 10);
	}
}