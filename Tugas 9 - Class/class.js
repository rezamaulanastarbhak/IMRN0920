// var Car = class {
//     constructor(brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk!vroomvroom"
//     }
// }
// console.log(Car.name) // Car
// console.log(Car.factory)
 
// // Diberi nama
// var Car = class Car2 {
//     constructor(brand, factory) {
//         this.brand = brand
//         this.factory = factory
//     }
// }
// console.log(Car.name) // Car2



// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     get cnam() {
//       return this.carname;
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
//   }
  
//   mycar = new Car("Ford");
//   console.log(mycar.cnam); // Ford
  // getter cnam digunakan tanpa "()"

  console.log("============================================================================") 
  console.log("=================================Soal 1=====================================")
  console.log("============================================================================")
  class Animal {
      constructor(name){
          this._name = name;
          this._leg = 4
          this._cold_blooded = false
      }
    get name(){
        return this._name;
    }
    get legs(){
        return this._leg;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }

}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        console.log("hop hop")
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name)
        this._legs = 2
    }
    yell() {
        console.log("Auooo")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 



console.log("============================================================================") 
console.log("=================================Soal 2=====================================")
console.log("============================================================================")

class Clock {
    constructor({template}) {
        this._template = template;
        this._timer;
    }

    render(temp) {
        var date = new Date();
        
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = temp
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
        console.log(output);
    }

    stop(){
        clearInterval(this._timer);
    }

    start(){
        this.render(this._template);
        this._timer = setInterval(this.render, 1000, this._template);
    }

}

var clock = new Clock({template: 'h:m:s'});
clock.start();


