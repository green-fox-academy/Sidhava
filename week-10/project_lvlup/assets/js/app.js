let addPlaylist = document.querySelector('span');
let table = document.querySelectorAll('table');
let tbody = document.querySelectorAll('tbody');

addPlaylist.addEventListener('click', () => {
  if (document.querySelector('input')) {
    return;
  } else {
    let newRow = document.createElement('tr');
    let rowData = document.createElement('td');
    /* let addNewPlaylist = document.createElement('form'); */
    let input = document.createElement('input')
    input.setAttribute('type', 'text');
    tbody[0].appendChild(newRow);
    newRow.appendChild(rowData);
    /* rowData.appendChild(addNewPlaylist); */
    rowData.appendChild(input);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        let inputvalue = input.value;
        rowData.removeChild(input);
        rowData.innerHTML = inputvalue;
      }
    })
  }
});





