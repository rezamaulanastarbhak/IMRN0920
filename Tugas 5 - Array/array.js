console.log("==========================================================================");
console.log("=============================nomer 1 (range)==============================");
console.log("==========================================================================");

function range(startNum, finishNum){
    var arrayku =[];
    if (startNum < finishNum){
    for(var i=startNum; i<= finishNum; i++){
        arrayku.push(i);
        }
    }
    else if (startNum > finishNum){
        for(var i=startNum; i>= finishNum; i--){
            arrayku.push(i);
            }        
    }else{
        arrayku=[-1];
        }
        return arrayku;
    }

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11,18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1 

console.log("==========================================================================");
console.log("=====================nomer 2 (range with step)============================");
console.log("==========================================================================");
function rangeWithStep(startNum1, finishNum1, step) {
  var array1 =[];
    if (startNum1 < finishNum1){
    for(var j=startNum1; j<= finishNum1; j= j+step){
        array1.push(j);
        }
    }
    else if (startNum1 > finishNum1){
        for(var j=startNum1; j>= finishNum1; j= j-step){
            array1.push(j);
            }        
    }else{
        array1=[-1];
        }
        return array1;
    }


console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 


console.log("==========================================================================");
console.log("===================nomer 3 (range with step with sum)=====================");
console.log("==========================================================================");

function sum(startNum2, finishNum2, step2) {
  var array3 =[];
  var distance;

  if (!step2){
    distance = 1
  }else{
    distance = step2
  }

  if (startNum2 > finishNum2){
    var currentNum = startNum2;
    for (var k = 0; currentNum >= finishNum2; k++){
      array3.push(currentNum)
      currentNum -= distance
    }
  }else if (startNum2 < finishNum2){
    var currentNum = startNum2;
    for( var k = 0; currentNum <= finishNum2; k++){
      array3.push(currentNum)
      currentNum += distance
    }
  }else if (!startNum2 && !finishNum2 && !step2){
    return 0
  }
  else if (startNum2){
    return startNum2
  }

  var total = 0;
  for (var k = 0; k < array3.length; k++){
    total = total + array3[k]
  }
  return total 
}
   

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 


console.log("==========================================================================");
console.log("=======================nomer 4 (array multi dimensi)======================");
console.log("==========================================================================");
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {
  var string = "";
  for (n in data) {
      string += "Nomor ID:  " + input[n][0] + "\nNama Lengkap:  " + input[n][1] + "\nTTL:  " + input[n][2] + " " + input[n][3] + "\nHobi:  " + input[n][4] + "\n\n";
      //console.log(input[n][0]);
  }
  return string;
}



console.log(dataHandling(input))








console.log("==========================================================================");
console.log("============================nomer 5 (balik kata)==========================");
console.log("==========================================================================");
function balikKata(string){
  var kata= "";
  for (var i=string.length-1; i>=0; i--){
    kata +=string[i];
  }
  return kata
}


console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 


console.log("==========================================================================");
console.log("============================nomer 6 (metode Array)==========================");
console.log("==========================================================================");

function dataHandling2(arr) {
  var string = "";
  var meto = arr.slice(0, 5);

  meto.pop();
  meto.splice(4, 0, "Pria", "SMA Internasional Metro");
  meto[1] = "Roman Alamsyah Elsharawy";
  meto[2] = "Provinsi Bandar Lampung";

  string += '["' + meto[0] + '","' + meto[1] + '","' + meto[2] + '","' + meto[3] + '","' + meto[4] + '","' + meto[5] + '"]\n';

  var tgl = arr[3].split("/");
  var bln;
  switch (tgl[1].toString()) {
      case "01": {
          bln = "Januari";
          break;
      }
      case "02": {
          bln = "Februari";
          break;
      }
      case "03": {
          bln = "Maret";
          break;
      }
      case "04": {
          bln = "April";
          break;
      }
      case "05": {
          bln = "Mei";
          break;
      }
      case "06": {
          bln = "Juni";
          break;
      }
      case "07": {
          bln = "Juli";
          break;
      }
      case "08": {
          bln = "Agustus";
          break;
      }
      case "09": {
          bln = "September";
          break;
      }
      case "10": {
          bln = "Oktober";
          break;
      }
      case "11": {
          bln = "November";
          break;
      }
      case "12": {
          bln = "Desember";
          break;
      }
      default: {
          bln = "";
          break;
      }
  }

  string += bln.toString() + "\n";
  string += '["' + tgl[2] + '","' + tgl[0] + '","' + tgl[1] + '"]\n';
  string += tgl.join("-") + '\n';
  string += arr[1].toString() + "\n";

  return string;

}

var input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input2));
