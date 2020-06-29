<?php
function ubah_huruf($string){
//kode di sini
    // bikin array huruf
    $arr_huruf = str_split("abcdefghijklmnopqrstuvwxyz");
    // memecah input menjadi array
    $arr_string = str_split($string);

    $i=0;
    foreach ($arr_string as $val) {
        $arr_string[$i] = $arr_huruf[array_search($val,$arr_huruf)+1];
        $i++;
    }

    return implode("",$arr_string)."<br>";
}

// TEST CASES
echo ubah_huruf('wow'); // xpx
echo ubah_huruf('developer'); // efwfmpqfs
echo ubah_huruf('laravel'); // mbsbwfm
echo ubah_huruf('keren'); // lfsfo
echo ubah_huruf('semangat'); // tfnbohbu

function ubah($str){
    $huruf= "abcdefghijklmnopqrstuvwxyz";
    $hasil="";
    for ($i=0; $i < strlen($str) ; $i++) { 
        $pos = strpos($huruf,$str[$i]);
        if ($pos==25) {
            $hasil .= $huruf[0];
        }
        else {
            $hasil .= $huruf[$pos+1];
        }
    }
    return $hasil."<br/>";
}

echo ubah('wow'); // xpx
echo ubah('developer'); // efwfmpqfs
echo ubah('laravel'); // mbsbwfm
echo ubah('keren'); // lfsfo
echo ubah('semangatzzz'); // tfnbohbuaaa
?>