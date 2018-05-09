<?php
	ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$con = mysqli_connect('localhost','root','','tradent');
	if(isset($_POST['submit']))
	{
		//category check
		//arts
		if(isset($_POST['arts']))
		{
			$arts = 1;
		}
		else
		{
			$arts = 0;
		}
		//music
		if(isset($_POST['music']))
		{
			$music = 1;
		}
		else
		{
			$music = 0;
		}
		//language
		if(isset($_POST['language']))
		{
			$language = 1;
		}
		else
		{
			$language = 0;
		}
		//general
		if(isset($_POST['general']))
		{
			$general = 1;
		}
		else
		{
			$general = 0;
		}
		//household
		if(isset($_POST['household']))
		{
			$household = 1;
		}
		else
		{
			$household = 0;
		}
		//mecha
		if(isset($_POST['mecha']))
		{
			$mecha = 1;
		}
		else
		{
			$mecha = 0;
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
			
			$services = "INSERT INTO service (name,description,user,price,location,pricer,arts,music,language,general,household,mecha,other)"."VALUES('$itemname','$description','$email','$price','$location','$pricing','$arts','$music','$language','$general','$household','$mecha','$other')";
			
			if($con->query($services) === true)
			{
				$_SESSION['message'] = "Registration Succesful! Welcome MR. $username";
				header("location: addItem.php");
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
<title>Add Service</title>
</head>
<body>
<div class="body-content">
  <div class="module">
    <h1>Create an account</h1>
    <form class="form" method="post" autocomplete="off">
      <div class="alert alert-error"><?php echo $_SESSION['message']?></div>
      <input type="text" placeholder="Item Name" name="itemname" required /><br>
      <input type="textarea" placeholder="Description" name="itemdescription" required /><br>
		Skill Sharing</br>
     	<input type="checkbox" value="Arts" name="arts" /> Arts<br>
	 	<input type="checkbox" value="Music" name="music"/> Music<br>
		<input type="checkbox" value="Languages" name="Language"/> Languages<br>
		<input type="checkbox" value="General Skills" name="general"/> General Skills<br></br>
	  	Fixing & Repairing</br>
		<input type="checkbox" value="Household Items" name="household"/> Household Items<br>
		<input type="checkbox" value="Mechanical" name="mecha"/> Mechanical<br>
		<input type="checkbox" value="Other" name="other"/> Other<br><br>
		
		<input type="radio" value="Sell" name="pricing" required/>Sell<br>
		<input type="radio" value="Exchange" name="pricing"/>Exchange<br>
		<input type="radio" value="Give Away" name="pricing"/>Give Away<br><br>
	
		<select name="location" required>
  			<option value="volvo" >District 1</option>
  			<option value="saab">District 2</option>
  			<option value="mercedes">District 3</option>
  			<option value="audi">District 4</option>
		</select><br>
		<input type="number" placeholder="Price" name="price"/>Price<br>
		<input type="range" value="ranger" min="1" max="100" value="50" name="price"/>Price<br>
	
      <input type="submit" value="Submit" name="submit" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>
