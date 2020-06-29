<?php
function tentukan_deret_aritmatika($arr) {

    // hitung jumlah array
    $count = count($arr);

    if ($count<2) {
        return "false";
    }
    else{
        $aritmatika = "true";
        $selisih = $arr[0]-$arr[1];

        for ($i=1; $i < $count-1; $i++) { 
            if ($selisih !== $arr[$i]-$arr[$i+1]) {
                $aritmatika = "false";
            } 
        }
        return $aritmatika."<br>";
    }
}

// TEST CASES
echo tentukan_deret_aritmatika([1, 2, 3, 4, 5, 6]);// true
echo tentukan_deret_aritmatika([2, 4, 6, 12, 24]);// false
echo tentukan_deret_aritmatika([2, 4, 6, 8]); //true
echo tentukan_deret_aritmatika([2, 6, 18, 54]);// false
echo tentukan_deret_aritmatika([1, 2, 3, 4, 7, 9]);// false
?>