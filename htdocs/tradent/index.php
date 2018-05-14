<?php
	
	session_start();
	ini_set('display_errors','0');
	if(isset($_SESSION['login']))
	{
		header("location: main.php");
	} else {
		header("location: login.php");
	}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Main Page</title>
</head>
<h1><?php //echo $_SESSION['message'] ?></h1>
<body>
</body>
</html>