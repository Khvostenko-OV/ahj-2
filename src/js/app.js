const cells = document.querySelectorAll('.cell');
const goblin = document.createElement('img');
goblin.src = '../static/img/goblin.png';

let currPos = 16;
let newPos = 0;

setInterval( () => {
  do {
    newPos = Math.floor(Math.random() * 16);
  } while (newPos == currPos);
  cells[newPos].appendChild(goblin);
  currPos = newPos;
}, 1000);
