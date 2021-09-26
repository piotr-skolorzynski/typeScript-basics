//arrays
let names = ['luigi', 'mario', 'yoshi'];// we can use only string type inside array, also we cannot change names variable to other type f.e. string names = 'milk'

names.push('toad');
// names.push(3); cannot add item with different type
// names[0] = 3;  overwrite also imposible

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mleko'); different types
// numbers[1] = 'mario'; the same error

// if we want to have array with different types it is needed to declare that
let mixed = ['ken', 4, 'chun-li', 8, 9]; //now typeScript knows that we want to use two types in array
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

//objects
let ninja = {
    name: 'mario', //this attribute must always be string
    belt: 'black',
    age: 30 //this always number
};
//ninja variable must always be an object

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; cannot change type from number to string
// ninja.skills = ['fighting', 'sneaking']; cannot add another object's property because it wasn't defined at the beginning
//it is possible to overwrite whole object but cannot change properties it must be exact same object structure
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: [] impossible to add
}