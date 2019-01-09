// Course 1
alert("Hallo Arkademian");
// end Course 1

// Course 3
document.getElementById('p').innerHTML = "terserah";
console.log("Course 3");
// end Course 3


// Course 4
// Ini adalah comment satu baris

/*
ini
adalah
commnet
lebih
dari
satu
baris
*/

// end Course 4

// Course 5

// camelCase
var iniCamelCase ="ini camelCase";
console.log(iniCamelCase);
// UpperCase
var IniUperCase = "ini UpperCase";
console.log(IniUperCase);
// Underscore
var ini_under_score = "ini ini_under_score";
console.log(ini_under_score);
// End Course 5

// Course 6

// Variable
var a = 3;
var b = 6;

// penjumlahan
var c1 = a + b;
console.log(c1);

// pengurangan
var c2 = b - a;
console.log(c2);

// perkalian
var c3 = a * b;
console.log(c3);

// pembagian
var c4 = b/a;
console.log(c4);

// modulus
var c5 = b%a;
console.log(c5);
// end Course 6

// course 7
function bodoAmat(){
  console.log("Ini result Function Bodo Amat");
}
bodoAmat();

function exampleSum(){
  var x = 100;
  var z = 20;
  console.log(x * z);
}
exampleSum();

// function returning data
function exampleReturn(){
  var x = 100;
  var z = 20;
  return x / z;
}
var r = exampleReturn();
console.log(r);

// function with params
function exampleParams(a,b){
  return a * b;
}
var a = 10;
var b = 11;
var r = exampleParams(a,b);
console.log(r);
// end course 7

// course 8

var person = {
  firsname:"Zidan",
  lastname:"Resc",
  age:17,
  walk(){
    return "person walking";
  }
};

console.log(person);
console.log(person.firsname);
console.log(person.lastname);
console.log(person.firsname +" "+person.lastname );
console.log(person.age);
console.log(person.walk());
console.log(person['firsname']);

// end course 8


// Course 9
function setName(){
  var name = document.getElementById('txtname').value;
  document.getElementById('p').innerHTML = name;
}
// end course 9
