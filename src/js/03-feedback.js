import throttle from 'lodash.throttle';

const formRefs = document.querySelector('.feedback-form');

formRefs.addEventListener('submit', onFormSubmit);
formRefs.addEventListener('input', onTextareaInput);

function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currenTarget);
}

function onTextareaInput(event) {}

// ТОЛЬКО ДЛЯ ТЕКСТАРИИ
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('[name="message"]'),
// };
// const STORAGE_KEY = 'feedback-form-state';
// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// function onFormSubmit(event) {
//   event.preventDefault();

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }
