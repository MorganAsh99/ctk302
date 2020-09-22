let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("red")
      text("What is a ghost\'s favorite fruit?", width / 2, height / 2, 350, 150);
      timer = timer + 1
      if (timer > 200) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background("blue")
      text("Booberries!", width / 2, height / 2, 350, 150);
      break;
  }
}
