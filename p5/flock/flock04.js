let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Inizializza 10 cerchi con parametri di Perlin noise casuali
  for (let i = 0; i < 10; i++) {
    circles.push({
      xOff: random(1000),
      yOff: random(1000),
      size: random(20, 50),
      color: color(random(255), random(255), random(255), 150)
    });
  }
}

function draw() {
  background(30, 30, 30, 30); // leggero effetto scia

  for (let c of circles) {
    let x = noise(c.xOff) * width;
    let y = noise(c.yOff) * height;

    fill(c.color);
    ellipse(x, y, c.size);

    // Incrementa i valori di offset per il movimento
    c.xOff += 0.005;
    c.yOff += 0.005;
  }
}
