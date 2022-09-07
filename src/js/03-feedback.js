import throttle from 'lodash.throttle';

const formRefs = document.querySelector('.feedback-form');
populateTextarea();

formRefs.addEventListener('submit', onFormSubmit);
formRefs.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const resultData = localStorage.getItem('feedback-form-state');

  console.log(JSON.parse(resultData));
  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function onFormInput() {
  const formData = {
    email: formRefs.elements.email.value,
    message: formRefs.elements.message.value,
  };
  const savedData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', savedData);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    const data = JSON.parse(savedMessage);
    formRefs.elements.email.value = data.email;
    formRefs.elements.message.value = data.message;
  }
}

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
