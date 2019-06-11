const fetch = require("node-fetch");
const perf = require("performance-now");
const URL = "https://swapi.co/api/people/";

async function fetchPerson(url) {
    res = await fetch(url)
    json = res.json()
    return json
}

async function printNames() {
    var start = perf()
    console.log("Before");
    const person1 = await fetchPerson(URL + 1);
    const person2 = await fetchPerson(URL + 2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var end = perf();
    console.log((start - end).toFixed(3))
}
printNames()

async function printNamesAsync(count) {
    var start = perf()
    const swapPeople = [];
    for (let i = 1; i <= count; i++) {
        swapPeople.push(
            fetch(URL + i)
                .then(res => { return res.json() }));
    }
    const allElements = await Promise.all(swapPeople);
    console.log(allElements.map(e => e.name).join("\n"));
    var end = perf();
    console.log((start - end).toFixed(3))
}
printNamesAsync(2)