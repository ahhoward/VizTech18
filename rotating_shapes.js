var x;
//make it circle the center
function setup() {
  createCanvas(400,400);
}


function draw() {
  background(200);
 translate(width/2,height/2)

rotate(frameCount/50);    
    
square(0);

scale(1.8);
square(18,12);
    
scale(1.8);
square(20,19);

scale(2);
square(14,9);
    
    
}

  function square(amount,x) {
   push();
    rectMode(CENTER);
    noFill()
    translate(0, amount);
    rotate(frameCount/x);
    fill(300);
	rect(0,0,5,5);
    pop();  
  }
     

/*
function setup() {
  createCanvas(400,400);
}


function draw() {
  background(180);
    translate(width/2,height/2)

	//arm
	rectMode(CORNER);
	fill(300,10,300);
    rotate(frameCount/30);
    rect(0,-5,90,10);
       
    translate(90,0);
    myBox();

    
}
    
function myBox() { 
    rectMode(CENTER); 
    rotate(frameCount/40);
    fill(300);
	rect(0,0,80,80);
//ellipse
    fill(0,0,40);
    ellipse(0,0,10,10);
    
}
*/