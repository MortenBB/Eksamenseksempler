//When it is called outside a function, this refers to the Window object in the browser.
console.log(this); // Window

//When this is called in a function, this is set to the global object.
function hello() {
	console.log(this);
}
hello(); // Window

//When this is called in an object method, this would be the object itself.
let o = {
	sayThis: function() {
		console.log(this);
	}
};

o.sayThis(); // o

//When the function is called as a constructor, this refers to the newly constructed object.
function Person(age) {
	this.age = age;
}
let greg = new Person(22);
let thomas = new Person(24);
console.log(greg); // this.age = 22
console.log(thomas); // this.age = 24

//When used in an event listener, this is set to the element that fired the event.
let button = document.querySelector('button');
button.addEventListener('click', function() {
	console.log(this); // button
});

function Car(make, model) {
	this.make = make;
	this.model = model;
	this.show = function() {
		setTimeout(function() {
			//This function gets it's own "this"
			console.log(this.make + ', ' + this.model);
		}, 0);
	};
}
var car = new Car('Volvo', 'V70');
car.show();
//Output:  undefined, undefined

function Car(make, model) {
	this.make = make;
	this.model = model;
	this.show = function() {
		setTimeout(() => {
			//This function doesn't gets it's own "this"
			console.log(this.make + ', ' + this.model);
		}, 0);
	};
}
var car = new Car('Volvo', 'V70');
car.show();
//Output:  Volvo, V70 (Arrow functions har ingen this)
