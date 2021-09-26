"use strict";
// Function Signatures
//Można bardziej wyspecyfikować jaki ma być rodzaj funkcji
// let greet: Function;
// example 1
var greet; //deklarujemy że funkcja będzie przyjmowała 2 argumenty typu string i nic nie będzie zwracała
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}; //dodawanie za nawiasem z argumentami :number nie jest konieczne bo typeScript przypisuje typ dynamicznie wychodzącej wartości
//example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
