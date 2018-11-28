/* This program creates fireworks, particles of random colors
eminating from the point of mouse click with a random
lifespan and velocity.
*/

//declares particleSystem object, empty array
var particleSystem = [];

//Creates initial canvas and conditions
function setup(){
/*initializes object called canvas using built-in
function createCanvas that defines the window width and height
*/
	var canvas = createCanvas(windowWidth, windowHeight);

//refresh at the rate of 30 frames per second
	frameRate(30);

    /*defines color mode of HSB (hue saturation brightness)
	and includes all available colors */
    colorMode(HSB, 316, 100, 100, 100);
}


//starts the visible program
function draw(){
 // sets background color as black
		background(0);
/*defines how the pixels will blend with the existing background. Multiplies the inverse value of each existing pixel by the inverse value of each new pixel. The result converges towards 360, white in HSV.*/
   blendMode(SCREEN);
    
    
/*Creates a conditional loop. Initializes i with 
a particlesystem method as the starting value.
The loop will continue as long as i 
is greater than zero (exit function), with each 
loop diminishing by 1 until it reaches the exit 
function and stops making new particles.
*/
    
//initializes for loop with decreasing incrementor
    for(var i=particleSystem.length-1; i>=0; i--){

/*initializes p as a particle system method, with
the element defined by i each loop
			*/
        var p = particleSystem[i];
			
/* Subloop, if  
splice (inserts a value into an existing array).
as long as i>=0, the function will run
*/
       if(p.areYouDeadYet()){
            particleSystem.splice(i, 1);
        }
        
//when i===0, the screen will refresh and show the new particle
        else{
//the screen will update, and redraw pixels as specified by p
           p.update();
           p.draw();
            
        }  
    }
}


/*Prevents program from breaking if the user changes the
canvas size while the program is running
*/
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

/*initializes Particle as a variable with the methods
position, velocity, and hue. Particle variable is created,
continues at the same speed, advances from the previous position, 
is randomly colored, lasts from 20 to 100 frames, and fades at
a random interval
*/

//this. specifies Particle as owner of the following functions
var Particle = function(position, velocity, hue){
//Copy() duplicates the previous loop's particle x & y
	this.position = position.copy();
// duplicates the previous particle's speed & direction 
	this.velocity = velocity.copy();
//Particle is 10px
	this.size = 10;
//Each particle lasts between 20 and 100 frames
    this.lifeSpan = random(20, 100);
//Particle's color randomly set between 15-360, for no black
    this.hue = random(hue+15, hue+15);


/*Creates the particle on the canvas defined above. creates 
10px ellipses with no stroke and the hue defined above 
at maximum shade & brightness. The elipse is located at 
mouse click. Particle is still the owner
*/
	this.draw = function(){
        noStroke();
        fill(this.hue, 100, 100);
        ellipse(this.position.x, 
                this.position.y,
                this.size,this.size);     
    		}
	
//show new Particle iteration at each refresh 
    this.update = function()
		{
//lifespan with incrementor so each iteration is shorter by 1 frame
			this.lifeSpan--;
//the Particle's velocity continues from the current position
        this.position.add(velocity);  
   		 }  
    }

//Defines lifespan of Particle
//If lifeSpan is less than 0, triggers the areYouDeadYet function
    this.areYouDeadYet = function(){
        return this.lifeSpan <= 0;
		}
		
}


/* initializes createMightyParticles. This function randomizes the 
velocity, color, and lifespan of a Particle 
*/
function createMightyParticles(){
//Hue is randombly set between dark orange and bright red, almost the whole spectrum
	var hue = random(20, 200);
	

/*for loop, where i starts at 0, runs until it reaches 200, 
adds 1 each loop. Each loop sets particle's position, radomly sets speed
& direction, at what degree on the circle it moves 
*/
	for(var i=0; i<200; i++){
//initializes particle's position as the point of clicking
        var pos = createVector(mouseX, mouseY);
//initializes velocity of the vel vector at mouseX+1, and mouseY
        var vel = createVector(1,0);
//creates random particle rotation to 360
        vel.rotate(random(0, TWO_PI	));
//randomly multiplies particle's speed & direction  
        vel.mult(random(1, 10));
        
/* After createMightyParticle, calls new Particle function with 
position, velocity, and color.
*/
        var newBorn = new Particle(pos, vel, hue);
/*adds newBorn object to the end of the particleSystem[] array, 
extending the array and allowing multiple ParticleSystems to exist at the same time*/
        particleSystem.push(newBorn);
        
    }
    
}

//when the mouse is clicked, the createMightyParticles function is launched
function mouseClicked(){
    createMightyParticles();
}
