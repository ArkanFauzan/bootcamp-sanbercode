<?php

function papan_catur($angka) {

    $hasil = "";
    for ($i=0; $i < $angka; $i++) { 
        if ($i%2==0) {
            for ($j=0; $j <=$angka*2-1 ; $j++) { 
                
                $hasil .= $j%2==0?"#":"&nbsp;&nbsp;";
            }
            $hasil .="<br>";
        }
        else{
            for ($j=0; $j <=$angka*2-2 ; $j++) { 
                
                $hasil .= $j%2==0?"&nbsp;&nbsp;":"#";
            }
            $hasil .="<br>";
        }
    }

    return $hasil."<br>";
}

// TEST CASES
echo papan_catur(4);
/*
# # # #
 # # #
# # # #
 # # #
 */

echo papan_catur(8);
/* 
# # # # # # # #
 # # # # # # # 
# # # # # # # #
 # # # # # # # 
# # # # # # # #
*/

echo papan_catur(5);
/*
# # # # #
 # # # #
# # # # #
 # # # # 
# # # # #
*/

echo papan_catur(15);