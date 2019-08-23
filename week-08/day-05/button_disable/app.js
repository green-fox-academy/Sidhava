"use strict";

let cats = document.getElementsByClassName("cats");
let signup = document.getElementsByClassName("signup");
let inputViktor = document.getElementById("fish");
let inputno = document.getElementById("no");
let fish = document.querySelector("[id = 'fish']");
console.log(fish);

function choose(event) {
  if (event.target.getAttribute("name") === "animal") {
    if (
      event.target.getAttribute("id") === "dog" ||
      event.target.getAttribute("id") === "cat"
    ) {
      signup[0].disabled = false;
    }
  } else if (event.target.getAttribute("name") === "choice") {
    if (event.target.getAttribute("id") === "yes") {
      cats[0].disabled = false;
    }
  } else if (event.target.getAttribute("type") === "submit") {
    alert("Thank you, you've successfully signed up for cat facts");
  }
}

function check(event) {
    if(inputViktor.checked && inputno.checked) {
        signup[0].disabled = false;
        alert('jaofhad');
    }
}

document.querySelector("div").addEventListener("click", choose);
document.querySelector("[type = 'radio']").addEventListener('change', check);

