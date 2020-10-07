var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function readAgain(timespent, index) {
    if (index >= books.length) {
      return;
    }
    readBooksPromise(timespent, books[index]).then(timeleft =>
      readAgain(timeleft, index + 1)
    );
  }
  
  readAgain(10000, 0);
  