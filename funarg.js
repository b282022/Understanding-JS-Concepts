/* Concept of Closure and General Pitfalls in: 
	Functions with Function arguemnts 
	Functions returning functions. (Function valued functions)
*/
// Upward funarg problem

function createCounter() {
	let counter = 0;
	const myFunction = function () {
		counter = counter + 1;
		return counter;
	}
	return myFunction;
}
const increment = createCounter();

/*
Clousre:
At this point of time the context of createCounter is lost.
But because of the closure, which means a collection of all the variables in scope at 
the time of creation of the function, the counter variable is in scope of the function definition
stored in the myFunction.

Analogy: When a function gets created and passed around or returned from another function, 
it carries a backpack with it. 
And in the backpack are all the variables that were in scope when the function was declared.
Source: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
*/

const c1 = increment();	
const c2 = increment();
const c3 = increment();

console.log('Example: Counter increment: ', c1, c2, c3);

// Downward funarg problem
// Source: http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#closures

var x = 10;
/* 
At this time, when the function is created and stored in memory,
because of closure, it has in its scope a variable x with value 10
*/ 
function foo() {
	console.log(x);
}


(function (funArg) {
	var x = 20;
	// The execution context has a local variable x, with value 20
	// But funArg itself has its local variable x as 10 so, it does not
	// go through the scope chain and use the above declared x.
	funArg();
})(foo);
