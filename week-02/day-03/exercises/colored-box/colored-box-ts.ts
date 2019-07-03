'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(400, 200);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.strokeStyle = 'violet';
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 200);
ctx.stroke();

/* let colorList: string[] = ['red', 'blue', 'yellow', 'orange'];

for (let i = 0; i < colorList.length; i++) {
    ctx.strokeStyle = colorList[i];
    ctx.beginPath()
    ctx.moveTo(i * (i + 5), i * (i + 10));
    ctx.lineTo(i * (i + 10), i * (i + 5));
    ctx.stroke();
} */

