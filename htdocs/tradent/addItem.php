<?php
	ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$user = mysqli_connect('localhost','root','','tradent');
	$item = mysqli_connect('localhost','root','','items');
	if(isset($_POST['submit']))
	{
		if($_POST['pricing'] == true)
		{
			$category = $_POST['category'];
			
			$itemname = $item-> real_escape_string($_POST['itemname']);
			$description = $item-> real_escape_string($_POST['itemdescription']);
			$email = $_SESSION['login'];
			$price = $item-> real_escape_string($_POST['price']);
			$pricing = $item-> real_escape_string($_POST['pricing']);
			$location = $item-> real_escape_string($_POST['location']);
			
			$additem = "INSERT INTO $category (name,description,user,price,location,pricing)"."VALUES('$itemname','$description','$email','$price','$location','$pricing')";
			
			if($item->query($additem) === true)
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

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css" type="text/css">
<title>Add Item</title>
</head>
<body>
<div class="body-content">
  <div class="module">
    <h1>Create an account</h1>
    <form class="form" action="addItem.php" method="post" autocomplete="off">
      <div class="alert alert-error"><?php echo $_SESSION['message'] ?></div>
      <input type="text" placeholder="Item Name" name="itemname" required /><br>
      <input type="textarea" placeholder="Description" name="itemdescription" required /><br>
		
     	<input type="radio" value="furniture" name="category" required/> Furniture<br>
	 	<input type="radio" value="Kitchen & Home Appliences" name="category"/> Kitchen & Home Appliences<br>
		<input type="radio" value="Clothes" name="category"/> Clothes<br>
		<input type="radio" value="Electronics" name="category"/> Electronics<br>
		<input type="radio" value="Home Accessories" name="category"/> Home Accessories<br>
		<input type="radio" value="Sports & Outdoors" name="category"/> Sports & Outdoors<br>
		<input type="radio" value="Books" name="category"/> Books<br>
		<input type="radio" value="Tools & Equipment" name="category"/> Tools & Equipment<br>
		<input type="radio" value="Other" name="category"/> Other<br><br>
		
		<input type="radio" value="Sell" name="pricing" required/>Sell<br>
		<input type="radio" value="Exchange" name="pricing"/>Exchange<br>
		<input type="radio" value="Give Away" name="pricing"/>Give Away<br><br>
		
		<select name="location" required>
  			<option value="volvo" >1</option>
  			<option value="saab">2</option>
  			<option value="mercedes">3</option>
  			<option value="audi">4</option>
		</select><br>
		
		<input type="number" placeholder="Price" name="price"/>Price<br>
		<<!-- <input type="range" value="ranger" min="1" max="100" value="50" name="price"/>Price<br> -->
		
      <input type="submit" value="Submit" name="submit" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>
