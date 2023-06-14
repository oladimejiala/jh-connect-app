// Add click event listener to navigation items and menu items
const navItems = document.querySelectorAll('.nav-item');
const menuItems = document.querySelectorAll('.menu-item');

navItems.forEach(item => {
  item.addEventListener('click', handleNavigationClick);
});

menuItems.forEach(item => {
  item.addEventListener('click', handleNavigationClick);
});

function handleNavigationClick(event) {
  // Check if user is logged in
  const userToken = localStorage.getItem('userToken');
  if (!userToken) {
    // User is not logged in, show login form
    showLoginForm();
  } else {
    // User is logged in, handle navigation
    handleNavigation();
  }
}

function showLoginForm() {
  // Show login form
  // ...
}

function handleNavigation() {
  // Handle navigation
  // ...
}

// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// prepare the request
xhr.open('POST', '/checkUser', true);
xhr.setRequestHeader('Content-type', 'application/json');

// set the callback function to handle the response
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    if (response.status === 'success') {
      // user's login information exists, proceed to step 4
    } else {
      // user's login information does not exist, display signup form
    }
  }
};

// send the request with the user's login information
var data = {
  email: 'user@example.com',
  password: 'password'
};
xhr.send(JSON.stringify(data));

const nodemailer = require("nodemailer");

// check if user exists function
function checkUserExists(username) {
  // logic to check if user exists in the database or file system
  // return true or false depending on whether the user exists
}

// send verification email function
async function sendVerificationEmail(toEmail) {
  try {
    // create a transporter with nodemailer
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // create a random verification code
    let verificationCode = Math.floor(Math.random() * 1000000);

    // create the email message
    let message = {
      from: "Your App Name <noreply@appname.com>",
      to: toEmail,
      subject: "Verify Your Email",
      text: `Your verification code is ${verificationCode}. Please enter this code to complete your registration.`,
    };

    // send the email
    let info = await transporter.sendMail(message);

    // log the email message for debugging purposes
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }
}

// Assuming successful login and authentication
function handleLoginSuccess() {
  // Display popup message
  alert("Login Successful");

  // Redirect to connect page
  window.location.href = "chat.html";
}

handleLoginSuccess()
