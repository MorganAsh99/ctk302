let cars = [];
let f1, f2, f3;
let fonts = [];
let frogPos ;
let state = 0;
let maxCars = 12;
let timer = 0
let img;
let s1;

function preload(){
  s1 = loadSound('assets/lul.wav');

  s1.loop();
  s1.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/this1.otf");
  f2 = loadFont("assets/this2.ttf");
  f3 = loadFont("assets/this3.otf");
  img = loadImage('assets/real.PNG');

  fonts = [f1, f2, f3];

  frogPos = createVector(width/2, height-80);

  // Spawn 20 objects
  for (let i=0 ; i < maxCars ; i++){
  cars.push(new Car()) ;
  rectMode(CENTER);
  textAlign(CENTER);
  }
}

function draw() {
  switch(state){

    case 0:
    //image for welcome
    background(img);
    s1.play();
    textFont(f3);
    textSize(50);
    fill('#D27974');
    text('Hurry, Dream Baby is hungry,\nfeed them before time runs out!', width/2, height/2 - 150);
    textSize(40);
    fill('#EEA39F');
    text('Arrow Keys to Move\nClick to Begin', width/2, height/2 + 10);
    break;

    case 1:
    game();
    timer++;
    if (timer > 1000){
      state=3;
    }
    break;

    case 2:
    background(img);
    textFont(f2);
    textSize(75);
    fill('#D27974');
    text('You did it!', width/2, height/2 - 100);
  noStroke();
  fill('black');
  rect(width/2, height/2 +12*3, 80*3, 2*3);
  rect(width/2 - 7*3, height/2 +55*3, 2*3, 25*3);
  rect(width/2 + 7*3, height/2 +55*3, 2*3, 25*3);
  fill('white')
  arc(width/2 , height/2, 50*3, 35*3, PI, TWO_PI);
  rect(width/2, height/2 + 25*3, 50*3, 50*3);
  fill('black')
  ellipse(width/2 -5*3, height/2, 5*3);
  ellipse(width/2 +5*3, height/2, 5*3);
  stroke('Black');
  fill('black');
  rect(width/2, height/2 + 10*3, 9*3, 2*3);
  noStroke();
  fill('pink')
  ellipse(width/2 - 9*3, height/2 +9*3, 7*3)
  ellipse(width/2 + 9*3, height/2 +9*3, 7*3)
    textSize(40);
    fill('#EEA39F');
    text('Click to Play Again', width/2, height/2 +250);
    break;

    case 3:
    background(img);
    textFont(f1);
    textSize(50);
    fill('#D27974')
    text('You did not feed\nDream Baby fast enough', width/2, height/2 - 200);
    noStroke();
  fill('black');
  rect(width/2, height/2 +12*3, 80*3, 2*3);
  rect(width/2 - 7*3, height/2 +55*3, 2*3, 25*3);
  rect(width/2 + 7*3, height/2 +55*3, 2*3, 25*3);
  fill('white')
  arc(width/2 , height/2, 50*3, 35*3, PI, TWO_PI);
  rect(width/2, height/2 + 25*3, 50*3, 50*3);
  fill('black')
  ellipse(width/2 -5*3, height/2, 6*3);
  ellipse(width/2 +5*3, height/2, 6*3);
  stroke('Black');
  fill('pink');
  ellipse(width/2, height/2 + 10*3, 6*3, 8*3);
  noStroke();
  fill('#68C8FC')
  ellipse(width/2 - 5*3, height/2 +4*3, 2*3, 6*3)
  ellipse(width/2 - 8*3, height/2 +9*3, 2*3, 6*3)
  ellipse(width/2 + 6*3, height/2 +5*3, 2*3, 6*3)
    textSize(35);
    fill('#EEA39F')
    text('Click to Try Again', width/2, height/2 + 250);
    break;
  }

}

function game(){
  background('#5477A0');
  //frog
  noStroke();
   fill('black');
   rect(frogPos.x, frogPos.y +12, 80, 2);
   rect(frogPos.x - 7, frogPos.y +55, 2, 25);
   rect(frogPos.x + 7, frogPos.y +55, 2, 25);
   fill('white')
   arc(frogPos.x , frogPos.y, 50, 35, PI, TWO_PI);
   rect(frogPos.x, frogPos.y + 25, 50, 50);
   fill('black')
   ellipse(frogPos.x -5, frogPos.y, 6);
   ellipse(frogPos.x +5, frogPos.y, 6);
   stroke('black');
   fill('pink');
   ellipse(frogPos.x, frogPos.y + 10, 6, 8);

  // display and move 20 objects
  for (let i = 0; i < cars.length; i++){
    cars[i].display() ;
    cars[i].move() ;

  if (cars[i].pos.dist(frogPos) < 75) {
    cars.splice(i, 1);
  }
  }

  if (cars.length == 0){
    state = 2;
  }

  checkForKeys();
}

function resetTheGame(){
  cars = [];
  timer = 0;
  for (let i=0 ; i < maxCars ; i++){
  cars.push(new Car()) ;
  }
}

function mouseReleased(){
  switch(state){
    case 0:
    state = 1;
    break;

    case 2:
    resetTheGame()
    state = 0;
    break;

    case 3:
    resetTheGame()
    state = 0;
    break;
  }
}


function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

// Car class
class Car {

  // constructor and attributes
  constructor(){
    this.pos = createVector(random(width), random(height)) ;
    this.vel = createVector(random(-5, 5), random(-5, 5)) ;
    this.r = random(75, 250) ;
    this.g = random(50, 180) ;
    this.b = random(50, 160) ;
    this.w = random(40, 60) ;
    this.h = random(50, 70) ;
  }

  // methods

  display(){
    noStroke();
    fill(this.r, this.g, this.b) ;
    arc(this.pos.x, this.pos.y, this.w, this.h, TWO_PI, PI) ;
    arc(this.pos.x + this.w - 10 , this.pos.y, this.w, this.h, TWO_PI, PI) ;
    fill('pink');
    ellipse(this.pos.x, this.pos.y + this.h/2, 4, 9);
    ellipse(this.pos.x + this.w -10, this.pos.y + this.h/2, 4, 9);
    }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
