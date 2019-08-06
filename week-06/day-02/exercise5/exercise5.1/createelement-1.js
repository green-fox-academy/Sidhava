const listElement1 = document.createElement('li');
listElement1.textContent = 'The Green Fox';

const listElement2 = document.createElement('li');
listElement2.textContent = 'The LampLighter';

const heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';

const image = document.createElement('img');
image.setAttribute('src', 'https://www.security.land/wp-content/uploads/2018/07/random-deep-web-episode.jpg.webp');

console.log(listElement1);
console.log(listElement2);
console.log(heading);
console.log(image);

document.querySelector('.asteroids').appendChild(listElement1);
document.querySelector('.asteroids').appendChild(listElement2);
document.querySelector('.container').appendChild(heading);
document.querySelector('.container').appendChild(image);

