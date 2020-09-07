<?php

    // membuat class Hewan yang bisa digunakan dimana2 (dengan awalan trait)
    // tidak bisa diinstansiasi
    trait Hewan{
        public $nama;
        public $darah=50;
        public $jumlahKaki;
        public $keahlian;

        // dapat menggunakan nilai dari class yang menggunakan trait Hewan
        public function atraksi(){
            return "$this->nama sedang $this->keahlian";
        }
    }




    // membuat abstrack class Fight sebagai blueprint (dengan awalan abstract class)
    // tidak bisa diinstansiasi
    abstract class Fight{
        public $attackPower;
        public $deffencePower;

        // class turunan wajib menggunakan method ini
        abstract public function serang($mangsa);
        abstract public function diserang($predator);
    }




    // membuat class elang yang menggunakan abstract fight
    class Elang extends Fight{

        // menggunakan properti dan method trait Hewan (dengan awalan use)
        use Hewan;
        
        public function __construct()
        {
            // mengganti properti dari trait
            $this->nama='elang1';
            $this->jumlahKaki=2;
            $this->keahlian='terbang tinggi';
            $this->attackPower=10;
            $this->deffencePower=5;

            // mendefinisikan jenis hewan
            $this->jenisHewan = 'Elang';
        }

        public function getInfoHewan(){
            echo "Jenis hewan = $this->jenisHewan <br>";
            echo "Nama hewan = $this->nama <br>";
            echo "Jumlah kaki = $this->jumlahKaki <br>";
            echo "Keahlian = $this->keahlian <br>";
            echo "Attack Power = $this->attackPower <br>";
            echo "Deffence Power = $this->deffencePower <br><br>";
        }

        public function serang($mangsa){
            echo "$this->nama sedang menyerang $mangsa->nama <br>";

            // panggil method diserang dari method mangsa
            $mangsa->diserang($this);
        }

        public function diserang($predator){
            echo "$this->nama sedang diserang $predator->nama <br>";
            $this->darah = $this->darah - ($predator->attackPower/$this->deffencePower);

            echo "sisa darah $this->nama = $this->darah <br><br>";
        }
    }




    // membuat class harimau yang menggunakan abstract fight
    class Harimau extends Fight{

        // menggunakan properti dan method trait Hewan (dengan awalan use)
        use Hewan;

        public function __construct()
        {
            // mengganti properti dari trait
            $this->nama='harimau1';
            $this->jumlahKaki=4;
            $this->keahlian='lari cepat';
            $this->attackPower=7;
            $this->deffencePower=8;

            // mendefinisikan jenis hewan
            $this->jenisHewan = 'Harimau';
        }

        public function getInfoHewan(){
            echo "Jenis hewan = $this->jenisHewan <br>";
            echo "Nama hewan = $this->nama <br>";
            echo "Jumlah kaki = $this->jumlahKaki <br>";
            echo "Keahlian = $this->keahlian <br>";
            echo "Attack Power = $this->attackPower <br>";
            echo "Deffence Power = $this->deffencePower <br><br>";
        }

        public function serang($mangsa){
            echo "$this->nama sedang menyerang $mangsa->nama <br>";

            // panggil method diserang dari method mangsa
            $mangsa->diserang($this);
        }

        public function diserang($predator){
            echo "$this->nama sedang diserang $predator->nama <br>";
            $this->darah = $this->darah - ($predator->attackPower/$this->deffencePower);

            echo "sisa darah $this->nama = $this->darah <br><br>";
        }
    }


    // inisiasi objek
    $elang1 = new Elang;
    $harimau1 = new Harimau;

    $elang1->getInfoHewan();
    $harimau1->getInfoHewan();

    echo $elang1->serang($harimau1);
    echo $elang1->serang($harimau1);
    // echo $elang1->serang($harimau1);
    // echo $elang1->serang($harimau1); 
    
    // echo "<br><br><br>";

    echo $harimau1->serang($elang1);
    echo $harimau1->serang($elang1);

    // echo $elang1->atraksi(); 
?>