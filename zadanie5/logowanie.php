
<?php
require("funkcje.php");

if ( ($_GET["login"] == $osoba1->login and $_GET["haslo"] == $osoba1->login) or ($_GET["login"] == $osoba2->login and $_GET["haslo"] == $osoba2->login))
{
   $_SESSION["zalogowany"]=$_GET["login"] . $_GET["haslo"];
   header("Location: user.php");
 }
 else {
   header("Location: index.php");
 }
 ?>
