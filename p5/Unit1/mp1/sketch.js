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


  //man
  fill('#C6B8B8')
  rect(735, 280, 175, 20)
  rect(735, 280, 15, 110)
  rect(895, 280, 15, 110)
  rect(775, 280, 100, 200)
  rect(785, 450, 15, 110)
  rect(850, 450, 15, 110)
  ellipse(825, 250, 50, 75)
  fill('white')
  ellipse(815, 240, 12, 12)
  ellipse(830, 240, 12, 12)
  fill('blue')
  ellipse(815, 240, 7, 7)
  ellipse(830, 240, 7, 7)
  fill("#613737")
  rect(775, 430, 100, 50)
  fill('black')
  ellipse(800, 565, 45, 15)
  ellipse(850, 565, 45, 15)
  rect(815, 260, 15, 3)
}
}

//background description
// I was a goat last week and now I am not.I have some memories from when I was a goat but not many.
//  I am so so so poor and people think. I am gross and dont want to be around me.Why wont they look into my eyes? I think they would understand.
//  I live in Gullen. I have no home.I can only sleep if the top of my head is pointing North.
//  I fell into a lava pit and I was fine. I want to discover what love is.
