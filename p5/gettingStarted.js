let words = ['p5.js', 'JavaScript', 'library', 'creative coding', 'accessible', 'inclusive',
    'artists', 'designers', 'beginners', 'free', 'open-source', 'software', 'tools', 'accessible',
    'everyone', 'metaphor', 'sketch', 'drawing', 'unlimited', 'adobe', 'scripts', 'functionality', 
    'drawing', 'canvas', 'browser', 'sketch', 'objects', 'typography', 'text', 'input', 'video', 'webcam'];

let wordCount = 10;
let bouncingWords = [];

function setup() {
    createCanvas(700, 200);
    textAlign(CENTER);
    font = loadFont('docs/fonts/PPRightGroteskMono-Regular.otf');
    colorMode(RGB);
    noStroke();

    for (let i = 0; i < wordCount; i++) {
        let wordColor = i< wordCount/2 ? color(127, 176, 105) : color(239, 71, 111);
        let wordText = random(words);
        let wordSize = random(10, 42);
        
        textSize(wordSize);
        let textW = textWidth(wordText);
        let textH = wordSize * 1.2;
        
        bouncingWords.push({
            text: wordText,
            x: random(width),
            y: random(height),
            vx: random(-3, 3),
            vy: random(-3, 3),
            size: wordSize,
            color: wordColor,
            width: textW,
            height: textH
        });
    }
}

function draw() {
    background(255);

    for (let w of bouncingWords) {
        w.x += w.vx;
        w.y += w.vy;

        let halfW = w.width / 2;
        let halfH = w.height / 2;
        let left = w.x - halfW;
        let right = w.x + halfW;
        let top = w.y - halfH;
        let bottom = w.y + halfH;

        if (left < 0) {
            w.vx *= -1;
            w.x = halfW;
        } else if (right > width) {
            w.vx *= -1;
            w.x = width - halfW;
        }

        if (top < 0) {
            w.vy *= -1;
            w.y = halfH;
        } else if (bottom > height) {
            w.vy *= -1;
            w.y = height - halfH;
        }

        textSize(w.size);
        fill(w.color);
        text(w.text, w.x, w.y);
    }
}