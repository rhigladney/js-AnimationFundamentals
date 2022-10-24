// Import stylesheets
import './style.css';

// Animations are cool! 
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Animations are cool! </h1>`;


noStroke();

// position of the car
var x = 10;

// car body
fill(255, 0, 115);
rect(x, 200, 100, 20);
rect(x + 15, 178, 70, 40);

// wheels
fill(77, 66, 66);
ellipse(x + 25, 221, 24, 24);
ellipse(x + 75, 221, 24, 24);

draw = function() {

  //all lines of code will run on repeat

  background(151, 244, 247);

// position of the car
var x = 281;

// car body
fill(255, 0, 115);
rect(x, 200, 100, 20);
rect(x + 15, 178, 70, 40);

// wheels
fill(77, 66, 66);
ellipse(x + 25, 221, 24, 24);
ellipse(x + 75, 221, 24, 24);

x = x + 10;
};