<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
	<?php
	$cookies= $_GET["czas"];
	setcookie("ciastko", "7", time() + (86400*30),"/");
	echo "Ciastko zrobione";
	 ?>
	 <form	 action = "index.php" method = "get">
	 			 <input type="submit" value="Wstecz" name="wstecz">
	 </form>
</body>
</html>
