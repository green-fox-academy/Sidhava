'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];

let box2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
 [120, 100], [85, 130], [50, 100]]

let x: number = 0;

function drawABox(inputCords: number[][]) {
    ctx.beginPath();
    ctx.moveTo(inputCords[x][0], inputCords[x][1]);
    ctx.lineTo(inputCords[x+1][0], inputCords[x+1][1]);
    ctx.stroke();
}

for (let i: number = 0; i <= box.length; i++) {
    drawABox(box2);
    x = i;
}
