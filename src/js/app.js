let currPos = 16;
let newPos = 0;
let cell = document.getElementById('cell_0');

const goblin = document.createElement('img');
goblin.src = '../static/img/goblin.png';

setInterval( () => {
  do {
    newPos = Math.floor(Math.random() * 16);
  } while (newPos == currPos);
  cell = document.getElementById(`cell_${newPos}`);
  cell.appendChild(goblin);
  currPos = newPos;
}, 1000);
