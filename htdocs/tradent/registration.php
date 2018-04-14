<?php
	ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$mysqli = mysqli_connect('localhost','root','','tradent');
	
	if(isset($_POST['register']))
	{
		if($_POST['password'] == $_POST['confirmpassword'] )
		{
			$username = $mysqli-> real_escape_string($_POST['username']);
			$email = $mysqli-> real_escape_string($_POST['email']);
			$password = $mysqli-> real_escape_string($_POST['password']);
			// check if usr exists
			$result = mysqli_query($mysqli,"SELECT * FROM users WHERE email = '$email'") 
			or die("Wrong Username or Password: ".mysqli_error("ok"));
			$row = mysqli_fetch_array($result);
			if($row['email'] == $email)
			{
				$_SESSION['message'] = "User Already Exists";
			}
			else
			{
				$sql = "INSERT INTO users (username,email,password)"."VALUES('$username','$email','$password')";
				if($mysqli->query($sql) === true)
				{
					$_SESSION['message'] = "Registration Succesful! Welcome MR. $username";
					header("location: login.php");
				}
				else
				{		
					$_SESSION['message'] = "Error While Adding User To Database";
				}
			}
		}
		else
		{
			$_SESSION['message'] = "Paswords Do Not Match";
		}
	}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css" type="text/css">
<title>Registration Page</title>
</head>
<body>
<div class="body-content">
  <div class="module">
    <h1>Create an account</h1>
    <form class="form" action="registration.php" method="post" autocomplete="off">
      <div class="alert alert-error"><?php echo $_SESSION['message'] ?></div>
      <input type="text" placeholder="User Name" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <input type="password" placeholder="Confirm Password" name="confirmpassword" required />
      <input type="submit" value="Register" name="register" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>
