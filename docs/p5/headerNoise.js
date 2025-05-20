let noiseLevel = 40;
let noiseScale = 0.03;
let circleCounter = 0;
let direction = 1;

function setup() {
  createCanvas(800, 400);
}

function draw(){
    background(255)
    noiseLevel += 0.2 * direction;
    circleCounter = 0
    let dist_from_mouse = 40;
    let stepSize = 5;

    for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
            let nx = noiseScale * x;
            let ny = noiseScale * y;
            let nt = noiseScale * frameCount;

            let c = noiseLevel * noise(nx, ny, nt);

            if (c > 50) {
                noStroke();
                let colorChoice = (random(0,1));
                if (colorChoice < 0.6) {
                    fill(210, 116, 174);
                } else {
                    fill(231, 105, 33);
                }
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
                    circle(x, y, 20);
                    circleCounter++;
                }
            }
        }
    }

    if (circleCounter >= 2000) {
        direction = -1;
    } else if (circleCounter <= 250) {
        direction = 1;
    }

}
