// creating function Value with parameters 'options'
function Value(options){
	// intializing Value
	this.options = options;

}



module.exports = function(options) {
	var result = new Value(options)
	return result;
}