Exericse 1

[TBC]

Exercise 2

1. Understand assignment 
	
	I need to create a function 'Value' that returns an object. The returned object stores a number. The value of the returned object can be altered ('mutable') but there should be a min and a max boundary. 

	It should behave in the following way:

	```
  var v = Value()
  v.value
  //=> 0

  var v2 = Value({value: 10, min: 0, max: 100})
  v2.value = 101
  //=> Error: Out of bounds
	```
2. Break down assignment into smaller pieces.

  1) Write a function called 'Value'
  
  2) Value returns an object

  3) The returned object stores a number
	
	3) The value of the returned object will be mutable
	
	4) The value of the returned object is protected by a minimum bound
	
	5) The value of the returned object is protected by a maximum bound
	
	6) It should behave in the above manner


3. If stuck, think about or brainstorm assignment in familiar terms (cognisant that translating directly can cause hiccups) - see scratchpad.rb

4. Figuring out what the descriptor value does by looking at the expected behavior of Value()

var v = Value() 
// declares a variable 'v' and sets it to function Value() with no arguments


v.value 
// this is equivalent to Value().value because if a = b, then a.value = b.value

=> 0
// Returns the default 'value' of 0 (which I ascertained from test 4) 
// I presume then that '.value' is proverbially 'asking' for v's value because a value is answered or returned
// The default 0 is returned, therefore I conclude that with no arguments the 'value' reverts to a default







