const D = 800
const s = 5;

const t = D / 8;
const b = 7 * t;
const c = D / 2;

let i = 0;
let blue = true;

function setup() 
{
    createCanvas(D, D);
    frameRate(30);
    background(0);
}

function draw() 
{
    if (blue) {
        stroke(c - t - i, i, 255);
        blue = false;
    } else {
        stroke(255, i, c - t - i);
        blue = true;
    }
    if (i > c - t) {
        noLoop();
    }
    line(c, t + i, c + i, c);
    line(c - i, c, c, t + i);
    line(c, b - i, c - i, c);
    line(c + i, c, c, b - i);
    i += s;
}