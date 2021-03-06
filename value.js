// Test 1 requires I create a function 'Value' with an argument 'options'
function Value(options){
	// When I try to initialize the 'function' test 1 fails, perhaps because the test is expecting an empty hash
	// this.options = options;
	
	var myValue = {};

	// Test 2 requires I create a property '.value' where .value is defined
	// How to define a new property from MDN doc: Object.defineProperty(obj, prop, descriptor[written as hash])
	// My obj is myValue
	// My property is "the name of the property to be defined" (Ah-ha! e.g., "myString", "date", "min")
	// My descriptor I think needs to be an accessor descriptor or getter/setter
	// because Test 1 mentions that Value should not have enumberable properties - but it also should be changeable 
	// My value is the property value of (I think) options
	Object.defineProperty(myValue, "minimum", {
		enumberable: false,
		configurable: true,
		value: (options !== undefined && options.minimum === 0) 

	});

	// Test 3 requires that the property .value be 0 by default. So options are not undefined AND 0 by default.
	// What's another word for default? If the test expect the options to be between 0 and 1 where 0 is the default, 
	// then the default (0) is also the minimum
	// What it is the minimum of? OPTIONS
	// My test fails because it finds ~ (undefined?) when it expects 0 - Switching to Exercise 1


	return myValue;
}

module.exports = function(options) {
	var result = new Value(options)
	return result;
}