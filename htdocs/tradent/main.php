<?php	
session_start();
ini_set('display_errors','0');
if(isset($_SESSION['login']))
{
?>
        
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Tiitel</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" 
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" 
            crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <header>
            <nav id="mainMenu">Loading...</nav>
        </header>
        <div class="d-flex">
            <nav id="personalMenu">Loading...</nav>
            <main></main>
        </div>
        <footer>
            <ul class="nav">
                <li class="nav-item mb-2 align-middle">
                    <a href="#person/self/items" class="nav-link rounded-0 text-light">About Tradent</a>   
                </li>
                <li class="nav-item mb-2 align-middle">
                    <a href="#person/self/wish" class="nav-link rounded-0 text-light">Privacy</a>
                </li>
                <li class="nav-item mb-2 align-middle">
                        <a href="#person/self/trade" class="nav-link rounded-0 text-light">Help</a>   
                </li>
                <li class="nav-item mb-2 align-middle">
                    <a href="#person/self/messages" class="nav-link rounded-0 text-light">FAQ</a>
                </li>
            </ul>
        </footer>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
                crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" 
                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" 
                crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" 
                integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" 
                crossorigin="anonymous">
        </script>
        <script src="app.js" type="text/javascript"></script>
    </body>
</html>

<?php
} else {
    header("location: login.php");
}
?>