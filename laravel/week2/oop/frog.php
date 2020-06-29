<?php
include_once("animal.php");
class Frog extends Animal{
    function __construct($name, $legs=4, $cold_blooded="false"){
        parent:: __construct($name,$legs,$cold_blooded);
    }

    function jump(){
        echo "hop hop";
    }
}

?>