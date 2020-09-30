console.log("=================================================================================");
console.log("==================================LOOPING WHILE==================================");
console.log("=================================================================================");
console.log("LOOPING PERTAMA");
var flag = 2;
while(flag <= 20) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log(flag+" - I LOVE CODING"); // Menampilkan nilai flag pada iterasi tertentu
  flag+=2; // Mengubah nilai flag dengan menambahkan 1
}

console.log("LOOPING KEDUA");
var flag2 = 20;
while(flag2 >= 2){
    console.log(flag2+" - I LOVE CODING");
    flag2-=2;
}

console.log("=================================================================================");
console.log("==================================LOOPING FOR====================================");
console.log("=================================================================================");


// SYARAT:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
for(var deret = 1; deret <= 20; deret++) {
  if(deret % 3 == 0 && deret % 2 == 1){
    console.log(deret+" - I Love Coding.");
  }
  else if (deret % 2 == 1){
    console.log(deret+" - Santai");
  }
  else if(deret % 2 == 0){
    console.log(deret+" - berkualitas");
  }
}

console.log("=================================================================================");
console.log("==================================PERSEGI PANJANG================================");
console.log("=================================================================================");
for (var i=0; i<4; i++ ){
    for (var j=0; j<8; j++){
      process.stdout.write("#");
        }
        console.log("");
    }

console.log("=================================================================================");
console.log("==================================TANGGA=========================================");
console.log("=================================================================================");

    for (i=1; i<=5; i++){
      for (j=i; j>=1; j--){
        process.stdout.write("#");
      }console.log("");
  }

console.log("=================================================================================");
console.log("==================================PAPAN CATUR====================================");
console.log("=================================================================================");

for (var i=0; i<8; i++ ){
  for (var j=0; j<8; j++){
    if((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
      process.stdout.write("#");
  }
else{
      process.stdout.write(" ");
}
      }
      console.log("");
  }
