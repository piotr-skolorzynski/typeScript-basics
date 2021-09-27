import { Invoice } from './classes/Invoice.js';
// const anchor = document.querySelector('a')!; //wykrzyknik oznacza, że jako deweloper jestm pewien, że taki link istnieje. dlaczego to robimy bo typeScript nie ma dostępu do strony html i sugeruje, że ta zmienne może być pustym obiektem Jest jeszcze drugie rozwiązanie 
// if(anchor) {
//     console.log(anchor.href)
// } 
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); //tutaj nawet jeśli damy ! to typeScript będzie jęczał bo łapiemy element po klasie i typeScript nie ma pojęcia co to jest dlatego piszemy as podając rodzaj elementu. To pozwala nam korzystać ze wszystkich metod dostępnych dla tego rodzaju elementu
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 300);
let invoices = []; //dzięki takiej deklaracji do tej tablicy mogą trafić tylko i wyłącznie obiekty klasy Invoice
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
