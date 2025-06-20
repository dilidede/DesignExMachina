let video;
let styleIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  textSize(12);
  fill(255);
  noStroke();
  frameRate(20); // per ASCII
}

function draw() {
  background(0);
  video.loadPixels();
  const chars = '@%#*+=-:. '; // scala ASCII
  let step = 8;
  textSize(step);
  fill(255);
  noStroke();

  for (let y = 0; y < video.height; y += step) {
    for (let x = 0; x < video.width; x += step) {
      let flippedX = video.width - (x + step);  // flip correctly aligned with step size
      let i = (flippedX + y * video.width) * 4;
      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];
      let bright = (r + g + b) / 3;
      let charIndex = floor(map(bright, 0, 255, chars.length - 1, 0));
      text(chars.charAt(charIndex), x, y + step);
    }
  }
}