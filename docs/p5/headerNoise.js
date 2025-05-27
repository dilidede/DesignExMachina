let noiseLevel = 60;
let noiseScale = 0.02;
let circleCounter = 0;
let direction = 1;

function setup() {
  createCanvas(800, 400);
  frameRate(12);
}

function draw(){
    background(255, 255, 250);
    noiseLevel += 0.3 * direction;
    circleCounter = 0
    let dist_from_mouse = 40;
    let stepSize = 20;

    for (let y = stepSize; y < height; y += stepSize) {
        for (let x = stepSize; x < width; x += stepSize) {
            let noiseTimeSpeed = 0.05;
            let nx = noiseScale * x;
            let ny = noiseScale * y;
            let nt = noiseTimeSpeed * frameCount;

            let c = noiseLevel * noise(nx, ny, nt);

            if (c > 50) {
                noStroke();
                let colorChoice = (random(0,1));
                if (colorChoice < 0.6) {
                    fill(127, 176, 105); //green
                } else {
                    fill(239, 71, 111); //red
                }

                //never touch circles
                let distX = abs(mouseX - x);
                let distY = abs(mouseY - y);
                let xnew = x;
                let ynew = y;
                if (distX < dist_from_mouse && distY < dist_from_mouse) {
                    let sign = -1;
                    if (random(0,1) >= 0.5) sign = 1; else sign = -1;
                    xnew += (dist_from_mouse * random(1,2)) * sign;
                    if (random(0,1) >= 0.5) sign = 1; else sign = -1;
                    ynew += (dist_from_mouse * random(1,2)) * sign; 
                }
                if (distX > dist_from_mouse || distY > dist_from_mouse) {
                    circle(x, y, stepSize);
                    circleCounter++;
                }
            }
        }
    }

    if (circleCounter >= 500) {
        direction = -1;
    } else if (circleCounter <= 250) {
        direction = 1;
    }

}