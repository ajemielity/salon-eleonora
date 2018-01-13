<?php

    $to = "ola.jemielity@gmail.com";

    if($_POST){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phonenumber = $_POST['phonenumber'];
        $message = $_POST['message'];

        mail($to, "New message from " . $name, $phonenumber, $message, "From: $email" );
    }
?>