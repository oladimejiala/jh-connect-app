<?php
// Database credentials
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'jh-connect app');

// Connect to the database
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn === false) {
    die('ERROR: Could not connect to the database. ' . mysqli_connect_error());
}

// You can replace localhost, your-username, your-password, and your-database-name with the appropriate values for your own database. 
// You can also customize the error message that is displayed if the connection fails.
// Make sure to include this configuration file in any PHP files that need to access the database by using the require_once or 
// include_once function.