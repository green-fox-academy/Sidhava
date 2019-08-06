let array = document.querySelectorAll('p');
console.log(array);
array[2].innerHTML = array[3].innerHTML;
array[1].innerHTML = array[3].innerHTML;
array[0].innerHTML = array[3].innerHTML;

/* for (i = 1; i < array.length; i++) {
    let text = array[i-1].innerHTML = array[i].innerHTML;
    console.log(text);

} */