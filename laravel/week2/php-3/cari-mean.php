<?php

function cari_mean($arr){
    $hasil = 0;
    for ($i=0; $i < count($arr); $i++) { 
        $hasil += $arr[$i];
    }
    $hasil /= count($arr);

    return round($hasil)."<br>";
}

// TEST CASE 
echo cari_mean([1, 2, 3, 4, 5]); // 3
echo cari_mean([3, 5, 7, 5, 3]); // 5
echo cari_mean([6, 5, 4, 7, 3]); // 5
echo cari_mean([1, 3, 3]); // 2
echo cari_mean([7, 7, 7, 7, 7]); // 7

?>