var mic;
var vol;
var c = 'pink';
let state = 0;

function setup() {
  createCanvas(800, 800);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}

//just becuase
function draw() {
  background(c);
  fill('white');
  rect(300, 100, 200, 600);

  ellipse(width / 2, height / 2, 150, 150);
  ellipse(width / 2, height / 2 - 170, 150, 150);
  ellipse(width / 2, height / 2 + 170, 150, 150);
  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  switch (state) {
    case 0:
      text("Too Quiet", width / 2, height / 2)
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;

    case 1:
      text("Too Loud", width / 2, height / 2)
      fill("red");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;

    case 2:
      text("Quiet", width / 2, height / 2)
      fill('Grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill("green");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;



    case 3:
      text("Loud", width / 2, height / 2)
      fill("grey");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill("yellow");
      ellipse(width / 2, height / 2, 150, 150);
      fill("grey");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      break;
  }
  // check how loud the input is

  if (vol < .01) { // if the volume is LOUD?
    // do something
    state = 0;
  }

  if (vol > .01 && (vol < .10)) { // if the volume is LOUD?
    // do something
    state = 2;
  }

  if (vol > .10 && (vol < .20)) { // if the volume is LOUD?
    // do something
    state = 3;
  }

  if (vol > .20) { // if the volume is LOUD?
    // do something
    state = 1;
  }

// extra stuff for debugging
textSize(18);
text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
