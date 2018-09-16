<?php
$login=0;
if(isset($_POST['submit_li']) && $login == true){
    $login++;
}
 else if(isset($_POST['submit_li']) && $login > 1) {
      include_once 'dbh.php';
      // username and password sent from form 
      
      $username = mysqli_real_escape_string($con, $_POST['username']);
      $password = mysqli_real_escape_string($con, $_POST['password']); 
      
      $sql = "SELECT user_id FROM userslumo WHERE username = '$username' and pwd = '$password';";
      $result = mysqli_query($con, $sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count > 0) {
         session_start();
         $_SESSION['username'] = $username;
         header("location: option_pg.php");
      }else {
         $error = "Your Login Name or Password is invalid";
      }

 }

else if (isset($_POST['submit_su'])){
    include_once 'dbh.php';


    $name=mysqli_real_escape_string($con, $_POST['name']);
    $username=mysqli_real_escape_string($con, $_POST['username']);
    $pwd=mysqli_real_escape_string($con, $_POST['password']);
    
    if (empty($name) || empty($username) ||empty($pwd)){
        echo "<script type='text/javascript'>alert('Empty Parameters!');</script>";
        echo "<a href=\"javascript:history.go(-1)\">GO BACK</a>";
        
    } 
    
    else {
        $sql="SELECT * FROM userslumo WHERE username = '$username'";
        $result = mysqli_query($con, $sql);
        $resultCheck= mysqli_num_rows($result);
        if($resultCheck > 0){
            echo "<script type='text/javascript'>alert('Username taken!');</script>";
            echo "<a href=\"javascript:history.go(-1)\">GO BACK</a>";
            
        } else{
            //insert user
            $sql = "INSERT INTO userslumo (name, username, pwd) VALUES ('$name','$username','$pwd');";
            $result = mysqli_query($con, $sql);
            
            session_start();
            $_SESSION['username'] = $username;

            header("Location: option_pg.php");
        }
    
    
    }
}
?>
