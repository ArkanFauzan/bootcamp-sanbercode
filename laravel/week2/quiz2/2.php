<?php
/*
Langkah penyelesaian:
1. buat fungsi perolehan_medali() dengan parameter $arr
2. buat variabel output kosong ($output=[])
3. melakukan perulangan untuk setiap index $arr
4. membuat $tambah_negara=true
5. melakukan pengecekan apakah nama negara pada $output sudah ada
6. jika ada, tambahkan perolehan medalinya dan ubah $tambah_negara menjadi false
7. jika $tambah_negara bernilai true (nama negara belum ada), maka tambahkan array yang berisi
   nama negara=input negara kemudian emas, perak, perunggu yang bernilai 0. selanjutnya tambahkan perolehan medalinya 
   sesuai nilai input
8. return $output. namun, jika $output===[] return "no data"

keterangan lengkap bisa dilihat pada komentar function
*/

function perolehan_medali($arr){

    // deklarasi variabel output
    $output=[];
    // melakukan perulangan untuk setiap index input
    foreach ($arr as $input) {
        // mengambil nama negara dan jenis medali
        $negara = $input[0];
        $medali = $input[1];

        // buat variabel tambah negara
        $tambah_negara=true;

        // melakukan pengecekan pada variabel output, 
        // apakah sudah ada nama negara atau belum,
        // jika ada, tambahkan medalinya
        // dan ubah variabel tambah negara menjadi false
        foreach ($output as $key => $value) {
            if ($negara==$value["negara"]) {
                $output[$key][$medali] += 1;
                $tambah_negara=false;
            }
        }

        // jika negara belum ada, maka tambahkan negaranya
        if ($tambah_negara===true) {
            // menambah negara
            $output[] = [
                "negara"=>$negara,
                "emas"=>0,
                "perak"=>0,
                "perunggu"=>0,
            ];

            // menambah perolehan medali sesuai jenis medali
            $output[count($output)-1][$medali] += 1;
        }
    }

    // return variabel output
    if ($output===[]) {
        return "no data";
    }
    else{
        return $output;
    }

}

 // TEST CASES
 echo "<pre>";
 print_r (perolehan_medali(
   array(
    array('Indonesia', 'emas'), 
    array('India', 'perak'), 
    array('Korea Selatan', 'emas' ), 
    array('India', 'perak'), 
    array('India', 'emas'), 
    array('Indonesia', 'perak'), 
    array('Indonesia', 'emas') 
   )
  ));
  echo "</pre>";
/**
 * output: 
 * Array(
 *    Array (
 *      [negara] => 'Indonesia'
 *      [emas] => 2
 *      [perak] => 1 
 *      [perunggu] => 0
 *    ),
 *    Array (
 *      [negara] => 'India'
 *      [emas] => 1
 *      [perak] => 2 
 *      [perunggu] => 0
 *    ),
 *    Array (
 *      [negara] => 'Korea Selatan'
 *      [emas] => 1
 *      [perak] => 0 
 *      [perunggu] => 0
 *    )
 * )
 */
 echo "<pre>";
 print_r(perolehan_medali([])); // no data
 echo "</pre>";
?>