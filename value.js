// Test 1 requires I create a function 'Value' with an argument 'options'
function Value(options){
	// When I try to initialize the 'function' test 1 fails, I am unsure why
	// this.options = options;
	
	// Declaring a variable 'myValue' setting it to an empty hash
	var myValue = {};

	// Test 2 requires I create a property '.value' where .value is defined
	// How to define a new property from MDN doc: Object.defineProperty(obj, prop, descriptor[written as hash])
	// My obj is myValue
	// My property is...not sure yet
	// My descriptor I think needs to be an accessor descriptor or getter/setter
	// because Test 1 mentions that Value should not have enumberable properties
	// but eventually I'll also want to be able to change things 
	// so it needs to be writable/configurable.
	// Therefore I would construct my descriptor like this:
	Object.defineProperty(myValue, "not sure yet", {
		enumberable: false,
		configurable: true,
		writable: true,
		value: "not sure yet"} 
	);

	// Test 3 requires that the property .value be 0 by default
	// Based on my reading I think I would need to change 
	// the property descriptor value to 0 for this test to pass
}

module.exports = function(options) {
	var result = new Value(options)
	return result;
}