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
			header("location: addService.php");
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
<body>
<div class="body-content">
  <div class="module">
    <h1>Please Log In</h1>
    <form class="form" action="login.php" method="post" autocomplete="off">
      <div class="alert alert-error"><?php echo $_SESSION['message'] ?></div>
      <input type="email" placeholder="Email" name="email" required />
		<input type="password" placeholder="Password" name="password" required /></br>
      <input type="submit" value="Log In" name="login" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>