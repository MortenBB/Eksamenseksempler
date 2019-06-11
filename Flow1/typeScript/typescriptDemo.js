function logger(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
var a = 12, b = "Hello Teacher";
//logger(b, a)
function loggerV2(a, b) {
    console.log("Value of number: " + a + ", Value of msg: " + b);
}
function loggerV3(p, a) {
    console.log("Person: " + p.name + ", Address: " + a.street);
}
var person = { name: "Kurt Wonnegut" };
var address = { street: "Lyngbyvej 23" };
//loggerV3(person, address)
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
//loggerV3(new Person("Henning"), new Address("Test Street"));
function loggerV4(p, a) {
    console.log("Person: " + p + ", Address: " + a);
}
loggerV4(person, address);
var GenericLogger = /** @class */ (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Val 1: " + a, "Val 2: " + b); };
    }
    return GenericLogger;
}());
var personLogger = new GenericLogger();
var numberLogger = new GenericLogger();
personLogger.log(person, address);
numberLogger.log(1, 3);
var numbers = [1, 2, 3];
