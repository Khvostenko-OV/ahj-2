import goblinImg from '../img/goblin.png';

const maxMiss = 5;
const counter = document.querySelector('.counter');
const missed = document.querySelector('.missed');
const field = document.querySelector('.field');
const cells = document.querySelectorAll('.cell');
const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.classList = 'goblin';

let currPos = 16;
let newPos = 0;
let count = 0;
let miss = 0;

setInterval( () => {
  do {
    newPos = Math.floor(Math.random() * 16);
  } while (newPos == currPos);
  cells[newPos].appendChild(goblin);
  currPos = newPos;
}, 1000);

field.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'goblin') {
    counter.textContent = ++count;
    const parnt = e.target.parentElement;
    parnt.style = 'background: green;';
    setTimeout(() => { parnt.style = 'background: white;' }, 100);
  } else {
    missed.textContent = ++miss;
    e.target.style = 'background: red;';
    setTimeout(() => { e.target.style = 'background: white;' }, 100);
    if (miss === maxMiss) {
      missed.textContent = miss;
      alert(`Game over! Yor're captured ${count} goblins!`);
      count = 0;
      miss = 0;
      counter.textContent = count;
      missed.textContent = miss;
    }
  }
});
