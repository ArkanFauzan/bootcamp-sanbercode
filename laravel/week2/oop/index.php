<?php

// reqiure file
include_once("animal.php");
include_once("ape.php");
include_once("frog.php");


// instansiasi sheep
$sheep = new Animal("shaun");

echo $sheep->name."<br>"; // "shaun"
echo $sheep->legs."<br>"; // 2
echo $sheep->cold_blooded."<br>"."<br>"; // false

echo $sheep->get_name()."<br>"; // "shaun"
echo $sheep->get_legs()."<br>"; // 2
echo $sheep->get_cold_blooded()."<br>"."<br>"; // false


// instansiasi sungokong
$sungokong = new Ape("kera sakti");
$sungokong->yell(); echo "<br>"; // "Auooo"


// instansiasi buduk
$kodok = new Frog("buduk");
$kodok->jump(); echo "<br>"; // "hop hop"

echo $kodok->get_name(); // buduk

print_r($sheep);
print_r($sungokong);
print_r($kodok);
?>