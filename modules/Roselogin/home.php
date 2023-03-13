<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['fname'])) {
 ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Coffee Shop</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    
    <header>
      <nav>
        <div class="container">
          <a href="#" class="logo">MAG PA KAPE KA!!</a>
        </div>
      </nav>
      <div class="container">
        <h1>Welcome <?=$_SESSION['fname']?></h1>
        <a href="Logout.php" class="btn btn-warning">Logout</a>
      </div>
    </header>

    
    <section class="about">
      <div class="container">
        <h2>About Us</h2>
        <p>
          My Coffee Shop is a family-owned business that has been serving the community for over 20 years. <br> We pride ourselves on providing the best quality coffee and pastries, along with exceptional customer service.</p>
      </div>
    </section>
    <section class="menu">
      <div class="container">
        <h2>Our Menu</h2>
        <div class="menu-items">
          <div class="menu-item">
            <img src="coffee1.png" alt="Coffee" />
            <h3>BBM Coffee</h3>
            <p>A shot of espresso with steamed milk and a layer of foam on top.</p>
          </div>
          <div class="menu-item">
            <img src="coffee2.png" alt="Coffee" />
            <h3>NescaPink</h3>
            <p>A shot of espresso with equal parts steamed milk and foam on top.</p>
          </div>
          <div class="menu-item">
            <img src="coffee3.png" alt="Coffee" />
            <h3>Americano</h3>
            <p>A shot of espresso with hot water.</p>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <p>&copy; 2023 My Coffee Shop</p>
      </div>
    </footer>
  </body>
</html>
<?php }else {
	header("Location: login.php");
	exit;
} ?>