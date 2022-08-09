const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
let timerId = null;

buttonStartEl.addEventListener('click', onClickStart);
buttonStopEl.addEventListener('click', onClickStop);

function onClickStart() {
  buttonStartEl.toggleAttribute('disabled');
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop() {
  clearInterval(timerId);
  buttonStartEl.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
