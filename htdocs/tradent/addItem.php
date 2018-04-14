<?php
	ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$con = mysqli_connect('localhost','root','','tradent');
	if(isset($_POST['submit']))
	{
		//category check
		//furniture
		if(isset($_POST['furniture']))
		{
			$furniture = 1;
		}
		else
		{
			$furniture = 0;
		}
		//sports
		if(isset($_POST['sports']))
		{
			$sports = 1;
		}
		else
		{
			$sports = 0;
		}
		//kitchen
		if(isset($_POST['kitchen']))
		{
			$kitchen = 1;
		}
		else
		{
			$kitchen = 0;
		}
		//clothes
		if(isset($_POST['clothes']))
		{
			$clothes = 1;
		}
		else
		{
			$clothes = 0;
		}
		//electronics
		if(isset($_POST['electronics']))
		{
			$electronics = 1;
		}
		else
		{
			$electronics = 0;
		}
		//home
		if(isset($_POST['home']))
		{
			$home = 1;
		}
		else
		{
			$home = 0;
		}
		//books
		if(isset($_POST['books']))
		{
			$books = 1;
		}
		else
		{
			$books = 0;
		}
		//tools
		if(isset($_POST['tools']))
		{
			$tools = 1;
		}
		else
		{
			$tools = 0;
		}
		//other
		if(isset($_POST['other']))
		{
			$other = 1;
		}
		else
		{
			$other = 0;
		}
		//check if pricing is selected
		if($_POST['pricing'] == true)
		{
					
			$itemname = $con-> real_escape_string($_POST['itemname']);
			$description = $con-> real_escape_string($_POST['itemdescription']);
			$email = $_SESSION['login'];
			$price = $con-> real_escape_string($_POST['price']);
			$pricing = $con-> real_escape_string($_POST['pricing']);
			$location = $con-> real_escape_string($_POST['location']);
			
			$additem = "INSERT INTO items (name,description,user,price,location,pricer,furniture,sports,kitchen,clothes,electronics,home,books,tools,other)"."VALUES('$itemname','$description','$email','$price','$location','$pricing','$furniture','$sports','$kitchen','$clothes','$electronics','$home','$books','$tools','$other')";
			
			if($con->query($additem) === true)
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
		
     	<input type="checkbox" value="furniture" name="furniture" /> Furniture<br>
	 	<input type="checkbox" value="Kitchen & Home Appliences" name="kitchen"/> Kitchen & Home Appliences<br>
		<input type="checkbox" value="Clothes" name="clothes"/> Clothes<br>
		<input type="checkbox" value="Electronics" name="electronics"/> Electronics<br>
		<input type="checkbox" value="Home Accessories" name="home"/> Home Accessories<br>
		<input type="checkbox" value="Sports & Outdoors" name="sports"/> Sports & Outdoors<br>
		<input type="checkbox" value="Books" name="books"/> Books<br>
		<input type="checkbox" value="Tools & Equipment" name="tools"/> Tools & Equipment<br>
		<input type="checkbox" value="Other" name="other"/> Other<br><br>
		
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
