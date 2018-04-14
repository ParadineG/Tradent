<?php
	
	session_start();
	ini_set('display_errors','1');
	if(isset($_SESSION['login']))
	{
  		echo "Your session is running " . $_SESSION['login'];
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