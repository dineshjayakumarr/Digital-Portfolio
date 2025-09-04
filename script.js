// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form Handling
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  message.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});
