// functions

// let greet = () => {
//     console.log('hello, world');
// };

// greet = 'hello'; - impossible, we declared that greet is a function

let greet: Function; //type is in a capital letter

greet = () => {
    console.log('hello, again');
}

const add = (a:number, b:number) => {
    console.log(a+b);
};

add(5, 10);

// add(10, '15'); you cannot pass an argument which does not match declared type

// tutaj przykład funkcji z opcjonalnymi typami ale postawienie znaku zapytania oznacza również opcjonalny argument oraz przypisanie wartości domyślnej ale wtedy nie używamy znaku zapytania. Pamiętaj o dawaniu domyślnych parametrów na końcu deklaracji
// const add2 = (a:number, b:number, c?:number|string) => {
//     console.log(a+b);
//     console.log(c)
// };
const add2 = (a:number, b:number, c:number|string = 10) => {
    console.log(a+b);
    console.log(c)
};

add2(5, 20);

const minus = (a:number, b:number) => {
    return a - b;
}

let result = minus(10, 7); //typ zmiennej będzie taki sam jak wyniku funkcji minus
// result = 'sth else' nie można tak zrobić bo result jest typu number

// można również zadeklarować resultat funckji przy jej deklarowaniu

const minus2 = (a:number, b:number): number => {
    return a - b;
}

//Jeżeli funkcja niczego nie zwraca to można zadeklarować bezpośrednio w funkcji poprzez słówko jak z c++ tj. void
const add3 = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c)
};