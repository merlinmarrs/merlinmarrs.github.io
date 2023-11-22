let cave = [];
let spacer;
let threshold = 4;
let passes = 30;

function setup() {
  createCanvas(720, 720);

  for (let x = 0; x < width; x++) {
    
    cave[x] = []; // create nested array
    
    for (let y = 0; y < height; y++) {

     let r = int(random(0,2)); // Returns a pseudo-random integer between 0 and 1.
      
          if(r == 1)
          {            
              cave[x][y] = 1;
          }
          else
          {
              cave[x][y] = 0;
          }     
    }
  }
  
  for(let z = 0; z < passes; z++){
    for (let x = 1; x < (width-1); x++) {
    for (let y = 1; y < (height-1); y++) {
      
                        let a  = cave[x][y]; // initialize the neighbouring pixels in a 3x3 grid
                        let b  = cave[x][y+1];
                        let c  = cave[x][y-1];
                        let d  = cave[x-1][y];
                        let e  = cave[x-1][y+1];
                        let f  = cave[x-1][y-1];
                        let g  = cave[x+1][y];
                        let h  = cave[x+1][y+1];
                        let i  = cave[x+1][y-1];
                       
     let total = a + b + c + d + e + f + g + h + i;
                       
       if (total > threshold)
        {
          cave[x][y]= 0;
        }
                       
        else 
        {
          cave[x][y]= 1;
        }
    }
    }
    }
  
  spacer = 10;
  noLoop(); // Run once and stop
}


function draw() {
  background(255);

  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {

         if(cave[x][y] == 1)
        {    
           stroke(0); // visible dot
           strokeWeight(8); // Make the points 10 pixels in size
           point(x, y);
         }
      else{
     stroke(255); // invisible dot
     point(x, y);
      }

    }
  }
  

}

function mouseClicked() {
  setup();
  draw();
}
