// creating function Value with parameters 'options'
function Value(options){
	// 
	this.value = options.value;

}

module.exports = function(options) {
	var result = new Value(options)
	return result;
}