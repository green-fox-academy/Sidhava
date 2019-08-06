const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];

let listElement = document.querySelector('li');
document.querySelector('.asteroids').removeChild(listElement);

for (i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid === true) {
        const listElement1 = document.createElement('li');
        listElement1.textContent = planetData[i].content;
        listElement1.setAttribute('class', planetData[i].category);
        document.querySelector('.asteroids').appendChild(listElement1);
    }
}
