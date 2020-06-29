// 1. this adalah sebuah kata kunci untuk merepresentasikan sebuah objek. 
// pada javascript this hanya dimiliki oleh global scope dan function

// 2.
// const getNamaLengkap = (namaDepan, namaBelakang)=>`${namaDepan} ${namaBelakang}`;
  
// const getNamaDepan = namaLengkap => namaLengkap.split(' ')[0];
  
// const consoleHai = ()=>console.log('hai');

// 3. 
// dengan merubahnya menjadi regular function dikarenakan arrow function tidak memiiki this 
// sehingga akan mencari nilai this pada scope luarnya. this hanya dimiliki oleh global scope dan juga regular function
// maka pada arrow function akan dicari nilai this pada scope terluarnya, lalu akan ditemukan niai this berupa object window
// kemudian akan undefined karena yang diakses adalah this.name atau sama dengan window.name, yang mana tidak ada (undefined).
// Lain hal nya jika merubah arrow function menjadi regular function, maka akan memiliki this. 
// nilai this akan sama object yang memanggil function tersebut (sebuahObject)
// kemudian akan mereturn this.name atau sama dengan sebuahObject.name yang berisi Bejo Jhonson

// const sebuahObject = {
//     name: 'Bejo Jhonson',
//     getName() {
//         return this.name;
//     }
//  }

//  console.log(sebuahObject.getName());
  
//  const sebuahObjectLain = {
//     name: 'Bejo Jhonson',
//     getName: function(){
//         return this.name;
//     }
//  }

//  console.log(sebuahObjectLain.getName());

// 4. 
// const profil = {
//     namaDepan: 'Bejo',
//     namaBelakang: 'Jhonson',
//     getName() {
//         this.name = `${this.namaDepan} ${this.namaBelakang}`;
//         return this.name;
//     }
//  }
 
//  profil.getName();

//  kode ini dapat berjalan dengan benar, hanya saja perlu diberikan console.log untuk menampilkan outputnya. 
//  kode tersebut benar dikarenakan fungsi getName merupakan regular function yang memiliki this
//  nilai this akan mengacu pada object yang memanggilnya, yaitu profil
//  sehingga this.namaDepan akan sama dengan profil.namaDepan yang akan berisi Bejo 
//  serta this.namaBelakang akan sama dengan profil.namaBelakang yang akan berisi Jhonson
//  kemudian this.name akan membentuk property baru yang akan sama dengan profil.name, lalu mereturn hasilnya
//  profil.name akan undefine ketika profil.getName() belum dipanggil
//  namaun profil.name akan memiliki value 'Bejo Jhonson' ketika profil.getName() sudah dipanggil

//  untuk menampilkan outputnya
//  console.log(profil.getName());
