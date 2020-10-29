var x = 0 ;

function setup() {
  createCanvas(1550, 715);
}

function draw() {
  if (mouseIsPressed){
  background("#16438D");

  //ground
  noStroke()
  fill('black')
  rect(0, 550, 1550, 215)



  //cloud
  fill("gray")
  ellipse(1400, 95, 100, 100)
  ellipse(1300, 95, 90, 90)
  ellipse(1350, 85, 100, 100)
  fill("yellow")
  triangle(1380, 105, 1390, 115, 1385, 200)

  //friend
  fill("#16438D")
  stroke("black")
  strokeWeight(3)
  ellipse(610, 140, 50, 75)

  noStroke()
  fill("black")
  rect(610, 175, 5, 180)
  rect(550, 185, 130, 5)
  rect(580, 355, 70, 5)
  rect(580, 355, 5, 65)
  rect(650, 355, 5, 65)

  //man2
  fill('#848689')
  rect(775, 150, 100, 200)
  rect(735, 150, 175, 20)
  rect(625, 152, 110, 15)
  rect(895, 150, 15, 110)
  rect(785, 350, 15, 110)
  rect(850, 350, 15, 110)
  ellipse(825, 120, 50, 75)
  fill('red')
  ellipse(815, 110, 9, 9)
  ellipse(830, 110, 9, 9)
  fill('black')
  rect(775, 320, 100, 50)
  rect(815, 130, 15, 3)
  fill('#484B50')
  rect(785, 450, 15, 10)
  rect(850, 450, 15, 10)

} else {
  noStroke()
  background('#6093C7');

  //ground
    fill('#48644F')
    rect(0, 500, 1550, 215)
    noStroke()

  //cloud
  fill("white")
  ellipse(1400, 95, 100, 100)
  ellipse(1300, 95, 90, 90)
  ellipse(1350, 85, 100, 100)
}

push();
translate(x, 0);
avatar();
x = x + 3
pop();
if (x>width){
  x = -600
}

}
