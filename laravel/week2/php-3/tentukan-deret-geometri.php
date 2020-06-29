<?php
function tentukan_deret_geometri($arr) {
// kode di sini
    // hitung jumlah array
    $count = count($arr);

    if ($count<2) {
        return "false";
    }
    else{
        $geometri = "true";
        $rasio = $arr[0]/$arr[1];

        for ($i=1; $i < $count-1; $i++) { 
            if ($rasio !== $arr[$i]/$arr[$i+1]) {
                $geometri = "false";
            } 
        }
        return $geometri."<br>";
    }
}
//TEST CASES
echo tentukan_deret_geometri([1, 3, 9, 27, 81]); // true
echo tentukan_deret_geometri([2, 4, 8, 16, 32]); // true
echo tentukan_deret_geometri([2, 4, 6, 8]); // false
echo tentukan_deret_geometri([2, 6, 18, 54]); // true
echo tentukan_deret_geometri([1, 2, 3, 4, 7, 9]); //false
?>