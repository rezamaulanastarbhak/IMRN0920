// setTimeout(function() {
//     console.log("saya dijalankan belakangan")
//   }, 3000)
   
//   console.log("saya dijalankan pertama") 

//   function periksaDokter(nomerAntri, callback) {
//     if(nomerAntri > 50 ) {
//         callback(false)
//     } else if(nomerAntri < 10) {
//         callback(true)
//     }    
// } 


// // Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
// periksaDokter(65, function(check) {
//     if(check) {
//         console.log("sebentar lagi giliran saya")
//     } else {
//         console.log("saya jalan-jalan dulu")
//     }
// }) 

// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function readAgain(timespent, index) {
    if (index >= books.length) {
      return;
    }
    readBooks(timespent, books[index], timeleft =>
      readAgain(timeleft, index + 1)
    );
  }
  
  readAgain(10000, 0);

  
  