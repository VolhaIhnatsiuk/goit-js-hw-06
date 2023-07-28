const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text');

function handlerSizeControl(event) {
textEl.style.fontSize = event.currentTarget.value + 'px';
}

inputEl.addEventListener('input', handlerSizeControl)
