function logger(a, b) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`)
}

var a = 12, b = "Hello Teacher"

//logger(b, a)

function loggerV2(a: number, b: string) {
    console.log(`Value of number: ${a}, Value of msg: ${b}`)
}

//loggerV2(a, b);

interface IPerson { name: string }
interface IAddress { street: string }

function loggerV3(p: IPerson, a: IAddress) {
    console.log(`Person: ${p.name}, Address: ${a.street}`)
}

const person = { name: "Kurt Wonnegut" }
const address = { street: "Lyngbyvej 23" }

//loggerV3(person, address)

class Person implements IPerson {
    public name;
    constructor(name: string) {
        this.name = name;
    }
}

class Address implements IAddress {
    public street;
    constructor(street: string) {
        this.street = street;
    }
}

//loggerV3(new Person("Henning"), new Address("Test Street"));

function loggerV4<T, U>(p: T, a: U) {
    console.log(`Person: ${p}, Address: ${a}`)
}

loggerV4(person, address);

class GenericLogger<T, U>{
    log = (a: T, b: U) => console.log("Val 1: " + a, "Val 2: " + b)
}

const personLogger = new GenericLogger<IPerson, IAddress>();
const numberLogger = new GenericLogger<number, number>();

personLogger.log(person, address);
numberLogger.log(1, 3);

var numbers: Array<number> = [1, 2, 3]