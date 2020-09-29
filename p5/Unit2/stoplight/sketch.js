let state = 0;
let timer = 0;
let x = 0;
let velocity = 10;

function setup() {
  createCanvas(800, 800);
  textSize(24);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(100);
  fill("yellow");
  rect(width / 2, height / 2, 200, 600);

  ellipse(width / 2, height / 2, 150, 150);
  ellipse(width / 2, height / 2 - 170, 150, 150);
  ellipse(width / 2, height / 2 + 170, 150, 150);

  fill("blue");
  rect(x, 750, 75, 20);
  x = x + velocity ;
  if(x>width){
    x=0
  }

  switch (state) {
    case 0:
      text("state 0", width / 2, height / 2)
      fill("red");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 0;
      break;

    case 1:
      text("state 1", width / 2, height / 2)
      fill('Grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill("green");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10;
      break;



    case 2:
      text("state 2", width / 2, height / 2)
      fill("grey");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("yellow");
      ellipse(width / 2, height / 2, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 5;
      break;


  }

  timer = timer + 1
  if (timer > 100) {
    timer = 0;
    state = state + 1;
    if (state > 2)
      state = 0;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 3) {
    state = 0;
  }
}
