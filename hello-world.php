<?php
// A simple web site in Cloud9 that runs through Apache
// Press the 'Run' button on the top to start the web server,
// then click the URL that is emitted to the Output tab of the console
session_start();
echo 'Hello world from Cloud9!';
echo 'caca';

//$_SESSION["test"] = 32;
try {
    $dbh = new PDO("mysql:host=0.0.0.0;dbname=c9", "mathieumorrisset", "");
    var_dump($_SESSION);
    var_dump($dbh);
    phpinfo();
}catch(PDOException $test){
    
    $test->getMessage();
}

?>
