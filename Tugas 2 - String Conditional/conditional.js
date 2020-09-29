
console.log("===========================================================================");
console.log("==============================SOAL IF ELSE=================================");
console.log("===========================================================================");

nama = "John"
peran = ""
if (nama == "junaedi"){
    console.log("Selamat datang di Dunia Werewolf, "+ nama)
    if (peran == "penyihir"){
        console.log("Halo "+peran+" "+nama+" , kamu dapat melihat siapa yang menjadi werewolf!")
    }else if (peran == "Guard"){
        console.log("Halo "+peran+" "+nama+" , kamu akan membantu melindungi temanmu dari serangan werewolf")
    }else if (peran == "Werewolf"){
        console.log("Halo "+peran+" "+nama+" , Kamu akan memakan mangsa setiap malam!")
    }else{
        console.log("Hallo "+ nama +", Pilih peranmu untuk memulai game !")
    }

}else if (nama == "Jenita"){
    console.log("Selamat datang di Dunia Werewolf, "+ nama)
    if (peran == "penyihir"){
        console.log("Halo "+peran+" "+nama+" , kamu dapat melihat siapa yang menjadi werewolf!")
    }else if (peran == "Guard"){
        console.log("Halo "+peran+" "+nama+" , kamu akan membantu melindungi temanmu dari serangan werewolf")
    }else if (peran == "Werewolf"){
        console.log("Halo "+peran+" "+nama+" , Kamu akan memakan mangsa setiap malam!")
    }else{
        console.log("Hallo "+ nama +", Pilih peranmu untuk memulai game !")
    }
}else if (nama == "Jane"){
    console.log("Selamat datang di Dunia Werewolf, "+ nama)
    if (peran == "penyihir"){
        console.log("Halo "+peran+" "+nama+" , kamu dapat melihat siapa yang menjadi werewolf!")
    }else if (peran == "Guard"){
        console.log("Halo "+peran+" "+nama+" , kamu akan membantu melindungi temanmu dari serangan werewolf")
    }else if (peran == "Werewolf"){
        console.log("Halo "+peran+" "+nama+" , Kamu akan memakan mangsa setiap malam!")
    }else{
        console.log("Hallo "+ nama +", Pilih peranmu untuk memulai game !")
    }
}else if (nama == "John"){
    console.log("Selamat datang di Dunia Werewolf, "+ nama)
    if (peran == "penyihir"){
        console.log("Halo "+peran+" "+nama+" , kamu dapat melihat siapa yang menjadi werewolf!")
    }else if (peran == "Guard"){
        console.log("Halo "+peran+" "+nama+" , kamu akan membantu melindungi temanmu dari serangan werewolf")
    }else if (peran == "Werewolf"){
        console.log("Halo "+peran+" "+nama+" , Kamu akan memakan mangsa setiap malam!")
    }else{
        console.log("Hallo "+ nama +", Pilih peranmu untuk memulai game !")
    }
}else {
    console.log("Nama harus diisi!")
}

console.log("===========================================================================");
console.log("==============================SOAL SWITCH CASE=============================");
console.log("===========================================================================");

var hari = 21; 
var bulan = 1; 
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
switch(bulan) {
    case 1:   { bulan2 = 'Januari'; break; }
    case 2:   { bulan2 = 'Februari'; break; }
    case 3:   { bulan2 = 'Maret'; break; }
    case 4:   { bulan2 = 'April'; break; }
    case 5:   { bulan2 = 'Mei'; break; }
    case 6:   { bulan2 = 'Juni'; break; }
    case 7:   { bulan2 = 'Juli'; break; }
    case 8:   { bulan2 = 'Agustus'; break; }
    case 9:   { bulan2 = 'September'; break; }
    case 10:   { bulan2 = 'Oktober'; break; }
    case 11:   { bulan2 = 'November'; break; }
    case 12:   { bulan2 = 'Desember'; break; }
    default:  { bulan2 = 'salah masukan bulan'; }}
console.log(hari+" "+bulan2+" "+tahun)