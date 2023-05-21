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
  $firstname = $_POST['firstname'];
  $surname = $_POST['surname'];
  $middlename = $_POST['middlename'];
  $name = $surname . ", " . $firstname;
  //if middle name is not empty, add it
  if (!empty($middlename)) {
    $name .= " " . $middlename;
  }
  $dob = $_POST['dob'];
  $address = $_POST['address'];
  $address_work = $_POST['address_work'];
  $address_school = $_POST['address_school'];
  $address_friend = $_POST['address_friend'];
  $contact_number = $_POST['contact_number'];

  // Insert data into the database
  $sql = "INSERT INTO customer_user_credentials_and_information (username, password, name, dob, address, address_work, address_friend, address_school, contact_number)
            VALUES ('$username', '$password', '$name', '$dob', '$address', '$address_work', '$address_friend', '$address_school', '$contact_number')";

  if ($conn->query($sql) === TRUE) {
    echo "Registration successful.";
    header("location: /scripts/login_module/login.php");
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
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      margin-top: 150px;
      background-image: url('/Design Elements/UI/register-window.jpg');
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      display: grid;
      grid-template-columns: auto;
      justify-items: center;
      align-content: space-between;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
      font-size: 50px;
      grid-column: 1 / -1;
    }

    .form-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      width: 713px;
    }

    label {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
      display: block;
    }

    input {
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: none;
      width: 100%;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }

    button {
      padding: 10px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100px;
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

    .button-container {
      align-self: center;
      justify-self: center;
    }

    .btn {
      margin: 20px;
      width: 323px;
    }

    .return-btn:hover {
      transition: 0.2s;
      background-color: maroon;
      color: white;
    }

    .submit-btn:hover {
      transition: 0.2s;
      background-color: darkgreen;
      color: white;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Register</h1>
    <form method="post">
      <div class="form-container">
        <div>
          <label for="username" style="font-weight: bold;">Username:</label>
          <input type="text" id="username" name="username" required placeholder="Enter your username">
        </div>
        <div>
          <label for="password" style="font-weight: bold;">Password:</label>
          <input type="password" id="password" name="password" required placeholder="Enter your password">
        </div>
        <div>
          <label for="firstname" style="font-weight: bold;">Firstname:</label>
          <input type="text" id="firstname" name="firstname" required placeholder="Enter your firstname">
        </div>
        <div>
          <label for="surname" style="font-weight: bold;">Surname:</label>
          <input type="text" id="surname" name="surname" required placeholder="Enter your surname">
        </div>
        <div>
          <label for="middlename" style="font-weight: bold;">Middle Name:</label>
          <input type="text" id="middlename" name="middlename" placeholder="Optional">
        </div>
        <div>
          <label for="dob" style="font-weight: bold;">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required>
        </div>
        <div>
          <label for="contact_number" style="font-weight: bold;">Contact Number:</label>
          <input type="text" id="contact_number" name="contact_number" required placeholder="Enter your contact number">
        </div>
        <div>
          <label for="address" style="font-weight: bold;">Address (HOME):</label>
          <input type="text" id="address" name="address" placeholder="Home" required>
        </div>
        <div>
          <label for="address_work" style="font-weight: bold;">Address (WORK):</label>
          <input type="text" id="address_work" name="address_work" required placeholder="Enter your work address">
        </div>
        <div>
          <label for="address_friend" style="font-weight: bold;">Address (FRIEND):</label>
          <input type="text" id="address_friend" name="address_friend" required placeholder="Enter your friend's address">
        </div>
        <div>
          <label for="address_school" style="font-weight: bold;">Address (SCHOOL):</label>
          <input type="text" id="address_school" name="address_school" required placeholder="Enter your school address">
        </div>
      </div>
      <div class="button-container">
        <button type="submit" name="submit" class="btn submit-btn">Submit</button>
        <button type="button" name="submit" class="btn return-btn" onclick="window.location.href='/index.php'">Cancel</button>
      </div>
    </form>

  </div>

  </div>
</body>

</html>