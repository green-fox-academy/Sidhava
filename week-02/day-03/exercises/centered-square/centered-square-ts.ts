'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

let middleWidth: number = canvas.width / 2;
let middleHeight: number = canvas.height / 2;
let sizeofSquare: number = 100

ctx.strokeStyle = 'green';
ctx.strokeRect(middleWidth - (sizeofSquare / 2), middleHeight - (sizeofSquare / 2), sizeofSquare, sizeofSquare);

