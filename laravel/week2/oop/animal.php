<?php

class Animal {
    function __construct($name,$legs = 2, $cold_blooded = "false"){
        $this->name = $name;
        $this->legs = $legs;
        $this->cold_blooded = $cold_blooded;
    }

    function get_name(){
        return $this->name;
    }
    function get_legs(){
        return $this->legs;
    }
    function get_cold_blooded(){
        return $this->cold_blooded;
    }
}

?>