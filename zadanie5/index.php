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
 ?>
	<h1>Nasz system</h1>
	<form	 action = "index.php" method = "get">
				 Login:<input type="text" name="login"><br>
				 Hasło:<input type="text" name="haslo"><br>
				 <input type="submit" value="Zaloguj" name="zaloguj">
</form>

<form	 action = "index.php" method = "get">
			<input type="number" name="czas">
			 <input type="submit" value="Utworz cookie" name="cook">
</form>

<?php
if (isset($_COOKIE["ciastko"]))
	echo "Czas ciastka ". $_COOKIE["ciastko"]

if (isset($_GET["zaloguj"])){
 	header("Location: logowanie.php");
}
if (isset($_GET["cook"])){
 	header("Location: cookie.php");
}
?>
</body>
</html>
