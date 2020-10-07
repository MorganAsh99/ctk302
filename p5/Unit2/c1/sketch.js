var mic;
var vol;
var c = 'pink';
let state = 0;
let velocity = 0;
let x = 0;

function setup() {
  createCanvas(600, 600);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}

//just becuase
function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  fill('grey');
  rect(x, 500, 75, 20);
  x = x + velocity ;
  if(x>width){
    x=0
  }

  switch (state) {
    case 0:
      text("Shhh!", width / 2, height / 2)
      velocity = 0;
      break;

    case 1:
      text("QUIET DOWN!", width / 2, height / 2)
      velocity = 10;
      break;

  }
  // check how loud the input is

  if (vol < .10) { // if the volume is LOUD?
    // do something
    state = 0;
  }

  if (vol > .10) { // if the volume is LOUD?
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
