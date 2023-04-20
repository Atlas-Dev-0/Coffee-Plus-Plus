<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// If form submitted, insert values into the database.
if (isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $fullname = $_POST['fullname'];
  $surname = $_POST['surname'];
  $middlename = $_POST['middlename'];
  $name = $surname . ", " . $fullname . " " . $middlename;
  $age = $_POST['age'];
  $address = $_POST['address'];
  $contact_number = $_POST['contact_number'];

  // Insert data into the database
  $sql = "INSERT INTO customer_user_credentials_and_information (username, password, name, age, address, contact_number)
            VALUES ('$username', '$password', '$name', '$age', '$address', '$contact_number')";

  if ($conn->query($sql) === TRUE) {
    echo "Registration successful.";
    header("location: /scripts/login_and_register_module/login.php");
    exit;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>COFFEE PLUS-PLUS</title>
</head>

<body>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      background-image: url('/Design Elements/UI/Coffee_Background.png');
      background-size: cover;
      font-family: sans-serif;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-color: #fffddd;
    }

    .container {
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
      margin-top: 150px;
      background-color: #cbc793;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
      font-size: 50px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }

    input {
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }

    button {
      padding: 10px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #555;
    }

    p {
      margin-top: 20px;
      text-align: center;
      font-size: 16px;
    }

    a {
      color: #333;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
  <div class="container">
    <h1>Register</h1>
    <form method="post">
      <label for="username" style="font-weight: bold;">Username:</label>
      <input type="text" id="username" name="username" required><br>
      <label for="password" style="font-weight: bold;">Password:</label>
      <input type="password" id="password" name="password" required><br>
      <label for="fullname" style="font-weight: bold;">Full Name:</label>
      <input type="text" id="fullname" name="fullname" required><br>
      <label for="surname" style="font-weight: bold;">Surname:</label>
      <input type="text" id="surname" name="surname" required><br>
      <label for="middlename" style="font-weight: bold;">Middle Name:</label>
      <input type="text" id="middlename" name="middlename" required><br>
      <label for="age" style="font-weight: bold;">Age:</label>
      <input type="number" id="age" name="age" required><br>
      <label for="address" style="font-weight: bold;">Address:</label>
      <input type="text" id="address" name="address" required><br>
      <label for="contact_number" style="font-weight: bold;">Contact Number:</label>
      <input type="text" id="contact_number" name="contact_number" required><br><br>
      <button type="submit" name="submit" class="btn">Submit</button>
    </form>
  </div>
</body>

</html>