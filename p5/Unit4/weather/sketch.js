// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0
var humidity = 0
var name
var img
var cloud
var y = 300;
var z = -200
var font

function setup() {
  createCanvas(800,600);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Browning,MT,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=331c71f531cc8d56805bd267c4778448'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;
  img = loadImage("assets/glacier.jpg");
  cloud = loadImage("assets/cloud.png");
  font = loadFont("assets/font.ttf");

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp ;
  humidity = weather.main.humidity ;
  name = weather.name ;
  textAlign(CENTER);

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      image(img, 0,0,800,600);
      fill('#F6F8F8');
      textSize(70);
      textFont('arial');
      text(temperature, width/2, height/2-10);
      //textSize(100);
    //  textFont(font);
    //  fill("white")
    //  text("Glacier National Park", width/2, height/2 + 260);


      // cloud
    image(cloud, z, 30, 115, 90);
    image(cloud, x, 75, 150, 100);
    image(cloud, y, 15, 100, 75);
      // move the cloud's x position
      x = x + windspeed/5;
      if (x > width) x = 0;
      y = y + windspeed/5;
      if (y > width) y = 0;
      z = z + windspeed/5;
      if (z > width) z = 0;

      break;

  }
}
