//Exercise 1
const gretter = function(myArray, counter){
    const greetText = `Hello`;

    for (value of myArray){
        console.log(`${greetText}, ${value}`)
    }
}
console.log("Exercise 1")
gretter([`Randy Savege`, `Ric Flair`,`Hulk Hogan`],3)

//Exercise 2
const capitalize = function(str){
    const [v1, ...rem] = str;
    return v1.toUpperCase()+rem.join("");
}

console.log("");
console.log("Exercise 2")
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3
let colors = [`red`, `green`, `blue`];

let capitalizedColors = colors.map(val => capitalize(val));

console.log("");
console.log("Exercise 3")
console.log(capitalizedColors);

//Exercise 4
let values = [1,60,34,30,20,5];

let filterLessThan20 = values.filter(val => val < 20);

console.log("");
console.log("Exercise 4")
console.log(filterLessThan20);

//Exercise 5
let array = [1,2,3,4];
let calculateSum = array.reduce((
                    accumulator, currentValue
                    ) => accumulator+currentValue);
let calculateProduct = array.reduce((
                    accumulator, currentValue
                    ) => accumulator*currentValue);

console.log("");                  
console.log("Exercise 5")
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6

class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
   
    details(){
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model,year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }

}
console.log("");
console.log("Exercise 6")

const car2 = new Car('Pontiac Firebird',1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD',2018,30000);
console.log(sedan.info());