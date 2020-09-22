let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
      background("purple");
      text("Why do skeleton\'s \n have low self-esteem?", 250, 250);
      break;

    case 1:
      background("orange");
      text("They have no body to love!", 250,250)
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
