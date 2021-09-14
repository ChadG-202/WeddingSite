<?php
    include_once"mysql.php";
    //setting data to store
    $Fname = $_POST['Fname'];
    $Email = $_POST['email'];
    $Attending = $_POST['Attending'];
    //adding date product is added to store
    $DateAdded = date("y/m/d");
    //input data into sell table
    $sql=mysqli_query($mysqli, "insert into WeddingGuests(FullName, Email, Attending, DateAdded) values('$Fname', '$Email', '$Attending', '$DateAdded')");
    //return to main page
    header('Location: index.html');
?>