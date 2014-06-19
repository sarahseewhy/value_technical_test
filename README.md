# Coding Exercises

These exercises are intended to provide an opportunity for you to demonstrate your software engineering knowledge.

The logic you employ and the approach you take to solve the problem are the most interesting to us. Donʼt worry about finding "the" solution. Provide a solution that you like.

Feel free to use any IDE or text editor you like, and any browser to test against. It's perfectly fine to use Google to help with your solutions.

You can submit your solutions to these exercises either in a zip file or a Github repo.

**Please ensure you version control your progress atomically using Git**

Before starting, please review the two exercises and drop an email to ****@********.*** if anything is unclear or confusing.

Most importantly, have fun!

## Exercise the First - HTML and CSS

- Create an HTML page with header, footer and main sections. The main section should contain a primary area for content and a sidebar to the right of it.
- The two areas in the main section - content area and sidebar - should have a 2/3 to 1/3 ratio respectively. 
- The header should contain a title (surprise us) and a nav bar with three links: Home, About and Blog
- The main content area can be filled with sample text and placeholder images a la normal article layout. Feel free to put whatever content you like in there.
- The overall site width should not exceed 960px but should be fully responsive. How the site responds is up to you, but remember to consider the end user's mobile experience.

- Recreate the structure shown in screenshot.jpg in the sidebar. You don't need to match exact font sizes, fonts or colours, but try to have it looking as similar as possible
- Feel free to use placeholder images in lieu of those in the screenshot (or something like placekitten.com, if you fancy being a bit more adventurous. Or anything, really)
- The text visible in the screenshot can be replaced with paragraph text from this link (http://www.lebowskiipsum.com/dude/generate/paragraphs/1/cussin/false/mixed/true/startleb/true/html/false/characters/1,2,3,4,5,8,9,minor)

- You don't have to use vanilla CSS; you are free to use a preprocessor if you wish.

## Exercise the Second - JavaScript

Write a function called `Value`, returning an object that stores a number. The value of the returned object will be mutable but protected by minimum and maximum bounds. It should expose the following interface:

```
  var v = Value()
  v.value
  //=> 0

  var v2 = Value({value: 10, min: 0, max: 100})
  v2.value = 101
  //=> Error: Out of bounds
```

There is a small test suite supplied with this exercise. Run `npm install` to install the test runner and `npm test` to execute the tests. Your implementation of `Value` should be such that all these tests pass.
