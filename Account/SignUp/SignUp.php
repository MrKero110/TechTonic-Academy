<?php
$conn=mysqli_connect("localhost","root","","techtonic-academy");
if($conn){
    echo "Connected";
}
else{
    echo "Not Connected";
}

$username=$_POST['username'];
$password=$_POST['password'];

$data = "INSERT INTO login VALUES('','$username','$password')";
$check = mysqli_query($conn,$data);

if($check){
    echo "Data sended";
}
else{
    echo "Data not send";
}

?>
