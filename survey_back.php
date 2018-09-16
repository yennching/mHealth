<?php
include_once 'dbh.php';

$date = date("Y/m/d");
$happy_score=$_POST['happy_score'];
$social_score=$_POST['social_score'];
$health_score=$_POST['health_score'];
$vice_score=$_POST['vice_score'];
session_start();
$username = $_SESSION['username'];
$sql = "INSERT INTO scores (date, health_score, social_score, phys_score, vice_score, username) VALUES ('$date','$happy_score','$social_score', '$health_score', '$vice_score', '$username');";

$result = mysqli_query($con2, $sql);
?>