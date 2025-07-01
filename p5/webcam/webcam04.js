let video;
let stepSize = 10;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / stepSize, height / stepSize);
  video.hide();
  noStroke();
  frameRate(12);
}

function draw() {
  background(255);
  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) / 3;
      let angle = noise(x * 0.05, y * 0.05, frameCount * 0.01) * TWO_PI * 2;
      let len = map(brightness, 0, 255, 2, 10);

      push();
      // Flip horizontally by subtracting x from video.width - 1
      translate((video.width - 1 - x) * stepSize, y * stepSize);
      rotate(angle);
      strokeWeight(4);
      stroke(r, g, b, 180);
      line(-len / 2, 0, len / 2, 0);
      pop();
    }
  }
}
