function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function draw() {
    background(220);

    for (var j = 0; j < 3; j++) {
        var x = j * 100;

        for (var k = 0; k < 3; k++) {
            var y = k * 100;
            noFill();
            stroke(0);
            rect(x, y, 100, 100);
            fill(200, 0, 00);
            noStroke()
            ellipse(x + 50, y, 50, 50);

        }


    }

}
//console.log(x,y);


//try to put the lines that you drawed before inside a square
