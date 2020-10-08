let state = 0;
var img1, img2, img3;
var mic;
var vol;
let timer = 0;
var x=0;

function setup() {
  createCanvas(1200, 650);
  textSize(20);
  textAlign(CENTER);
  img1 = loadImage('assets/standing.png');
  img2 = loadImage('assets/laying.png');
  img3 = loadImage('assets/sleeping.png');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      noStroke();
      fill('#6289EE');
      rect(0, 0, 1200, 650);
      fill('white');
      text("It is almost bed time.\nWill you help put Dream Person to bed?", width / 2, 150)
      fill('pink');
      rect(750, 350, 400, 180);
      fill("white");
      rect(1050, 350, 100, 180);
      text("Click Me", 900, 450);
      image(img1, 200, 200, 250, 380);
      break;

    case 1:
      background('#1342B8');
      fill("white");
      text("They are in bed!\nWill you sing them to sleep?", width / 2, 150);
      fill('pink');
      rect(750, 350, 400, 180);
      fill("white");
      rect(1050, 350, 100, 180);
      image(img2, 735, 300, 380, 250);
      fill('white');
      stroke(7);
      rect(500, 600, 200, 20);
      text("Progress", width /2, 580);
      fill('red');
      rect(300 + x, 600, 200, 20);
      noStroke();
      fill("#1342B8");
      rect(300, 550, 200, 100);
      fill('white');
      text("volume " + vol, 100, 60);
      break;

    case 2:
      background('#0E2562');
      fill("white");
      text("ZzzZzzZzzZ", width / 2, 150);
      fill('pink');
      rect(750, 350, 400, 180);
      fill("white");
      rect(1050, 350, 100, 180);
      image(img3, 735, 300, 380, 250);
      timer = timer + 1
      if (timer > 500) {
        state = 3;
        timer = 0;
      }
      break;

    case 3:
      background('white')
      text("state 3", width / 2, height / 2)
      break;
  }

  if (vol > .01 && (vol < .10)) { // if the volume is LOUD?
    // do something
    x = x + 20;
  }

}

function mouseReleased() {
  if((mouseX>750) && (mouseX<1150) && (mouseY>350) && (mouseY<530)){
   state = state + 1;
}
if (state > 3) {
  state = 0;
}
}
function touchStarted() {
  getAudioContext().resume();
}
