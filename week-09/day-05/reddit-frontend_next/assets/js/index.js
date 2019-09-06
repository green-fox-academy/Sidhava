const mainContent = document.querySelector('main');

fetch('/api/posts')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content);