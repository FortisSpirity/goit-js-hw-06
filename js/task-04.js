const counter = document.getElementById('counter');
const counterValue = counter.querySelector('#value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let count = 0;

const updateCounterValue = () => {
  counterValue.textContent = count;
};

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count -= 1;
    updateCounterValue();
  }
});

incrementBtn.addEventListener('click', () => {
  count += 1;
  updateCounterValue();
});
