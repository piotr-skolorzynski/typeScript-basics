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
    // readonly client: string; // wartość dostępna tylko do odczytu, nawet przez metody, można odczytać również z zewnątrz poprzez console.log()
    // private details: string; //dostępna tylko np. przez metodę, tutaj format ale można stworzyć nową, która będzie mogła  tą wartość modyfikować, nie można też z zewnątrz jej odczytać np. poprzez console.log()
    // public amount: number; //dostępna publicznie, można zmieniać z zewnątrz np. invoice.amount = 300;

    // constructor(c: string, d:string, a:number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    //shorthand - muszą być podane modyfikatory innaczej nie zadziała
    constructor(
        readonly client: string,
        private details: string,
        public amounte: number
    )

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
