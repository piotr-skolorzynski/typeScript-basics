import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js'; //musi być rozszerzenie .js
import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc; //tworzymy zmienną z typem HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//genrecics
//<T> (konwencja, litera może być inna) przechwytuje co wchodzi do środka dzięki temu na obiekcie można wykonać np. docOne.name = 'mleko', ale jednocześnie nie pilnuje że w tym przypadku interesuje nas tylko obiekt więc trzeba dać extends object, można to zrobić jeszcze precyzyjniej: <T extends {name: string}> (obj: T) co mówi że musi być to obiekt z parą name i typu string
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40);
// console.log(docOne.name)
//generics with interfaces
//chcemy żeby data był generic tzn. zależnie co zostanie przesłane a nie konkretnego typu i tutaj wchodzi generics
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<string> = {
//     uid: 1,
//     resourceName: 'person',
//     data: 'shaun'
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['milk', 'bread']
// }
// console.log(docThree, docFour);
// //enums
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'name of the wind'}
// }
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'yoshi'}
// }
// console.log(docOne, docTwo);
//tuples - krotka – struktura danych będąca odzwierciedleniem matematycznej n-ki, tj. uporządkowanego ciągu wartości. Krotki przechowują stałe wartości o różnych typach danych – nie można zmodyfikować żadnego elementu, odczyt natomiast wymaga podania indeksu liczbowego żądanego elementu.
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
// w tuple nie można działać tak elastycznie, dany typ musi być cały czas na tej samej pozycji
let tup = ['ryu', 25, true];
