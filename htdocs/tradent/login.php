<?php
	//ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$_SESSION['login'] = '';
	$mysqli = mysqli_connect('localhost','root','','tradent');
	if(isset($_POST['login']))
	{
		$email = $_POST['email'];
		$password = $_POST['password'];
		$result = mysqli_query($mysqli,"SELECT * FROM users WHERE email = '$email' and password = '$password'") 
			or die("Wrong Username or Password: ".mysqli_error("ok"));
		$row = mysqli_fetch_array($result);
		if($row['email'] == $email && $row['password'] == $password)
		{
			$_SESSION['login'] = $_POST['email'];
			$_SESSION['message'] = 'Good Job';
			header("location: main.php");
		}
		else
		{
			$_SESSION['message'] = 'Wrong Email or Password';
		}
		
	}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css" type="text/css">
<title>Login Page</title>
</head>
<body style="background-color: #28b78d">
<div class="body-content">
  <div class="module">
    
    <form class="form" method="post" 
		 autocomplete="off">
		<h1 class="reg">Please Log In</h1></br></br></br>
      <div class="alert"><?php echo $_SESSION['message'] ?></div>
	  <p class="reg">E-Mail</p>
      <input type="email" name="email" required />
		<p class="reg">Password</p>
		<input type="password" name="password" required /></br></br>
		<a class="reg" style="margin-left: 27%;text-decoration: none;" href="registration.php">Create an Account</a>
      <input type="submit" value="Log In" name="login" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>