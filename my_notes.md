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


3. If stuck, think about assignment in familiar terms (remaining aware that translating directly can cause hiccups)







