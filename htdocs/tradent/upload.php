<?php
	ini_set('display_errors','1');
	session_start();
	$_SESSION['message'] = '';
	$con = mysqli_connect('localhost','root','','tradent');
	if(isset($_POST['submit']))
	{
		
	}
$email = $_SESSION['login'];
$result = mysqli_query($con,"SELECT * FROM users WHERE email = '$email'");
$row = mysqli_fetch_array($result);
mkdir("photos/".$row['id']);
$target_dir = "photos/".$row['id']."/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) 
{
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
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
			$price = $con-> real_escape_string($_POST['price']);
			$pricing = $con-> real_escape_string($_POST['pricing']);
			$location = $con-> real_escape_string($_POST['location']);
			$photo = $target_file;
			
			$additem = "INSERT INTO items (name,description,photo,user,price,location,pricer,furniture,sports,kitchen,clothes,electronics,home,books,tools,other)"."VALUES('$itemname','$description','$photo','$email','$price','$location','$pricing','$furniture','$sports','$kitchen','$clothes','$electronics','$home','$books','$tools','$other')";
			
			if($con->query($additem) === true)
			{
				$_SESSION['message'] = "Registration Succesful! Welcome MR. $username";
				header("location: main.php");
			}
			else
			{		
				$_SESSION['message'] = "Error While Adding User To Database";
			}
		}
}
/*// Check if file already exists
if (file_exists($target_file)) {
    $_SESSION['message'] = "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    $_SESSION['message'] = "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $_SESSION['message'] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
*/
if ($uploadOk == 0) {
    $_SESSION['message'] = "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $_SESSION['message'] = "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        $_SESSION['message'] = "Sorry, there was an error uploading your file.";
    }
}
?>
