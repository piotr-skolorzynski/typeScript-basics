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
    let doc: HasFormatter; //tworzymy zmienną z typem HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end')
})

//genrecics
//<T> (konwencja, litera może być inna) przechwytuje co wchodzi do środka dzięki temu na obiekcie można wykonać np. docOne.name = 'mleko', ale jednocześnie nie pilnuje że w tym przypadku interesuje nas tylko obiekt więc trzeba dać extends object, można to zrobić jeszcze precyzyjniej: <T extends {name: string}> (obj: T) co mówi że musi być to obiekt z parą name i typu string
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40);
console.log(docOne.name)

//generics with interfaces
//chcemy żeby data był generic tzn. zależnie co zostanie przesłane a nie konkretnego typu i tutaj wchodzi generics
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['milk', 'bread']
}

console.log(docThree, docFour);