<?php session_start();
if (!isset($_SESSION["zalogowany"] or $_SESSION["zalogowany"]==0)){
	header("Location: index.php");
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
	<?php
	require_once("funkcje.php");
	echo "Zalogowano: " . $_SESSION["zalogowany"];
	?>
<form action="user.php" method="post" enctype="multipart/form-data">
	<input name ="myfile" type="file">

</form>

	<form	 action = "index.php" method = "get">
				 <input type="submit" value="Wyloguj" name="wyloguj">
</form>
<?php
$currentDir=getcwd();
$uploadDirectory="/zdjeciaUzyszkodnikow/";
$fileName= $_FILES["myfile"]["name"];
$fileSize= $_FILES["myfile"]["size"];
$fileTmpName= $_FILES["myfile"]["tmp_name"];
$fileType= $_FILES["myfile"]["type"];

if ($fileName != "" and ($fileType=="image/png" or $fileType=="image/jpeg" or $fileType=="image/JPEG" or $fileType=="image/PNG")){
	$uploadPath= $currentDir . $uploadDirectory . $fileName;
	if (move_uploaded_file($fileTmpName, $uploadPath)){
		echo "<img src=$uploadPath" alt="Nie ma fotki" height=\"$fileSize\" width=\"$size\">";;
	}
}


if (isset($_GET["wyloguj"])){
 	header("Location: index.php");
}
?>
</body>
</html>
