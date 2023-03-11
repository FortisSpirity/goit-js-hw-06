const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
