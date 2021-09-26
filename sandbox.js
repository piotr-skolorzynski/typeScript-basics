// Dynamic (any) types //reverts typeScript to JavaScript erasing typeScript features, use in certain situations
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
var mixed = []; //we can push any value
mixed.push('milk');
mixed.push(20);
mixed.push(true);
console.log(mixed);
var ninja;
ninja = {
    name: 'yoshi',
    age: 20
};
console.log(ninja);
//typeScript ignores types
ninja = {
    name: 25,
    age: 'yoshi'
};
console.log(ninja);
