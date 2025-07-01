let video;
let cols, rows;
let spacing = 10;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  initializePoints();
  frameRate(12);
}

function initializePoints() {
  points = [];
  spacing = 8;
  cols = floor(width / spacing);
  rows = floor(height / spacing);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let px = x * spacing;
      let py = y * spacing;
      points.push({
        home: createVector(px, py),
        pos: createVector(px, py),
        vel: createVector(0, 0),
        brightness: 0
      });
    }
  }
}

function draw() {
  background(255); // White background
  video.loadPixels();
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    // Flip x coordinate horizontally:
    let x = floor(video.width - 1 - p.home.x);
    let y = floor(p.home.y);

    if (x >= 0 && x < video.width && y >= 0 && y < video.height) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let bright = (r + g + b) / 3;

      p.brightness = bright;

      // Halftone size (black dots): dark = large, bright = small
      let size = map(bright, 0, 255, spacing, 1);

      // Return force
      let homeForce = p.home.copy().sub(p.pos).mult(0.05);
      p.vel.add(homeForce);
      p.vel.mult(0.9);
      p.pos.add(p.vel);

      // Draw only dark-enough dots
      if (bright < 220) {
        noStroke();
        fill(0); // Black dots
        ellipse(p.pos.x, p.pos.y, size, size);
      }
    }
  }
}