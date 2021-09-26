//type Aliases

// const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello `);
// }

//żeby zmniejszyć ilość nadmiarowego kodu można tworzyć aliasy dla typów i wykorzystywać je do zmniejszenia pisaniny

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello `);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`)
}