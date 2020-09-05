var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/BOOWIE.ttf");
  f1 = loadFont("assets/Blacklisted.ttf");
  textAlign(CENTER);


  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(25);
  text("The Boredom is the Reason I Started Swimming." , width / 2, height / 2);
  textFont(f1);
  textSize(25);
  text("Its Also the Reason I Started Sinking", width / 2, height / 1.8);


}
