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
	// because Test 1 mentions that Value should not have enumberable properties
	// My value is the property value of (I think) options
	Object.defineProperty(myValue, "AnythingIWant", {
		enumberable: false,
		value: (options !== undefined)};
	);

	// Test 3 requires that the property .value be 0 by default
	// Based on my reading I think I would need to change 
	// the property descriptor value to 0 for this test to pass

	return myValue;
}

module.exports = function(options) {
	var result = new Value(options)
	return result;
}