<?php
include_once"mysql.php";
//setting data to store
$Fname = $_POST['Fname'];
$Email = $_POST['email'];
$Attending = $_POST['Attending'];
$Alergies_FoodReq = $_POST['Food'];
//adding date product is added to store
$DateAdded = date("y/m/d");
//input data into sell table
$sql=mysqli_query($mysqli, "insert into WeddingGuests(FullName, Email, Attending, DietRequirments, DateAdded) values('$Fname', '$Email', '$Attending', '$Alergies_FoodReq', '$DateAdded')");
//return to main page
header('Location: index.html');
?>