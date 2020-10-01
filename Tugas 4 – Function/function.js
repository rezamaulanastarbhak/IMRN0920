// function tampilkan() {
//     console.log("halo!");
// }
// tampilkan(); 


// function munculkanAngkaDua() {
//     return 2
// }

// var tampung = munculkanAngkaDua();
// console.log(tampung);

console.log("==========================================================");
console.log("=========================SOAL 1===========================");
console.log("==========================================================");
/*
Tulis code function di sini
*/
function teriak(){
    return "Halo Sanbers!"
}
console.log(teriak()) // "Halo Sanbers!" 

console.log("==========================================================");
console.log("=========================SOAL 2===========================");
console.log("==========================================================");
function kalikan(num1, num2) {
return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

console.log("==========================================================");
console.log("=========================SOAL 3===========================");
console.log("==========================================================");

/* 
    Tulis kode function di sini
*/
function introduce(name, age, address, hobby){
    return "Nama saya " + [name] + ", Umur saya "+[age] +" tahun" + ", alamat saya di "+[address]+ ", dan saya punya hobi yaitu "+[hobby]+" !"
} 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 