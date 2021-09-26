//explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'; impossible cause we declared type number
age = 30;
// isLoggedIn = 25; wrong type, should be boolean
isLoggedIn = true;
// arrays
// let ninjas: string[]; //array of strings only sometimes it is best to also initialize with empty array to possible using array methods on this variable let ninjas: string[] = []
var ninjas = [];
// ninjas = [10, 20]; //wrong types
ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');
//union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(true); wrong type, not declared
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false; wrong type
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
// ninjaOne = 'milk' wrong type
// ninjaOne = []; will work because it is an object
var ninjaTwo; //we declare not only object but also its type
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
