let rings = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  for (let i = 0; i < 200; i++) {
    rings.push(new Ring(i));
  }
}

function draw() {
  background(10, 10, 30);
  translate(width / 2, height);

  let t = millis() * 0.001; // tempo in secondi

  for (let ring of rings) {
    ring.update(t);
    ring.display();
  }
}

class Ring {
  constructor(index) {
    this.index = index;
    this.angle = random(TWO_PI);
    this.y = -index * 4;
    this.speed = map(index, 0, 200, 0.05, 0.15); // più veloce
    this.noiseOffset = random(1000);
  }

  update(t) {
    this.angle += this.speed;

    // Valore tra 0 e 1 che oscilla nel tempo
    let swapFactor = (sin(t) + 1) / 2;

    // Inversione graduale delle dimensioni
    let smallSize = map(this.index, 0, 200, 20, 200);
    let largeSize = map(this.index, 0, 200, 200, 20);
    this.r = lerp(smallSize, largeSize, swapFactor);

    // Piccola deformazione dinamica
    this.r += sin(this.angle * 2 + this.noiseOffset) * 8;
  }

  display() {
    stroke(150 + this.index, 150, 255 - this.index, 100);
    strokeWeight(map(this.index, 0, 200, 6, 1.5));
    let x = sin(this.angle) * this.r * 0.3;
    ellipse(x, this.y, this.r, this.r * 0.3);
  }
}
