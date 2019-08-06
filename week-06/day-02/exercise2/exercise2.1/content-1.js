let array = document.querySelectorAll('p');
console.log(array);
/* array[2].innerHTML = array[3].innerHTML;
array[1].innerHTML = array[3].innerHTML;
array[0].innerHTML = array[3].innerHTML; */

for (i = array.length - 1; i >= 0; i--) {
    array[i].innerHTML = array[3].innerHTML;

}