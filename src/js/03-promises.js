import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css"

const submitButtonEl = document.querySelector('button');
const inputDelay = document.querySelector('input[name=delay]');
const inputStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');

submitButtonEl.addEventListener('click', makePromises);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
              } else {
        reject({ position: position, delay: delay });
       
      }
    }, delay);
  });
  return promise;
}

function makePromises(event) {

  event.preventDefault();
  if (inputDelay.value <= 0 || inputStep.value <= 0 || inputAmount.value <= 0) {
    Notify.warning('Enter a positive number');
    return;
  }

  let currentDelay = Number(inputDelay.value);

  for (let i = 0; i < Number(inputAmount.value); i += 1) {
    promise = createPromise(i + 1, currentDelay);
    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += Number(inputStep.value);
  }
}
