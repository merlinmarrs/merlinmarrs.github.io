var radius = 150;
var angle = 0;
var speed = 200;
var centerX = 200;
var centerY = 200;
var t;

let slider;

function setup() { 
  
    slider = createSlider(0, 360);
  slider.position(10, 10);
  slider.style('width', '80px');
  
    createCanvas(400, 400);
    background(220);
    t = 10;
}

function draw() { 
  
  if(speed !=slider.value()) {
    background(220);
  }
  speed = slider.value();

 t++
  //ellipse(centerX, centerY, 10, 10);
  
    var x = centerX + radius * cos(angle-t);
	var y = centerY + radius * sin(angle+t);
  
    strokeWeight(3);
    point(x, y);

  angle = angle + speed;
}