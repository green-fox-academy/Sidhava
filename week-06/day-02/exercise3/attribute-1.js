let imageURL = document.querySelector('img').getAttribute('src');
console.log(imageURL);

document.querySelector('img').setAttribute('src', 'https://img.buzzfeed.com/buzzfeed-static/static/2015-09/10/11/campaign_images/webdr15/what-should-be-your-new-favorite-animal-2-18915-1441898721-5_dblbig.jpg');

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

document.getElementsByClassName('this-one')[0].disabled = true;
document.getElementsByClassName('this-one')[0].innerHTML = "don't click me!";

