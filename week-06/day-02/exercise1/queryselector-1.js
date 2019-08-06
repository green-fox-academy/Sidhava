let king = document.getElementById("b325").innerHTML;
console.log(king);

let business = document.getElementsByClassName("big")[0].innerHTML;
let lamp = document.getElementsByClassName("big")[1].innerHTML;
let businessLamp = business + " " + lamp;

console.log(businessLamp);

let conceited = document.getElementsByClassName("b326")[0].innerHTML;
let conceitedKing = [king, conceited];

function alertThem(conceitedKing) {
  alert(conceitedKing[0]);
  alert(conceitedKing[1]);
}

alertThem(conceitedKing);

let noBusiness = [king, conceited, lamp];

for (i = 0; i < noBusiness.length; i++) {
    console.log(noBusiness[i]);
};

noBusiness.forEach(element => {
    console.log(element);
})
