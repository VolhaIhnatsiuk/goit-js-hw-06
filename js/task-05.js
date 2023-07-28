const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const handlerInput = (event) => {
    outputName.textContent = inputName.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};

inputName.addEventListener('input', handlerInput);