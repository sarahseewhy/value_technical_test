Exericse 1

[TBC]

Exercise 2

1. Understand assignment: 
	
	I need to create a function 'Value' that returns an object that stores a number. The value of the returned object can be altered ('mutable') but there should be a min and a max boundary. 

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

..1) Write a function called 'Value'
