var introduction = ["Hello", "I", "am", "Sarah"];
var [greeting, pronoun] = introduction;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200