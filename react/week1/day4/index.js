/*
Perintahnya adalah mengubah object menjadi class.
yang saya tangkap adalah:
1.  properti class Benda sama dengan property class HalGhaibLain (berarti diturunkan)
    lalu membuat suatu objek dari class benda
2.  kemudian membuat class baru yg inherit dengan class Benda, 
    tetapi ditambahkan property dasar dan method actionLain
*/

//buat class
export class MakhlukGhaib {
    constructor(nama, kekuatan){
        this.nama = nama
        this.kekuatan = kekuatan
    }

    umur = 18;
    attack() {
        console.log('Senyum');
    }
}


class HalGhaibLain {
    constructor(nama, bahan, actionName){
        this.nama = nama
        this.bahan = bahan
        this.actionName = actionName
    }

    action() {
        console.log(this.actionName);
    }
}

class Benda extends HalGhaibLain{
    constructor(nama, bahan, actionName){
        super(nama, bahan, actionName)
    }
}

// buat objek laptop dari class benda
const laptop = new Benda("Laptop", "Besi", "Mengetik");
console.log(laptop);
laptop.action();

// buat class baru yg inherit dengan class Benda, tambahkan property dasar dan method actionLain
class InheritBenda extends Benda {
    constructor(nama, bahan, actionName, dasar){
        super(nama, bahan, actionName)
        this.dasar = dasar
    }

    actionlain(){
        console.log("ini action lain");
        
    }
}

// buat objek dan tampilkan
const jemuran = new InheritBenda("jemuran", "kayu", "menyanggah", "hmmmmmm")
console.log(jemuran);
jemuran.action();
jemuran.actionlain(); // ini action lain

/*================================================================================================================*/

// cara mengimport kondisi di bawah ini dengan alias AliasNamed:

 // Anda sedang berada di satu directory dengan nama file contoh.js
 export class NamedExport {
    constructor(test){
        this.test = test;
    }
}

/*
caranya adalah dengan:
import {NamedExport as AliasNamed} from "./contoh.js"
*/

/*===============================================================================================================

Bisakah mengimport suatu module di luar direktori?
Apa pengaruhnya pada saat proses production?

Jika maksudnya adalah di luar folder:

bisa, tetapi diberikan ../ jika berada di folder sebelumnya, dst
contoh import {Name as nama} from "../../module.js" (jika berada di 2 folder sebelumnya).

Pada proses production/development akan dibutuhkan banyak file, seperti file html, css, javascript, file gambar, dll
Oleh karena itu file-file tersebut harus dikelompokkan dalam folder tertentu, agar tersusun rapi dan mudah ditelusuri
oleh karena itu module-module javascript sebaiknya berada di direktori yang sama.
alasan lain yaitu lebih singkat jika hanya menulis ./ dibandingkan ../ dst

Jika maksudnya adalah di luar environtment/berada di aplikasi lain:

Tidak bisa, tetapi bisa melakukan komunikasi antar bagian dengan menggunakan API.
mekanisme API adalah dengan mengirimkan suatu kode request ke suatu env/aplikasi,
kemudian env/aplikasi akan memproses lalu akan mengirimkan sebuah response berupa kode juga
Kode yang biasa digunakan berformat JSON atau XML

===============================================================================================================*/

// cara mengeksport default function helloCat() dengan hanya mengubah baris atas atau bawah function

function helloCat() {
    alert('Hello Cat !!');
}


const kirimHelloCat = helloCat
export default kirimHelloCat

/*===================================================================================================================*/
/*

cara mengimport sebagai alias dari export default :

// folder berada di user.js
export default class User {
   constructor(name) {
       this.name = name;
   }
}

caranya dengan:
import NamaAlias from "./user.js"; (atau bisa juga import {default as NamaAlias} from "./user.js")

~penulisan NamaAlias tidak boleh dalam {}, karena dari default export.
~jika mau di dalam {}, maka tulis default as NamaAlias
~kemudian, NamaAlias bebas ditulis sebagai apa saja, tidak harus sama dengan nama yang diexport.
~hal ini dikarenakan default export hanya bisa dilakukan satu kali pada satu file
~sehingga, NamaAlias bisa ditulis sebagai apa saja, karena sudah pasti berasal dari export default
~dan dalam hal ini sudah pasti dari class User
*/