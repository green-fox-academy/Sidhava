'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.


let widthMiddle: number = 600/2;
let heightMiddle: number = 400/2;

/* function drawTarget() { */

ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(widthMiddle, heightMiddle);
ctx.lineTo(400, heightMiddle);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(widthMiddle, heightMiddle);
ctx.lineTo(200, heightMiddle);
ctx.stroke();

ctx.strokeStyle = 'green';

ctx.beginPath();
ctx.moveTo(widthMiddle, heightMiddle);
ctx.lineTo(widthMiddle, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(widthMiddle, heightMiddle);
ctx.lineTo(widthMiddle, 100);
ctx.stroke();

/* } */

