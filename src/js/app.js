const counter = document.querySelector('.counter');
const field = document.querySelector('.field');
const cells = document.querySelectorAll('.cell');
const goblin = document.createElement('img');
goblin.src = '../static/img/goblin.png';
goblin.classList = 'goblin';

let currPos = 16;
let newPos = 0;
let count = 0;

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
    setTimeout(() => {parnt.style = 'background: white;'}, 100);
  } else {
    count = 0;
    counter.textContent = "0 - You're lose!!!";
    e.target.style = 'background: red;';
    setTimeout(() => {e.target.style = 'background: white;'}, 100);
  }
})
