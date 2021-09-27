//classes
export class Invoice {
    // readonly client: string; // wartość dostępna tylko do odczytu, nawet przez metody, można odczytać również z zewnątrz poprzez console.log()
    // private details: string; //dostępna tylko np. przez metodę, tutaj format ale można stworzyć nową, która będzie mogła  tą wartość modyfikować, nie można też z zewnątrz jej odczytać np. poprzez console.log()
    // public amount: number; //dostępna publicznie, można zmieniać z zewnątrz np. invoice.amount = 300;
    // constructor(c: string, d:string, a:number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    //shorthand - muszą być podane modyfikatory innaczej nie zadziała
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
