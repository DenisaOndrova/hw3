const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

emailInput.addEventListener('input', function() {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    emailInput.classList.add('error');
  } else if (!emailValue.includes('@')) {
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  if (emailValue === '' || !emailValue.includes('@')) {
    alert('Invalid email address');
    emailInput.focus();
  } else {
    alert('Thanks for subscribing!');
    form.reset();
  }
});
