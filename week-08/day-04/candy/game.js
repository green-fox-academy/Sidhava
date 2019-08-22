'use strict';

let button = document.getElementsByClassName('create-candies');
let button1 = document.getElementsByClassName('buy-lollypops');
let candy = document.getElementsByClassName('candies');
let lollypop = document.getElementsByClassName('lollypops');
let candyCounter = 0;
let lollypopCounter = 0;

function createCandy() {
    candyCounter++
    candy[0].textContent = candyCounter;
}

function buyLollyPop() {
    if (candyCounter >= 100) {
        candy[0].textContent = candyCounter -= 100;
        lollypopCounter+= 1;
        lollypop[0].textContent = lollypopCounter;

    }
}

button[0].addEventListener('click', createCandy);
button1[0].addEventListener('click', buyLollyPop);

