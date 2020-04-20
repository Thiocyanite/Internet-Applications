<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
	<?php
	require("funkcje.php");
	if (isset($_GET["czas"])){
		$time= $_GET["czas"];
		setcookie("ciastko", "7", time() + $time,"/");
		echo "Ciastko zrobione";
}
	 ?>
	 <form	 action = "index.php" method = "get">
	 			 <input type="submit" value="Wstecz" name="wstecz">
	 </form>
</body>
</html>
