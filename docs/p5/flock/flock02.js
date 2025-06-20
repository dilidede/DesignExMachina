let x, y;
let tX = 0;  // tempo per il movimento sull'asse x
let tY = 1000; // tempo separato per y (così si muovono indipendentemente)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  fill(0, 50); // colore cerchio
}

function draw() {
  // Posizione determinata dal Perlin noise, mappata all'area del canvas
  x = map(noise(tX), 0, 1, 0, width);
  y = map(noise(tY), 0, 1, 0, height);

  ellipse(x, y, 10, 10);

  // Incremento dei valori temporali per avanzare nel noise
  tX += 0.01;
  tY += 0.01;
}
