<?php
include_once("animal.php");
class Ape extends Animal{
    function __construct($name, $legs=2, $cold_blooded="false"){
        parent:: __construct($name,$legs,$cold_blooded);
    }

    function yell(){
        echo "Auooo";
    }
}

?>