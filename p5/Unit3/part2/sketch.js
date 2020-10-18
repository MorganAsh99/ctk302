let cars = [];

function setup() {
  createCanvas(500, 500);
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background('white');
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].move();
  if (cars[i].a <= 0){
    cars.splice(i, 1) ;
  }
}
}

class Car {

  constructor() {
    // attributes
    this.pos = createVector(50, 50);
    this.vel = createVector(random(1,7), random(1, 7));
    this.r = random(255) ;
    this.g = random(255) ;
    this.b = random(255) ;
    this.a = random(200, 255) ;
  }
  //methods
  display() {
    noStroke() ;
    fill(this.r, this.g, this.b) ;
    textSize(random(10,20)) ;
    text('gratz', this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0 ;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0 ;
    // if (this.pos.y < 0) this.pos.y = height ;
  }
}
