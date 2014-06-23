***Exericse 1***

1. Understand assignment

	I need to create a website with the specified requirements (see README).

2. Break down assignment into smaller parts

	This is conveniently done in the README.

3. If stuck, use Google. Remember to take things in small pieces and step by step.

***REFLECTION***

__Enjoyd__: I found creating a basic layout to be enjoyably rhythmic. Starting with color blocking was especially fun, it helped me see the development of the site. The cat filler images were a great suggestion too. 

__Helpful__: Beginning and thinking about the process in a step by step manner was especially helpful. Color blocking the main sections at first to get a general sense of the layout helped tremoundously. Once everything was 'in place' I was able to go back and begin to add layers of details. It reminded me of painting. 

__Next time__: I think I would've tried to establish the specified ratio when I began with the color blocking. By the time I got to figuring the 1/3 to 2/3 ratio, elements on the site would move around if I changed too much. I probably would've added more details, but I get the feeling with CSS that layering of details is a process that could become never-ending. I wanted the site to be simple. 

***Exercise 2***

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

var v2 = Value({value: 10, min: 0, max: 100})
// declares a variable 'v2' and sets it equal to Value(options)
// (options) in this case is a hash that seems to set certain specifications relating to properties of Value
// there is a declared value of 10, a min of 0 and a max of 100

v2.value = 101
// I think here the value of v2 or '.value' is being set to 101
// This returns an Error because of the specifications set in the **argument** (options) which declares a max value of 100
// The specifications outlined in the argument seem to set the value parameters (properties?) of what Value() can be
// I think this points to a relationship between (options) and the properties of Value
// When no options are given, the .value of Value() reverts to a default property (0), presumably set in Object.defineProperty()
// When options are given, but are beyond the boundary of the properties of Value set in Object.defineProperty() then an Error is thrown
// If this is true, Value() should also behave like this

var v3 = Value({value: 1, min: 0, max: 10})
v3.value 
=> 1

// With this in mind, test 2 asks that when Value({max: 1, value: Math.random()}), it (Value with that specific argument) does not equal void 0 (or undefined)
// Therefore if I set the Object.defineProperty value to options !== undefined, this test should pass.

***REFLECTION***

__Enjoyed__: I found the challenge of the task and the emphasis on recording my thought process to be the most enjoyable. Javascript is not my first language and I learned so much completing this technical test. I also realize how much there is to learn! Even though I only got a few tests to pass, the learning in between was completely worth it -- I now want to spend the next few weeks just immersing myself in Javascript. 

__Helpful__: The task felt daunting at first, but the approach I learned at Makers to break down problems into smaller, mangeable parts really helped. When I got stuck it was easier to research specific aspects of smaller problems than try to find answers to broader questions. The MDN Javascript documentation was an incredible resource and I could easily spend another few days (weeks? years?) just reading that. I also found the npm testing suite documentation to be helpful in deciphering test expectations. As I was reaching the end of the time I had allotted on Exercise 2, going back and seeing if the end behavior of Value() could reveal anything about the inner functionality helped me understand aspects of JS that I hadn't realized.

__Next time__: If this hadn't been a technical test I would've paired with someone whose knowledge of Javascript is more advanced than mine. There were a couple of moments when I was trying to figure out the MDN documentation or certain aspects of Object.defineProperty (getter/setters!) or the role of functions where a deeper understanding of Javascript would've been helpful. I know more about JS now than I did before, but this exercise really tested the basic knowledge I have and sometimes felt beyond what I am currently capable of. However, the fact that it was so challenging made me want to work harder and try different things and I look forward to when I've learned enough to complete the test. 
 
It would be great to sit down with someone who knows JS in more detail than I do and walk through the problem to get a sense of how they would approach andy why. 

