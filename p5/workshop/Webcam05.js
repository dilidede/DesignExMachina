let video;
let particles = [];
let maxParticles = 250;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(80, 60); // risoluzione ridotta per performance
  video.hide();
  background(0);
}

function draw() {
  fill(0, 20);           // sfondo semi-trasparente per trail
  rect(0, 0, width, height);

  video.loadPixels();

  for (let i = 0; i < 10; i++) { // crea nuove particelle a ogni frame
    let x = floor(random(video.width));
    let y = floor(random(video.height));
    let index = (x + y * video.width) * 4;

    let r = video.pixels[index];
    let g = video.pixels[index + 1];
    let b = video.pixels[index + 2];

    let brightness = (r + g + b) / 3;

    if (brightness > 100) {
      let px = map(x, 0, video.width, 0, width);
      let py = map(y, 0, video.height, 0, height);
      particles.push(new Particle(px, py, color(r, g, b)));
    }
  }

  // aggiorna e disegna le particelle
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }

  // limita il numero massimo
  if (particles.length > maxParticles) {
    particles.splice(0, particles.length - maxParticles);
  }
}

class Particle {
  constructor(x, y, c) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.lifespan = 255;
    this.col = c;
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= 2;
  }

  display() {
    fill(red(this.col), green(this.col), blue(this.col), this.lifespan);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}
