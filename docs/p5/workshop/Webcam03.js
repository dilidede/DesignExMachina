let capture;
let stepSize = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width / stepSize, height / stepSize);
  capture.hide();
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(210, 20, 95);
  capture.loadPixels();

  for (let y = 0; y < capture.height; y++) {
    for (let x = 0; x < capture.width; x++) {
      // Flip orizzontale: calcola flippedX
      let flippedX = capture.width - x - 1;
      let index = (flippedX + y * capture.width) * 4;

      let r = capture.pixels[index + 0];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];

      let col = color(r, g, b);
      let h = hue(col);
      let s = saturation(col);
      let br = brightness(col);

      let dx = x * stepSize + random(-2, 2);
      let dy = y * stepSize + random(-2, 2);
      let d = random(6, 12);

      fill(h, s * 0.8, br, 80);
      ellipse(dx, dy, d, d * random(0.6, 1.4));
    }
  }
}
