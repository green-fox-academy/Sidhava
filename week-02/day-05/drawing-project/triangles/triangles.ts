"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

/* let resolution: number = 20;
let sizeOfTriangles: number = canvas.width / resolution;
let heightOfLittleTriangles: number = sizeOfTriangles * (Math.sqrt(3) / 2);
let heigthOfBigTriangle: number = canvas.width * (Math.sqrt(3) / 2);
let y2StartCrd: number = canvas.width - heigthOfBigTriangle;

function drawLine1(x: number, x2: number, y2: number):void {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawLine2(x: number, x2: number, y2: number):void {
    ctx.beginPath();
    ctx.moveTo(x, canvas.height);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

for (let offset = 0; offset < resolution; offset++) {
    drawLine1(offset * sizeOfTriangles, canvas.width / 2  + (sizeOfTriangles / 2) * offset, y2StartCrd + (heightOfLittleTriangles * offset));
    drawLine2(offset * sizeOfTriangles, canvas.width / 2  - (sizeOfTriangles / 2) * offset, y2StartCrd - (heightOfLittleTriangles * offset));
}
 */

let resolution: number = 40;
let sizeOfTri: number = canvas.width / resolution;
let heightOfTri: number = sizeOfTri * (Math.sqrt(3) / 2);

function drawTriangle(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + sizeOfTri / 2, y - heightOfTri);
  ctx.lineTo(x + sizeOfTri, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

for (let row = 0; row < resolution; row++) {
  for (let col = 0; col <= row; col++) {
    drawTriangle(
      canvas.width / 2 -
        sizeOfTri / 2 +
        sizeOfTri * col -
        (row * sizeOfTri) / 2,
      heightOfTri + row * heightOfTri
    );
  }
}
