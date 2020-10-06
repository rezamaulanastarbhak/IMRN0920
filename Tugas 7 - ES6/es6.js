console.log("================================================================");
console.log("=============================soal 1=============================");
console.log("================================================================");

const golden = function goldenFunction(){
    console.log("this is golden!!")
  }
   
  golden()

const golden1 = goldenFunction1 = () => {
    console.log("this is golden!!")
}

golden1();


//   function appFunction (){
//     // isi Function
// }
 
// appFunction();

// appFunction = () => {
//     //isi function
// } 

// appFunction();

console.log("================================================================");
console.log("=============================soal 2=============================");
console.log("================================================================");

// const newFunction = function literal(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       fullName: function(){
//         console.log(firstName + " " + lastName)
//         return 
//       }
//     }
//   }
   
//   //Driver Code 
//   newFunction("William", "Imoh").fullName() 

  const newFunction =  literal = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()


  console.log("================================================================");
  console.log("=============================soal 3=============================");
  console.log("================================================================");

  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  //dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
  
  const {firstName, lastName, destination, occupation, spell} = newObject;
  
  //Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
  
  // Driver code
  console.log(firstName, lastName, destination, occupation);


console.log("================================================================");
console.log("=============================soal 4=============================");
console.log("================================================================");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined);

//ES6 array spreading
let combinet = [...west,...east];

console.log(combinet);


console.log("================================================================");
console.log("=============================soal 5=============================");
console.log("================================================================");
const planet = "earth"
const view = "glass"
const before = `Lorem  ${planet} dolor sit amet, consectetur adipiscing elit ${view} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 

// const firstName = 'Zell'
// const lastName = 'Liew'
// const teamName = 'unaffiliated'
 
// const theString = `${firstName} ${lastName}, ${teamName}`
 
// console.log(theString) // Zell Liew, unaffiliated














