function outerFunction(x, y, z) {
	return function () {
		return x + y + z;
	}
}

var innerFunction = outerFunction(10, 15, 20);
// Even after the execution context has been popped from
// the EC stack, we are able to access the arguemnts in the
// inner function
console.log(innerFunction());

// Using the above property of closures,
// we can implement encapsulation (Hiding of the data and functions)
// and abstraction
var someClass = (function() {
	var privateVariable = 'This is the secret ingredient used in this class';
	var privateMethod = function(toAdd) {
		console.log(this);
		console.log(privateVariable, " being added in ", toAdd);
	}
	// Return an object, only which has access to
	// private variable and private method!
	return {
		publicVariable: 'This is the public ingredient used in this class',
		publicMethod : function(toAdd) {
			console.log(this);
			console.log(this.publicVariable, " being added in ", toAdd);
			privateMethod(toAdd);	// `this` when it is invoked is
									// global object
		}
	}
})();

someClass.publicMethod('Sugar');
