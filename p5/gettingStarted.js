let words = ['p5.js', 'JavaScript', 'library', 'creative coding', 'accessible', 'inclusive',
    'artists', 'designers', 'beginners', 'free', 'open-source', 'software', 'tools', 'accessible',
    'everyone', 'metaphor', 'sketch', 'drawing', 'unlimited', 'adobe', 'scripts', 'functionality', 
    'drawing', 'canvas', 'browser', 'sketch', 'objects', 'typography', 'text', 'input', 'video', 'webcam'];

let wordCount = 6;
let bouncingWords = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    font = loadFont('docs/fonts/PPRightGroteskMono-Regular.otf');
    colorMode(RGB);
    noStroke();

    // Remove duplicates
    let uniqueWords = [...new Set(words)];

    // Shuffle uniqueWords (Fisher–Yates)
    for (let i = uniqueWords.length - 1; i > 0; i--) {
        let j = floor(random(i + 1));
        [uniqueWords[i], uniqueWords[j]] = [uniqueWords[j], uniqueWords[i]];
    }

    for (let i = 0; i < wordCount; i++) {
        let wordColor = i < wordCount / 2 ? color(127, 176, 105) : color(239, 71, 111);
        let wordText = uniqueWords[i];
        let wordSize = random(10, 42);

        textSize(wordSize);
        let textW = textWidth(wordText);
        let textH = wordSize * 1.2;

        bouncingWords.push({
            text: wordText,
            x: random(textW / 2, width - textW / 2),
            y: random(textH / 2, height - textH / 2),
            vx: random([-3, -2, -1, 1, 2, 3]),
            vy: random([-3, -2, -1, 1, 2, 3]),
            size: wordSize,
            color: wordColor,
            width: textW,
            height: textH
        });
    }
}

function draw() {
    background(255);

    // Move words
    for (let w of bouncingWords) {
        w.x += w.vx;
        w.y += w.vy;

        // Bounce off walls
        let halfW = w.width / 2;
        let halfH = w.height / 2;

        if (w.x - halfW < 0) {
            w.vx *= -1;
            w.x = halfW;
        } else if (w.x + halfW > width) {
            w.vx *= -1;
            w.x = width - halfW;
        }

        if (w.y - halfH < 0) {
            w.vy *= -1;
            w.y = halfH;
        } else if (w.y + halfH > height) {
            w.vy *= -1;
            w.y = height - halfH;
        }
    }

    // Collision detection between words
    for (let i = 0; i < bouncingWords.length; i++) {
        for (let j = i + 1; j < bouncingWords.length; j++) {
            let w1 = bouncingWords[i];
            let w2 = bouncingWords[j];

            if (isColliding(w1, w2)) {
                // Simple response: swap velocities
                let tempVx = w1.vx;
                let tempVy = w1.vy;

                w1.vx = w2.vx;
                w1.vy = w2.vy;

                w2.vx = tempVx;
                w2.vy = tempVy;

                // Slightly separate them to avoid sticking
                separateWords(w1, w2);
            }
        }
    }

    // Draw words
    for (let w of bouncingWords) {
        textSize(w.size);
        fill(w.color);
        text(w.text, w.x, w.y);
    }
}

// Check bounding box collision between two words
function isColliding(w1, w2) {
    return !(
        w1.x + w1.width / 2 < w2.x - w2.width / 2 ||
        w1.x - w1.width / 2 > w2.x + w2.width / 2 ||
        w1.y + w1.height / 2 < w2.y - w2.height / 2 ||
        w1.y - w1.height / 2 > w2.y + w2.height / 2
    );
}

// Separate words slightly after collision to prevent sticking
function separateWords(w1, w2) {
    let overlapX = (w1.width / 2 + w2.width / 2) - abs(w1.x - w2.x);
    let overlapY = (w1.height / 2 + w2.height / 2) - abs(w1.y - w2.y);

    if (overlapX < overlapY) {
        // Move horizontally apart
        if (w1.x < w2.x) {
            w1.x -= overlapX / 2;
            w2.x += overlapX / 2;
        } else {
            w1.x += overlapX / 2;
            w2.x -= overlapX / 2;
        }
    } else {
        // Move vertically apart
        if (w1.y < w2.y) {
            w1.y -= overlapY / 2;
            w2.y += overlapY / 2;
        } else {
            w1.y += overlapY / 2;
            w2.y -= overlapY / 2;
        }
    }
}
