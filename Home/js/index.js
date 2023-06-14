// Get the modal elements
var signupModal = document.querySelector('.signup-modal');
var loginModal = document.querySelector('.login-modal');


// Get the button elements
var signupButton = document.querySelector('.signup');
var loginButton = document.querySelector('.login');

// Get the close elements
var signupClose = document.querySelector('.signup-modal .close');
var loginClose = document.querySelector('.login-modal .close');

// Get the form elements
var signupForm = document.querySelector('#signup-form');
var loginForm = document.querySelector('#login-form');

// Function to show the signup modal
function showSignupModal() {
  signupModal.style.display = 'block';
}

// Function to show the login modal
function showLoginModal() {
  loginModal.style.display = 'block';
}

// Function to hide the signup modal
function hideSignupModal() {
  signupModal.style.display = 'none';
}

// Function to hide the login modal
function hideLoginModal() {
  loginModal.style.display = 'none';
}


// Listen for button clicks to open modals
signupButton.addEventListener('click', function() {
  signupModal.style.display = 'block';
});

loginButton.addEventListener('click', function() {
  loginModal.style.display = 'block';
});

// Listen for close clicks to close modals
signupClose.addEventListener('click', function() {
  signupModal.style.display = 'none';
});

loginClose.addEventListener('click', function() {
  loginModal.style.display = 'none';
});


// Listen for form submissions
signupForm.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // TODO: Implement form submission to SQL database with end-to-end encryption

  // Close the modal after form submission
  signupModal.style.display = 'none';
});


loginForm.addEventListener('submit', function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // TODO: Check if user information is in SQL database and redirect to landing page if found

  // Close the modal after form submission
  loginModal.style.display = 'none';
});


