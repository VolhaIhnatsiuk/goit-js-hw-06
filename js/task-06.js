const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', handlerBorderColor);

function handlerBorderColor(event) {
  const inputDataLength = Number(inputEl.dataset.length);
  const inputValueLength = Number(inputEl.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}