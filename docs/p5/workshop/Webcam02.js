let video;

let currentPixelSize = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width / currentPixelSize, height / currentPixelSize);
  video.hide();
  noStroke();
}

function draw() {
  background(0);

  let threshold = 130;
  let pixelSize = 5;

  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let flippedX = video.width - 1 - x;
      let index = (flippedX + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) / 3;
      let col = brightness > threshold ? 255 : 0;

      fill(col);
      rect(x * currentPixelSize, y * currentPixelSize, currentPixelSize, currentPixelSize);
    }
  }
}