let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(3, 7);
    let blueTone = color(random(100, 150), random(150, 200), random(200, 255), 180);
    let vx = random(-1.5, 1.5);
    let vy = random(-1.5, 1.5);
    circles.push({ x, y, size, blueTone, vx, vy });
  }
}

function draw() {
  background(10, 20, 30, 60); // leggero effetto scia

  // Movimento e disegno cerchi
  for (let c of circles) {
    fill(c.blueTone);
    circle(c.x, c.y, c.size);
    c.x += c.vx;
    c.y += c.vy;

    // rimbalzo dai bordi
    if (c.x < 0 || c.x > width) c.vx *= -1;
    if (c.y < 0 || c.y > height) c.vy *= -1;
  }

  // Controlla le interazioni tra cerchi
  for (let i = 0; i < circles.length; i++) {
    for (let j = i + 1; j < circles.length; j++) {
      let a = circles[i];
      let b = circles[j];
      let d = dist(a.x, a.y, b.x, b.y);

      if (d < 25) {
        // crea un triangolo tra i due cerchi e il punto medio
        let mx = (a.x + b.x) / 2 + random(-5, 5);
        let my = (a.y + b.y) / 2 + random(-5, 5);
        fill(100, 180, 255, 40); // triangolo blu chiaro trasparente
        triangle(a.x, a.y, b.x, b.y, mx, my);
      }
    }
  }
}
