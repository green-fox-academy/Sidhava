"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function pickColor(colorNumber: number): string {
  let colorOfSquare: string[] = ["red", "green", "blue", "orange"];
  return colorOfSquare[colorNumber];
}

function drawSquare(sizeofSquare: number, color: string) {
  let middleWidth: number = canvas.width / 2;
  let middleHeight: number = canvas.height / 2;
  ctx.strokeStyle = color;
  ctx.strokeRect(
    middleWidth - sizeofSquare / 2,
    middleHeight - sizeofSquare / 2,
    sizeofSquare,
    sizeofSquare
  );
}

for (let i = 0; i < 4; i++) {
  drawSquare(50 * (i + 1), pickColor(i));
}
