<?php
	//ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$mysqli = mysqli_connect('localhost','root','','tradent');

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
    <?php
	  $global = mysqli_query($mysqli,"SELECT * FROM service ");
	  $result = mysqli_fetch_array($global);
	  $row = mysqli_fetch_row ($global);
	  foreach($global as $row)
	  {
		  echo "<div style='border: 2px; border-style: solid; width: 150px; height: 100px;'></br>";
		  echo "<div style='border: 2px; border-style: solid; width: 50px; height: 20px; margin-top: -20px; margin-left: -2px;'>".$row['name']."</div>";
		  echo "<div style='border: 2px; border-style: solid; width: 96px; height: 50px; margin-top: -23px; margin-left: 52px;'>".$row['description']."</div>";
		  echo "<div style='border: 2px; border-style: solid; width: 40px; height: 20px; margin-top: 25px; margin-left: -2px;'>".$row['price']." $</div>";
		  echo "</div></br></br>";
	  }
	
	?>
  </div>
</div>
</body>
</html>