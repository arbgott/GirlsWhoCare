//
// var r = confirm("Are you sure you want to submit this question?");
// if (r == true) {
//   x = "Message sent!"
// } else {
//   x = "Message cancelled"
// }
// }
// alert(x);

function chat() {
  var customerName = prompt("Please enter your name","<name>");
    // if(inputQuestions != null){
      document.getElementById("username").innerHTML =
      "Hello " + customerName + "! Please enter any questions you have";
    // }
    var question =

}

<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
