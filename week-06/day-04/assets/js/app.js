const picture = [
  {
    title: "First Picture",
    text: "Text about the first picture",
    url: "../assets/first.jpg"
  },
  {
    title: "Second Picture",
    text: "Text about the second picture",
    url: "../assets/second.jpg"
  },
  {
    title: "Third picture",
    text: "Text about the third picture",
    url: "../assets/third.jpg"
  },
  {
    title: "Fourth picture",
    text: "Text about the fourth picture",
    url: "../assets/fourth.jpg"
  },
  {
    title: "Fifth Picture",
    text: "Text about the fifth picture",
    url: "../assets/fifth.jpg"
  },
  {
    title: "Sixth Picture",
    text: "Text about the sixth picture",
    url: "../assets/sixth.jpg"
  }
];

let thumbnails = document.querySelectorAll(".pic");
let currentPic = document.getElementsByClassName("currentPic");
let paragraphs = document.getElementsByTagName("p");
let title = document.getElementsByTagName("h3");
let arrowLeft = document.getElementsByClassName("arrowLeft");
let arrowRight = document.getElementsByClassName("arrowRight");
let counter = 0;

currentPic[0].style.backgroundImage = `url("${picture[0].url}")`;
title[0].textContent = picture[0].title;
paragraphs[0].textContent = picture[0].text;

/* document.querySelector('.pictures').addEventListener('click', (event) => {
    console.log(event.target.innerHTML)
  })
 */

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].style.backgroundImage = `url("${picture[i].url}")`;
  thumbnails[i].onclick = function changeCurrentPic() {
    currentPic[0].style.backgroundImage = thumbnails[i].style.backgroundImage;
    title[0].textContent = picture[i].title;
    paragraphs[0].textContent = picture[i].text;
    counter = i;
  };
}

arrowLeft[0].onclick = function changePictureToLeft() {
  counter--;
  if (counter === -1) {
    counter = picture.length - 1;
    currentPic[0].style.backgroundImage =
      thumbnails[counter].style.backgroundImage;
      title[0].textContent = picture[counter].title;
      paragraphs[0].textContent = picture[counter].text;
  }
  console.log(counter);
  currentPic[0].style.backgroundImage =
    thumbnails[counter].style.backgroundImage;
    title[0].textContent = picture[counter].title;
    paragraphs[0].textContent = picture[counter].text;
};
arrowRight[0].onclick = function changePictureToRight() {
  counter++;
  if (counter === picture.length) {
    counter = 0;
    currentPic[0].style.backgroundImage =
      thumbnails[counter].style.backgroundImage;
      title[0].textContent = picture[counter].title;
      paragraphs[0].textContent = picture[counter].text;
  }
  console.log(counter);
  currentPic[0].style.backgroundImage =
    thumbnails[counter].style.backgroundImage;
    title[0].textContent = picture[counter].title;
    paragraphs[0].textContent = picture[counter].text;
};


function onKeyPress(event) {
    switch (event.keyCode) {
        case 37:
                counter--;
                if (counter === -1) {
                  counter = picture.length - 1;
                  currentPic[0].style.backgroundImage =
                    thumbnails[counter].style.backgroundImage;
                    title[0].textContent = picture[counter].title;
                    paragraphs[0].textContent = picture[counter].text;
                }
                console.log(counter);
                currentPic[0].style.backgroundImage =
                  thumbnails[counter].style.backgroundImage;
                  title[0].textContent = picture[counter].title;
                  paragraphs[0].textContent = picture[counter].text;
            break;
            case 39:
                    counter++;
                    if (counter === picture.length) {
                      counter = 0;
                      currentPic[0].style.backgroundImage =
                        thumbnails[counter].style.backgroundImage;
                        title[0].textContent = picture[counter].title;
                        paragraphs[0].textContent = picture[counter].text;
                    }
                    console.log(counter);
                    currentPic[0].style.backgroundImage =
                      thumbnails[counter].style.backgroundImage;
                      title[0].textContent = picture[counter].title;
                      paragraphs[0].textContent = picture[counter].text;
                break;
            }
        };
document.body.addEventListener('keydown', onKeyPress);
