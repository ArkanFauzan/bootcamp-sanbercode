const arraySatu = [1, 2, 3, 4];
const arrayDua = [5, 6, 7, 8];
const arrayTiga = [9, 10, 11, 12];
const arrayEmpat = [13, 14, 15, 16];

// cara menggabungkannya:

// 1. dengan .concat() berulang-ulang
let arraySatuEmpat1 = arraySatu.concat(arrayDua).concat(arrayTiga).concat(arrayEmpat);
console.log(arraySatuEmpat1);
// Pembahasan: tidak efektif (kodenya panjang), tidak merubah value array asal 

// 2. dengan menggunkan spread operator (agar array yg digabung tidak dalam satu index)
arraySatuEmpat2 = [...arraySatu, ...arrayDua, ...arrayTiga, ...arrayEmpat];
console.log(arraySatuEmpat2);
// pembahasan: cukup baik tapi kebanyakan bikin ..., tidak merubah value array asal karena dibuat variabel baru

// 3. dengan menggunakan push (harus disertai spread operator agar array yg digabung tidak hanya dalam 1 index)
arraySatuEmpat3 = arraySatu.push(...arrayDua,...arrayTiga,...arrayEmpat);
console.log(arraySatuEmpat3);   // akan berisi panjang array yang baru (16)
console.log(arraySatu);         // akan mengubah value arraySatu
// pembahasan: Merubah value array asal, apabila memang perlu/harus mengubahnya, method push sangat cocok digunakan.
// namun apabila hanya ingin memproses hasil array yang sudah digabung, menggunakan push sangat tidak disarankan

// buat array baru karena arraySatu sudah dirubah
let array_satu = [1,2,3,4];

// 4. dengan .concat(array1, array2, dst)
arraySatuEmpat4 = array_satu.concat(arrayDua,arrayTiga,arrayEmpat);
console.log(arraySatuEmpat4);
// pembahasan: sangat efektif, tidak merubah value array asal

// Kesimpulan: prefer dari opsi 4 ke 1. Lebih baik menggunakan .concat(array1,array2,dst), jika tidak ingin merubah value array asal. 
// Namun jika perlu mengubah value array asal, lebih baik menggunakan .push()


/*===================================================================================================================*/

const objectBebas = {
    aspal: 'hitam',
    roket: 'meluncur',
    joker: 'villain',
    unta: 'arab',
    ninja: 'hatori'
}

// cara mendestruksi object dengan menggunakan alias
// untuk property object tidak harus urut, tetapi jika ingin mendestruksi array, harus urut
const {roket:r, aspal:a, unta:u, ninja:n, joker:j} = objectBebas;
console.log(a, r, j, u, n);
 

/*====================================================================================================================*/

const unfilteredArray = [
    {
        name: 'Bejo',
        isAllowed: true
    },
    {
        name: 'Jhonson',
        isAllowed: false
    },
    {
        name: 'Juara',
        isAllowed: true
    },
    {
        name: 'Panco',
        isAllowed: false
    },
    {
        name: 'Nasional',
        isAllowed: true
    }
]

// cara untuk memfilter array
// array filter akan mereturn element array yang memenuhi kondisi (true)
// array yang akan di filter adalah yg isAllowed = true
// maka cukup dengan mengakses isAllowwed, jika true, maka kondisi akan true, dan element tersebut akan direturn
// sebenarnya bisa juga dengan value.isAllowed==true, tetapi boros kode
let bejoJuaraNasional = unfilteredArray.filter(value => value.isAllowed)
console.log(bejoJuaraNasional);
