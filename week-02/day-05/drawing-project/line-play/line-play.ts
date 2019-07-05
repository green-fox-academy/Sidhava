'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

/* function drawLine(x: number, y: number){
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
} */


function drawLine(x: number, y: number){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
}

function drawLine2(x: number, y: number){
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(canvas.width, y);
    ctx.lineTo(x, 0);
    ctx.stroke();
}

for (let i = 0; i < 600; i += 30) {
    drawLine(i, i);
    drawLine2(i, i);
}

