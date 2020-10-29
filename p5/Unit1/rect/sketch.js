function setup() {
 createCanvas(800, 800) ;
 rectMode(CENTER) ;

}

function draw() {

  fill(random(225), random(225), random(225), random(225)) ;
  rect(mouseX, mouseY, random(50), random(50)) ;
}

function mouseReleased() {
  saveCanvas('myPicture', '.jpg') ;
}
