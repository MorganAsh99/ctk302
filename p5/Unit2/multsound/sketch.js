let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/son.mp3");
  song2 = loadSound("assets/drop.mp3");
  song3 = loadSound("assets/green.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      text("listen to song 1", width / 2, height / 2)
      break;

    case 2:
      song2.play();
      state = 3
      break;

    case 3:
      text("listen to song 2", width / 2, height / 2)
      break;

    case 4:
      song3.play();
      state = 5
      break;

    case 5:
      text("listen to song 3", width / 2, height / 2)
      break;

  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 5)
    state = 0;
    song1.pause();
    song2.pause();
    song3.pause();
}
