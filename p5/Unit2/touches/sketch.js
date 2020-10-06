let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text('Joyce Clement - Birds Punctuate the Days', 5, 22) ;
      break ;

      case 1:
       text("Period", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("One blue egg all summer long", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("Now gone", 5, 22) ;
            // put a picture here
      break ;


  }

}
