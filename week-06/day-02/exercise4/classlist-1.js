let paragraphs = document.querySelectorAll('p');

if (paragraphs[3].classList.contains('dolphin')) {
    paragraphs[0].textContent = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
    paragraphs[2].textContent = 'dog';
}

paragraphs[0].classList.add('red');

paragraphs[1].style.borderRadius = '1%';