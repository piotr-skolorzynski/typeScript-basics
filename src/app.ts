// const anchor = document.querySelector('a')!; //wykrzyknik oznacza, że jako deweloper jestm pewien, że taki link istnieje. dlaczego to robimy bo typeScript nie ma dostępu do strony html i sugeruje, że ta zmienne może być pustym obiektem Jest jeszcze drugie rozwiązanie 
// if(anchor) {
//     console.log(anchor.href)
// } 

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; //tutaj nawet jeśli damy ! to typeScript będzie jęczał bo łapiemy element po klasie i typeScript nie ma pojęcia co to jest dlatego piszemy as podając rodzaj elementu. To pozwala nam korzystać ze wszystkich metod dostępnych dla tego rodzaju elementu
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

//classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('mario', 'work on the luigi website', 300);

let invoices: Invoice[] = []; //dzięki takiej deklaracji do tej tablicy mogą trafić tylko i wyłącznie obiekty klasy Invoice
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices)
