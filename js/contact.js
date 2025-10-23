const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const successMsg = document.querySelector('.success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  successMsg.textContent = '';
  // Reset all errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  if (!nameInput.value.trim()) {
    showError('name', 'Full name is required');
    valid = false;
  }

  if (!emailInput.value.trim() || !/.+@.+\..+/.test(emailInput.value)) {
    showError('email', 'Enter a valid email');
    valid = false;
  }

  if (!subjectInput.value.trim()) {
    showError('subject', 'Subject is required');
    valid = false;
  }

  if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
    showError('message', 'Message must be at least 10 characters');
    valid = false;
  }

  if (valid) {
    const formData = {
      fullName: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    };

    console.log("User submitted data:", formData);

    successMsg.textContent = 'Thank you! Your message has been successfully sent.';
    form.reset();
  }
});

function showError(field, message) {
  document.getElementById(`error-${field}`).textContent = message;
}
