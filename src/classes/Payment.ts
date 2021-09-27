import { HasFormatter } from './../interfaces/HasFormatter';

//classes
export class Payment implements HasFormatter {
    //shorthand - muszą być podane modyfikatory innaczej nie zadziała
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}