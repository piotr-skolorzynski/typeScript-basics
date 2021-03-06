import { HasFormatter } from './../interfaces/HasFormatter';

//classes
export class Invoice implements HasFormatter {
    //shorthand - muszą być podane modyfikatory innaczej nie zadziała
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}