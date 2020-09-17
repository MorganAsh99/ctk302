var x=0, y=0 ;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER) ;
}

function draw() {
  rect(x, 250, 10, 10)
  x = x + 5;
  if(x>width){
    x=0 ;
  }
  text("Fire", y, 200) ;
  y = y + 20;
  if(y>width){
    y=0 ;
  }
}
