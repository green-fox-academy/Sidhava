'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawLines(x, y) {


    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 200);
        ctx.stroke();
        x += x;
        y += y;
    }

}

drawLines(25, 50);