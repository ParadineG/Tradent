<?php 
session_start();
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
    
    <form class="form" action="upload.php" method="post" autocomplete="off" enctype="multipart/form-data">
		<h1>Provide Item</h1>
    	<div class="alert alert-error"><?php echo $_SESSION['message'] ?></div>
    	<input type="text" placeholder="Item Name" name="itemname" required /><br>
    	<input type="textarea" placeholder="Description" name="itemdescription" required /><br>
		<input type="file" name="fileToUpload" id="fileToUpload"></br>
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
  			<option value="Central" >Central Tallinn</option>
  			<option value="Haabersti">Haabersti</option>
  			<option value="Kristiine">Kristiine</option>
  			<option value="Lasnamae">Lasnamae</option>
			<option value="Mustamae">Mustamae</option>
			<option value="Nomme">Nomme</option>
			<option value="Northern">Northern Tallinn</option>
			<option value="Pirita">Pirita</option>
		</select><br>
		
		<input type="number" placeholder="Price" name="price"/>Price<br>
		<input type="range" value="ranger" min="1" max="100" value="50" name="price"/>Price<br>
		
      <input type="submit" value="Submit" name="submit" class="btn btn-block btn-primary" />
    </form>
  </div>
</div>
</body>
</html>
