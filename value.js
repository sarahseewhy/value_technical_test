// Test 1 requires I create a function 'Value'
function Value(options){
	// I want to return a new value 'myValue' that can store a number 
	// so I created a hash
	var myValue = {};

	// Test 2 requires I create a property '.value' where .value is defined
	// How to define a new property from MDN doc: Object.defineProperty(obj, prop, descriptor[written as hash])
	// My obj is myValue
	// My property or "key" is...not sure yet
	// My descriptor I think needs to be an accessor descriptor or getter/setter
	// because Test 1 mentions that Value should not have enumberable properties
	// but eventually I'll also want to be able to change things 
	// so it needs to be writable/configurable.
	// Therefore I would construct my descriptor like this:
	// {
	// 	enumberable: false
	// 	configurable: true
	// 	writable: true
	// 	value: ...not sure yet, I'll put null and see what happens (this needs to be both not undefined and 0)
	// }
	Object.defineProperty(myValue, "not sure yet", {
		enumberable: false,
		configurable: true,
		writable: true,
		value: null}
	);	
}

module.exports = function(options) {
	var result = new Value(options)
	return result;
}