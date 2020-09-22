let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
}

function draw() {

  switch (state) {
    case 0:
    background('red');
    text("state 0", width/2, height/2)

    break ;

    case 1:
    background('green')
    text("state 1", width/2, height/2)
    break ;

    case 2:
    background('blue')
    text("state 2", width/2, height/2)
    break ;

    case 3:
    background('white')
    text("state 3", width/2, height/2)
    break ;
  }
}

function mouseReleased(){
  state = state + 1 ;
  if(state>3){
    state = 0 ;
  }
}
