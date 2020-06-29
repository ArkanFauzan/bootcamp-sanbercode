<?php
function skor_terbesar($arr){

    // difilter berdasarkan kelas
    $laravel = array_filter($arr, function($val){return ($val["kelas"]=="Laravel");});
    $react_native = array_filter($arr, function($val){return ($val["kelas"]=="React Native");});
    $react_js = array_filter($arr, function($val){return ($val["kelas"]=="React JS");});

    // cari nilai tertinggi tiap kelas
    $n_laravel = $n_react_native = $n_react_js = 0;

    foreach ($laravel as $val) {
        if ($val["nilai"]>$n_laravel) {
            $n_laravel = $val["nilai"];
        }
    }
    foreach ($react_native as $val) {
        if ($val["nilai"]>$n_react_native) {
            $n_react_native = $val["nilai"];
        }
    }
    foreach ($react_js as $val) {
        if ($val["nilai"]>$n_react_js) {
            $n_react_js = $val["nilai"];
        }
    }
        
    // ambil array yang memiliki nilai paling besar
    foreach ($laravel as $val) {
        if($n_laravel==$val["nilai"]){
            $h_laravel[]=$val;
        }
    }
    foreach ($react_native as $val) {
        if($n_react_native==$val["nilai"]){
            $h_react_native[]=$val;
        }
    }
    foreach ($react_js as $val) {
        if($n_react_js==$val["nilai"]){
            $h_react_js[]=$val;
        }
    }

    // gabungkan dalam satu array
    $hasil["Laravel"]= $h_laravel[0];
    $hasil["React Native"]= $h_react_native[0];
    $hasil["React JS"]= $h_react_js[0];

    // tampilkan
    echo "<pre>";
        print_r($hasil);
    echo "</pre>";
}

// TEST CASES
$skor = [
  [
    "nama" => "Bobby",
    "kelas" => "Laravel",
    "nilai" => 78
  ],
  [
    "nama" => "Regi",
    "kelas" => "React Native",
    "nilai" => 86
  ],
  [
    "nama" => "Aghnat",
    "kelas" => "Laravel",
    "nilai" => 90
  ],
  [
    "nama" => "Indra",
    "kelas" => "React JS",
    "nilai" => 85
  ],
  [
    "nama" => "Yoga",
    "kelas" => "React Native",
    "nilai" => 77
  ],
];

print_r(skor_terbesar($skor));
/* OUTPUT
  Array (
    [Laravel] => Array
              (
                [nama] => Aghnat
                [kelas] => Laravel
                [nilai] => 90
              )
    [React Native] => Array
                  (
                    [nama] => Regi
                    [kelas] => React Native
                    [nilai] => 86
                  )
    [React JS] => Array
                (
                  [nama] => Indra
                  [kelas] => React JS
                  [nilai] => 85
                )
  )
*/

function show($arr){
  $output=[];  
  foreach ($arr as $input) {
    $kelas=$input["kelas"];
    if (isset($output[$kelas])) {
      if ($output[$kelas]["nilai"]<$input["nilai"]) {
        $output[$kelas]=[
          "nama"=>$input["nama"],
          "kelas"=>$input["kelas"],
          "nilai"=>$input["nilai"]
        ];
      }
    }
    else{
      $output[$kelas]=[
        "nama"=>$input["nama"],
        "kelas"=>$input["kelas"],
        "nilai"=>$input["nilai"]
      ];
    }
  }

  return $output;
}

echo "hahahahahah<pre>";
print_r(show($skor));
echo "</pre>";
?>