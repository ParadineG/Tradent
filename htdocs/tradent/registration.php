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
<head <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<meta charset="utf-8">
<link rel="stylesheet" href="style.css" type="text/css">
<title>Registration Page</title>
</head>
<body style="background-color: #28b78d">
<div class="body-content">
  <div class="module">
    
    <form class="form" method="post" autocomplete="off" >
		<h1 class="reg">Create an Account</h1></br></br></br>
      <div class="alert alert-error"><?php echo $_SESSION['message'] ?></div></br>
	  <p class="reg">Full Name</p> 
      <input type="text" name="username" required />
	</br>
	<p class="reg">E-Mail</p>
      <input type="email" name="email" required /></br>
	<p class="reg">Password</p>
	<input type="password" name="password" required /></br>
	<p class="reg">Repeat Password</p>
		<input type="password" name="confirmpassword" required /></br></br>
      <input type="submit" value="Register" name="register" class="btn"/>
    </form>
  </div>
</div>
</body>
</html>
