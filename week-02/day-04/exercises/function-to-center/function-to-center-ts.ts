'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


function drawLine(x: number, y: number){
    const middleCanvasX: number = canvas.width / 2;
    const middleCanvasY: number = canvas.height / 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(middleCanvasX, middleCanvasY);
    ctx.stroke();
}

for (let i = 0; i <= canvas.width; i += 20) {
    for (let j = 0; j <= canvas.height; j += 20) {
        if (i === 0) {
            drawLine(0, j);
        } else if (j === 0) {   
            drawLine(i, 0);
        } else if (i === canvas.width) {
            drawLine(canvas.width, j);
        } else if (j === canvas.height) {
            drawLine(i, canvas.height);
        }
    }
}