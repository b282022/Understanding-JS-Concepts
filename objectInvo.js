// Function invocation, Method invocation, Constructor invocation
function Foo(x, y) {
	console.log(this);
	this.x = x;
	this.y = y;
	this.addition = function() {
		console.log(this);
		return this.x + this.y;
	}
}

Foo(10, 15);		// Simply a function invocation
					// Hence, `this` is the global object
					// Hence, `this.x` = 10 and `this.y` = 15
console.log(window.x === 10, 
	window.y === 15);	// true, true 

var o = new Foo(20, 15);	// Constructor invocation
							// because, we are using new
							// Hence, `this` is the Foo object

var res1 = o.addition();	// Method invocation. 
							// Hence, `this` is the object o
							// res1 = 20 + 15 = 35
// Detached mathod
var detachedAddition = o.addition;	// Different from the one in
									// `this.addition`

var res2 = detachedAddition();	// Function invocation
								// Hence, `this` is the global object
								// res2 = global.x + global.y which was
								// set by the first function invocation
								// of Foo(10, 15). Hence res2 = 25

console.log(res1 === res2);

// Arrow function
var obj = {
	bar: function () {
		// value of `this` is exactly same as the execution
		// context in which the bar function was invoked
		var x = (() => this);
		return x;
	}
}

var fn = obj.bar();	// Returns an arrow function whose `this` 
					// value is same as the `this` value of the
					// enclosing execution context
					// which was obj object
					
var fn2 = obj.bar;	// Detached method

console.log(fn() === obj);
// fn2() Returns an arrow function whose `this` value is
// same as `this` value of the enclosing execution context
// which is global object
console.log(fn2()() === obj);
