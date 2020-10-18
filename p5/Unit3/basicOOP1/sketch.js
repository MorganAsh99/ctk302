let myCar1 ;
let myCar2 ;
let myCar3 ;

function setup() {
  createCanvas(500, 500);
  myCar1 = new Car() ;
  myCar2 = new Car() ;
  myCar3 = new Car() ;
  rectMode(CENTER) ;
}

function draw() {
  background('white');
  myCar1.display() ;
  myCar2.display() ;
  myCar1.move() ;
  myCar2.move() ;
  myCar3.display() ;
  myCar3.move() ;
}

class Car {

  constructor(){
    // attributes
    //this.x = random(width) ;
    //this.y = random(height) ;
    this.pos = createVector(random(width), random(height)) ;
    this.vel = createVector(random(-5, 5), random(-5, 5)) ;
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.w = random(40, 70) ;
    this.h = random(40, 70) ;
  }
  //methods
  display(){
    fill(this.r, this.g, this.b) ;
    rect(this.pos.x, this.pos.y, 50, 25) ;
    ellipse(this.pos.x + 15, this.pos.y + 10, 10) ;
    ellipse(this.pos.x - 15, this.pos.y + 10, 10) ;
    }
  move(){
    this.pos.add(this.vel);
  //  this.pos.x = this.pos.x + 1 ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;
  }
}
