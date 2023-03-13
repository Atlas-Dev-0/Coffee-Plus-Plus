<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
     <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
  <body>
    <div class="d-flex justify-content-center align-items-center vh-100">
  <form class="shadow w-450 p-3" action="php/signup.php" method="post">
    <h3 class="display-4 text-center fs-1">Create Account</h3>
    <?php if(isset($_GET['error'])){ ?>
    <div class="alert alert-danger" role="alert">
    <?php echo $_GET['error']; ?>
    </div> 
    <?php } ?>

    <?php if(isset($_GET['success'])){ ?>
    		<div class="alert alert-success" role="alert">
			  <?php echo $_GET['success']; ?>
			</div>
		    <?php } ?>

  <div class="mb-3">
    <label class="form-label">Full Name</label> 
    <input type="text" 
    class="form-control"
    name="fname" 
    autocomplete="off"
    value="<?php echo (isset($_GET['fname']))?$_GET['fname']:
    "" ?>">
  </div>
  <div class="mb-3">
    <label class="form-label">User Name</label>
    <input type="text" 
    class="form-control" 
    name="uname"
    autocomplete="off"
    value = "<?php echo (isset($_GET['uname']))?$_GET['uname']:
    "" ?>">
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" 
    class="form-control"
    name="pass" 
    autocomplete="off">
  </div>
  
 
  <button type="submit" class="btn btn-primary">Sign Up</button>  
  <a class="btn btn-primary" href="login.php" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Login
</a>
</form>
</div>
  </body>
</html>