var img1, img2, img3;

function setup() {
  createCanvas(800,800);
  imageMode(CENTER);
  img1 = loadImage("assets/img1.JPG");
  img2 = loadImage('assets/img2.png');
  img3 = loadImage('assets/img3.jpg');
}

function draw() {
//  background(100);

  image(img3, width / 2, height / 2, 250, 350);
  image(img2, width / 2, height / 2 - 300, 450, 200);
  image(img1, width / 2, height / 2 + 300, 450, 200);
}
