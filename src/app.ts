import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js'; //musi być rozszerzenie .js
import { Invoice } from './classes/Invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement; 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    //using tuples to shorten code
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter; //tworzymy zmienną z typem HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end')
})

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

// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];

// // w tuple nie można działać tak elastycznie, dany typ musi być cały czas na tej samej pozycji
// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 'ken'; //zadziała bo zgadza się typ

// let student: [string, number];
// student = ['chun-li', 223423];