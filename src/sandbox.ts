// Function Signatures
//Można bardziej wyspecyfikować jaki ma być rodzaj funkcji

// let greet: Function;

// example 1
let greet: (a:string, b:string) => void; //deklarujemy że funkcja będzie przyjmowała 2 argumenty typu string i nic nie będzie zwracała
greet = (name:string, greeting:string) => { //tutaj mamy przypisanie do zmiennej greet funkcji pasującej do zadeklarowanego wzoru
    console.log(`${name} says ${greeting}`);
}

//example 2
let calc: (a:number, b:number, c:string) => number;
calc = (numOne: number, numTwo: number, action: string):number => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
} //dodawanie za nawiasem z argumentami :number nie jest konieczne bo typeScript przypisuje typ dynamicznie wychodzącej wartości

//example 3
let logDetails: (obj: {name: string, age: number}) => void;
// logDetails = (ninja:{name: string, age: number}) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }

//druga opcja z aliasem typu

type person = {name: string, age:number};
logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}