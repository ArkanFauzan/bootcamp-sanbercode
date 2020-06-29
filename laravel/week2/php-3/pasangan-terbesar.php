<?php
function pasangan_terbesar($angka){
    $angka = (int) $angka;
    $str_angka= (string) $angka;

    // deklarasikan nilai awal pasangan terbesar
    $pasangan_terbesar = 0;

    // jika hanya 1 atau 2 digit, langsung return aja
    if (strlen($angka)<=2) {
        return $angka;
    }
    else{
        // lakukan perulangan untuk memperoleh pasangan angka
        for ($i=0; $i < strlen($angka)-1 ; $i++) { 
            $str_pasangan = $str_angka[$i].$str_angka[$i+1];

            // ubah jadi integer 
            $pasangan = (int) $str_pasangan;

            if ($pasangan>$pasangan_terbesar) {
                $pasangan_terbesar = $pasangan;
            }
        }

        return $pasangan_terbesar."<br>";
    }
}

// TEST CASES
echo pasangan_terbesar(641573); // 73
echo pasangan_terbesar(12783456); // 83
echo pasangan_terbesar(910233); // 91
echo pasangan_terbesar(71856421); // 85
echo pasangan_terbesar(79918293); // 99


?>