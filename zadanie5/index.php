<?php session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
<?php
	require("funkcje.php");
	if (isset($_POST["wyloguj"])){
		$_SESSION["zalogowany"]=0;
	}
 ?>
	<h1>Nasz system</h1>
	<form	 action = "logowanie.php" method = "post">
				 Login:<input type="text" name="login"><br>
				 Hasło:<input type="text" name="haslo"><br>
				 <input type="submit" value="Zaloguj" name="zaloguj">
</form>
<h1> Ciastka </h1>
<form	 action = "cookie.php" method = "get">
			<input type="number" name="czas">
			 <input type="submit" value="Utworz cookie" name="cook">
</form>

<?php
if (isset($_COOKIE["ciastko"]))
	echo "ciastko ". $_COOKIE["ciastko"]


?>
</body>
</html>
