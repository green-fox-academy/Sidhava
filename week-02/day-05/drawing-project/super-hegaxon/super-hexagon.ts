"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// hexagon

function hexagon(Xcenter: number, Ycenter: number, size: number): void {
  const numberOfSides: number = 6;

  ctx.beginPath();
  ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

  for (let i = 1; i <= numberOfSides; i += 1) {
    ctx.lineTo(
      Xcenter + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
      Ycenter + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
    );
  }
  ctx.stroke();
}

hexagon(100, 100, 50);

