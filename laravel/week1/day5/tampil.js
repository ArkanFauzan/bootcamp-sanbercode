function rubah(angka){
    var reverse = angka.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
  }

function tampil(items){
    //ambil panjang array
    var panjangArray = items.length;
    var hasil="";

    //lakukan perulangan untuk menampilkan barang
    for(var i=0;i<panjangArray;i++){

        // membuat class row setiap setiap kelipatan 3
        // element pertama diberi div row
        if(i%3==0){
            hasil += '<div class="row mb-3">';
            // tutup div row di 2 perulangan setelah ini
            var penutupDiv = i+2;
        }

        //membuat col-4 beserta isi contentnya
        hasil +='<div class="col-4" style="text-align:center;float:left">'+
                    '<div class="card" style="width: 18rem;margin:0 auto">'+
                        '<img src="'+items[i][4]+'" class="card-img-top" alt="'+items[i][1]+'">'+
                        '<div class="card-body">'+
                            '<h5 class="card-title" id="itemName">'+items[i][1]+'</h5>'+
                            '<p class="card-text" id="itemDesc">'+items[i][3]+'</p>'+
                            '<p class="card-text">Rp. '+rubah(items[i][2])+'</p>'+
                            '<a href="#" onclick="add()" class="btn btn-primary addcart" id="'+items[i][0]+'">Tambahkan ke keranjang</a>'+
                        '</div>'+
                    '</div>'+
                '</div>';

        // tutup div row setiap kelipatan 3 atau sisa item tinggal 1
        if(i==penutupDiv || panjangArray-i==1){
            hasil += '</div>';
        }
    }

    // jika perulangan = 0, maka hasil=""
    if (hasil=="") {
        // ubah menjadi 
        hasil = "<h1> Barang tidak ditemukan </h1>";
    }

    // masukkan ke HTML 
    document.getElementById("listBarang").innerHTML= hasil;
}

// fungsi untuk menambah Ke keranjang
function add(){
    let cart = document.getElementById("jumlahCart");
    let value = parseInt(cart.innerText)+1;

    cart.innerText = value;
}
