let myState = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (myState) {
    case 0:
      background("white")
      text("case 0", 260, 250)
      break;

    case 1:
      background("grey")
      text("case 1", 260, 250)
      break;

    case 2:
      background("pink")
      text("case 2", 260, 250)
      break;
  }
fill("brown");
rect(10, 10, 50, 25);

}

function mouseReleased() {
  if((mouseX>10) && (mouseX<60) && (mouseY>10) && (mouseY<35)){

  myState++;
  if (myState > 2) {
    myState = 0;
  }
}
}
