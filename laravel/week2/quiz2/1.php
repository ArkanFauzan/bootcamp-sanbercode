<?php

/*

langkah penyelesaian:
1. buat function hitung yang menerima string operasi matematika
2. dilakukan pengecekan apakah input merupakan operasi *,+,:,%, atau -
3. dilakukan pemecahan string berdasarkan operatornya
4. dilakukan operasi sesuai operatornya
5. dilakukan pembuatan variabel hasil sebagai output
6. jika input tidak sesuai format, maka hasil = input tidak valid
7. mereturn nilai dari variabel hasil
8. melakukan pemanggilan fungsi hitung

*/

  function hitung($string_data)
  {
    if (strpos($string_data,"*")) {
        $nilai = explode("*",$string_data);
        $hasil = $nilai[0]*$nilai[1];
    }
    elseif (strpos($string_data,"+")) {
        $nilai = explode("+",$string_data);
        $hasil = $nilai[0]+$nilai[1];
    }
    elseif (strpos($string_data,":")) {
        $nilai = explode(":",$string_data);
        $hasil = $nilai[0]/$nilai[1];
    }
    elseif (strpos($string_data,"%")) {
        $nilai = explode("%",$string_data);
        $hasil = $nilai[0]%$nilai[1];
    }
    elseif (strpos($string_data,"-")) {
        $nilai = explode("-",$string_data);
        $hasil = $nilai[0]-$nilai[1];
    }
    else{
        $hasil = "input tidak valid";
    }

    return $hasil."<br>";
  }

  // TEST CASES
  echo hitung("102*2"); //204
  echo hitung("2+3"); //5
  echo hitung("100:25"); //4
  echo hitung("10%2"); //0
  echo hitung("99-2"); //97
?>