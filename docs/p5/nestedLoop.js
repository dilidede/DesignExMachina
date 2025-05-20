let cols, rows;
let marginX, marginTop, marginBottom;
let spacingX, spacingY;
let currentRow, currentCol;

function setup() {
  createCanvas(690, 300);
  noStroke();
  frameRate(2); 

  cols = 4;
  rows = 2;
  marginX = 20;
  marginTop = 100;      // bigger top margin
  marginBottom = 20;    // smaller bottom margin, same as before

  spacingX = (width - 2 * marginX) / cols;
  spacingY = (height - marginTop - marginBottom) / rows;

  currentRow = 0;
  currentCol = 0;
}

function draw() {
  background(240);

  // Draw the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = marginX + j * spacingX + spacingX / 2;
      let y = marginTop + i * spacingY + spacingY / 2;
      let d = min(spacingX, spacingY) * 0.6;

      if (i === currentRow && j === currentCol) {
        fill(210, 116, 174);
      } else if (i === currentRow) {
        fill(243, 213, 231);
      } else {
        fill(231, 105, 33);
      }

      ellipse(x, y, d, d);
    }
  }

  // Show coordinates of the current cell
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(`x = ${currentRow} y = ${currentCol}`, width / 2, marginTop / 2);

  currentCol++;
  if (currentCol >= cols) {
    currentCol = 0;
    currentRow++;
    if (currentRow >= rows) {
      currentRow = 0;
    }
  }
}
