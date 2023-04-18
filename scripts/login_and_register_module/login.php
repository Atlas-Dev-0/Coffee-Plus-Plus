<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COFFEE PLUS-PLUS</title>
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/scripts/login_and_register_module/login_page_style.css">

</head>

<body>
    <script src="/Bootstrap/js/bootstrap.js">
    </script>

    <div class="modal fade" id="incorrectPasswordModal" tabindex="-1" aria-labelledby="incorrectPasswordModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="background-color: rgb(251, 235, 211);">
                <div class="modal-header">
                    <h5 class="modal-title" id="incorrectPasswordModalLabel">Incorrect password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>The password you entered is incorrect. Please try again.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="login_page_container container ">
        <div class="brand container" style="float: left;">
            <img class="brand_logo" src="/Logo/SVG_LOGO_HORIZONTAL.svg" alt="Brand Logo">
            <div class="brand_intro_container">
                <img class="joe" src="/Design Elements/characters/joe_animation.gif" alt="Joe animation">
                <div class="text_intro">
                    <h3>Hello Customer!</h3>
                    <p>
                        Welcome to Coffee Plus Plus! Here you will find the best coffee selection and the latest tips,
                        tricks and techniques to help you increase your productivity.
                        We offer a unique variety of beans from around the world, carefully selected for their depth of
                        flavor and quality ingredients.
                        Whether you are looking to get an extra boost at work, or just want to relax with a nice cup of
                        coffee, we have something for everyone.
                        Come in and explore the world of Coffee Plus Plus today!
                    </p>
                </div>
            </div>
        </div>

        <div class="login container" style="float: right;">
            <h1>Login</h1>
            <form method="post" action="login.php">
                <label for="username" style="font-weight: bold;">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter username">
                <label for="password" style="font-weight: bold;">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password">
                <button type="submit" class="login_button">Login</button>
            </form>
            <p style="  color: black; font-weight:500;">I don't have an account <a href="register.php" style=" color: black; font-weight: bold;"> Register here</a></p>
        </div>
    </div>
</body>

</html>

<?php

//LOGIN SCRIPT
session_start();
// Get the user's submitted username and password
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Create a new MySQLi object and connect to the database
$mysqli = new mysqli("localhost", "root", "password", "coffeeplusplusdb");

// Check for any connection errors
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Prepare a SQL statement to select the user's credentials from the table
$stmt = $mysqli->prepare("SELECT * FROM customer_user_credentials_and_information WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if (!empty($username) && !empty($password)) {
    if ($result->num_rows === 1) {
        // Valid credentials - redirect to the home page or another page
        session_start();
        $_SESSION['loggedin'] = true;
        header("Location: /index.php");
        exit;
    } else {
        // Invalid credentials - display an error message
        echo '<script>
                var incorrectPasswordModal = new bootstrap.Modal(document.getElementById("incorrectPasswordModal"), {
                    backdrop: "static",
                    keyboard: false
                });
                incorrectPasswordModal.show();
              </script>';
    }
}
// Close the statement and connection
$stmt->close();
$mysqli->close();
?>