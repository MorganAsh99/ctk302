let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background("red")
      text("state 0", width / 2, height / 2)

      timer = timer + 1
      if (timer > 200) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background("blue")
      text("state 1", width / 2, height / 2)
      break;
  }
}
