import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', throttle(saveInput, 500));

  window.addEventListener('load', storageDataInput);

  form.addEventListener('submit', handleSubmitForm);

  function saveInput() {
    const formData = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function storageDataInput() {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      const { email, message } = JSON.parse(storedData);

      form.email.value = email;
      form.message.value = message;
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const emailValue = form.email.value;
    const messageValue = form.message.value;

    localStorage.removeItem('feedback-form-state');

    form.reset();

    console.log('Formularz wysłany', {
      email: emailValue,
      message: messageValue,
    });

    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      const { email, message } = JSON.parse(storedData);

      console.log('Wcześniej zapisane dane', {
        email: email,
        message: message,
      });
    }
  }
});
