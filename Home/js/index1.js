// Selecting the login and signup modals
const loginModal = document.querySelector('.login-modal');
const signupModal = document.querySelector('.signup-modal');

// Selecting the login and signup buttons
const loginButton = document.querySelector('.login-button');
const signupButton = document.querySelector('.signup-button');

// Selecting the close buttons for the modals
const closeButtons = document.querySelectorAll('.close');

// Selecting the login and signup forms
const loginForm = document.querySelector('.login-modal form');
const signupForm = document.querySelector('.signup-modal form');

// Function to open the login modal when login button is clicked
loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Function to open the signup modal when signup button is clicked
signupButton.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Function to close the modals when the close button is clicked
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});

// Function to submit the signup form data to the server
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting

  const formData = new FormData(signupForm);

  fetch('amtechregistration.php', {
    method: 'POST',
    body: formData
  }).then((response) => {
    if (response.ok) {
      // If the response is successful, redirect to the chat page
      window.location.href = 'chat.html';
    } else {
      // If the response is not successful, show an error message
      console.log('Error submitting form');
    }
  });
});

// Function to submit the login form data to the server
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting

  const formData = new FormData(loginForm);

  fetch('login.php', {
    method: 'POST',
    body: formData
  }).then((response) => {
    if (response.ok) {
      // If the response is successful, redirect to the chat page
      window.location.href = 'chat.html';
    } else {
      // If the response is not successful, show an error message
      console.log('Error submitting form');
    }
  });
});
