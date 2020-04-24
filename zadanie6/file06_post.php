
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  </head>
  <body>
<?php
session_start();
if (isset($_SESSION["blad"]) & $_SESSION["blad"]==":("){
  printf("Nie udalo sie dodac");
  $_SESSION["blad"]=":)";
}
 ?>

    <form action="file06_redirect.php" method="POST">
      id_prac <input type="text" name="id_prac">
      nazwisko <input type="text"name="nazwisko">
      <input type="submit" value="Wstaw">
      <input type="reset" value="Wyczysc">
    </form>
    <form action="file06_get.php" method="POST">
      <input type="submit" value="Lista">
    </form>
