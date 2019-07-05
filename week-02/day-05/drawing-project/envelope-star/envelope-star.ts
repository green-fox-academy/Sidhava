'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE

ctx.translate(canvas.height / 2, canvas.height / 2);


function drawLine(x: number, y: number){
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x, 0);
    ctx.stroke();
}

for (let rotate = 0; rotate <= 270; rotate += 90){
let increase: number = 15;
ctx.rotate(rotate * Math.PI / 180);

for (let i = 300; i > 0; i -= 15) {
    drawLine(i, increase);
    increase += 15;
}
}