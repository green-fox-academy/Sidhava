let emptyListElements = document.querySelectorAll('li');
let fillTheEmptyListWithThese = ['apple', 'banana', 'cat', 'dog'];

for (i = 0; i < emptyListElements.length; i++) {
    emptyListElements[i].textContent = fillTheEmptyListWithThese[i];
}

document.querySelector('ul').setAttribute('class', 'ulbackground');
