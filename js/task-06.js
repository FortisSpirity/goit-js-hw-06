const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const inputValue = inputEl.value;
  const validLength = inputEl.dataset.length;

  if (inputValue.length === Number(validLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
