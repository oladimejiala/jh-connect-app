<?php
// Define variables and set to empty values
$firstName = $lastName = $email = $password = $confirmPassword = $phoneNumber = $rememberPassword = '';
$errors = [];

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Validate and sanitize form data
  $firstName = validate_input($_POST['firstName']);
  $lastName = validate_input($_POST['lastName']);
  $email = validate_input($_POST['email']);
  $password = validate_input($_POST['password']);
  $confirmPassword = validate_input($_POST['confirmPassword']);
  $phoneNumber = validate_input($_POST['phoneNumber']);
  $rememberPassword = isset($_POST['rememberPassword']) ? 'Yes' : 'No';

  // Validate first name
  if (empty($firstName)) {
    $errors['firstName'] = 'First name is required';
  } else if (!preg_match('/^[a-zA-Z ]*$/', $firstName)) {
    $errors['firstName'] = 'Only letters and spaces allowed';
  }

  // Validate last name
  if (empty($lastName)) {
    $errors['lastName'] = 'Last name is required';
  } else if (!preg_match('/^[a-zA-Z ]*$/', $lastName)) {
    $errors['lastName'] = 'Only letters and spaces allowed';
  }

  // Validate email
  if (empty($email)) {
    $errors['email'] = 'Email is required';
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email format';
  }

  // Validate password
  if (empty($password)) {
    $errors['password'] = 'Password is required';
  } else if (strlen($password) < 8) {
    $errors['password'] = 'Password must be at least 8 characters long';
  } else if (!preg_match('/[A-Z]/', $password)) {
    $errors['password'] = 'Password must contain at least one uppercase letter';
  } else if (!preg_match('/[a-z]/', $password)) {
    $errors['password'] = 'Password must contain at least one lowercase letter';
  } else if (!preg_match('/[0-9]/', $password)) {
    $errors['password'] = 'Password must contain at least one number';
  }

  // Validate confirm password
  if (empty($confirmPassword)) {
    $errors['confirmPassword'] = 'Please confirm your password';
  } else if ($password !== $confirmPassword) {
    $errors['confirmPassword'] = 'Passwords do not match';
  }

  // Validate phone number
  if (!empty($phoneNumber) && !preg_match('/^\d{10}$/', $phoneNumber)) {
    $errors['phoneNumber'] = 'Invalid phone number format';
  }

  // If no errors, insert user data into database
  if (empty($errors)) {
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Connect to the database
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'jh-connect app';
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for errors
    if ($conn->connect_error) {
      die('Connection failed: ' . $conn->connect_error);
    }

        // Insert the user data into the database
        $stmt = $conn->prepare('INSERT INTO users (first_name, last_name, email, password, phone_number, remember_password) VALUES (?, ?, ?, ?, ?, ?)');
        $stmt->bind_param('ssssss', $firstName, $lastName, $email, $hashedPassword, $phoneNumber, $rememberPassword);
    
        if ($stmt->execute()) {
          // Registration successful
          header('Location: login.php');
          exit();
        } else {
          $errors['form'] = 'Something went wrong. Please try again.';
        }
    
        // Close the database connection
        $stmt->close();
        $conn->close();
      }
    }
    
    // Function to validate and sanitize form data
    function validate_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }