
var M = 0;

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    
    frameRate(30);

}


function draw(){
    background(220);
    
    
    M = M + .01;
    
    randomSeed(23);
    
    for(var i = 1; i<20; i++){
        var inc = random();
        
        var N = noise(i+M+inc) * width;
        line(N, 0, N, height);
        print("For line "+i+" "+(i+M+inc));
        
    }
    print("---");
   
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);

}


