<?php

// Database connection
$conn = mysqli_connect("localhost", "root", "", "techtonic-academy");

// Check if the connection was successful
if ($conn) {
    //echo "Connected";
} else {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted using POST method
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form input values
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password'];

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if username and password are not empty
    if (!empty($username) && !empty($password)) {
        // Insert data into the login table
        $query = "INSERT INTO login (username, password) VALUES ('$username', '$hashed_password')";
        $check = mysqli_query($conn, $query);

        if ($check) {
            echo "Welcom Back, " . $username;
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "Both username and password are required.";
    }
}

// Close the database connection
mysqli_close($conn);
?>
