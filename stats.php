<?php
include_once 'dbh.php';
// run query
$sql="SELECT * FROM scores";
$records = mysqli_query($con2, $sql);

// set array
$happy = array();
$phys = array();
$social = array();
$vice = array();
$date = array();

// look through query
while($row = mysqli_fetch_assoc($records)){

  // add each row returned into an array
    array_push($happy, $row['health_score']);
    array_push($phys, $row['phys_score']);
    array_push($social, $row['social_score']);
    array_push($vice, $row['vice_score']);
    array_push($date, $row['date']);
}


?>