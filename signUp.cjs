const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
const tos = document.getElementById('tos');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;
  const errorMessage = document.createElement('div');
  errorMessage.style.color = 'red';

  if (password.value !== passwordRepeat.value) {
    errorMessage.textContent = 'Passwords do not match';
    form.appendChild(errorMessage);
    isFormValid = false;
  }

  if (!tos.checked) {
    errorMessage.textContent = 'You must accept the terms of service';
    form.appendChild(errorMessage);
    isFormValid = false;
  }

  if (isFormValid) {
    form.submit();
  }
});
