<?php

function palindrome_angka($angka) {
    // lakukan penambahan angka + 1 sampai didapatkan palindrome berikutnya
    for (;;) { 
        // tambahkan nilai angka
        $angka += 1;
        // ubah angka menjadi string
        $str_angka= (string) $angka;
        // reverse string
        $str_balik=implode("",array_reverse(str_split($str_angka,1)));

        // jika nilainya sama (palindrome) = tampilkan nilai angka & hentikan perulangan
        if($str_angka===$str_balik){
            $hasil = $angka;
            break;
        }
    }

    return $hasil."<br>";
}

// TEST CASES
echo palindrome_angka(8); // 9
echo palindrome_angka(10); // 11
echo palindrome_angka(117); // 121
echo palindrome_angka(175); // 181
echo palindrome_angka(1000); // 1001

echo palindrome_angka(38);
?>