# JavaScript Beginner Track

# JavaScript

**JavaScript** (**JS**) is a lightweight, interpreted, or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled programming language. While it is most well-known as the scripting language for Web pages, [many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) also use it, such as [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/), and [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html). For web designers, we can simply say this adds functionality to your web pages also known as the brain of a webpage.

This track is for absolute beginners but you must have knowledge of basic HTML and CSS as we will implement JS concepts on the webpage so you must know the basic tags of HTML and CSS for designing. Here we will not include everything about a concept instead will make a roadmap to follow and will include their study material where you can go and read about that and come back to do some exercise and projects.

## **LEVEL 1: GET ON THE TRACK.**

First of all, you should know **where we write JavaScript code** on a web page. You can write it in head or at the end of the bode just below the closing body tag (</body>). All you have to make sure is you are writing it in <script> tag. You can also make an external file like we do in CSS and include it in our HTML file. You can read more about it [here](https://www.w3schools.com/js/js_whereto.asp). Well, there is more to it if you don’t want to make a webpage you can directly start practicing in dev tools. Just press Ctrl+Shift+I or F12 or simply inspect any web page, then go to the console tab and there you go you can write your code three as well (for practice).

**Print “Hello World”:** First step of any programming language? … Off course printing hello world. In JavaScript, there are various methods like alert (), document.write() , console methods, and more. You can read about them [here](https://www.w3schools.com/js/js_output.asp) and for detailed console methods, you can refer [to this](https://developer.mozilla.org/en-US/docs/Web/API/console).

**Variables**: Variables are containers for storing data (values). And in JavaScript, we use Implicit declaration which means you don’t have to write data type (int, char, etc.) as we do in C or C++. We can define variables by using three keywords, [Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [Var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and you can read more about it by clicking on their names.

**Exercise**: A small exercise for you, store your name in a variable and print it with some greetings like “Hello Vikas!”.

**Data Structures:** Don’t be scared by the name we will not do any algorithms or CP questions here. We will understand some primitive and reference type data types in JavaScript.

Primitive Data types: Undefined, null, symbol, number, string, Boolean, bigInt

Reference Data Types: Array, Object

You can read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

**Operators and Arithmetic Operation:** There are different operators to perform different actions in JavaScript like ‘+’ operator is used for adding and concatenation, || OR operator etc. You can check [this](https://www.w3schools.com/js/js_operators.asp) for operators and [arithmetic operations](https://www.w3schools.com/js/js_arithmetic.asp).

**Function:** Functions are used to make code reusable so you can define a function once and can invoke it anytime time you need to perform that particular task instead of rewriting the code. A JavaScript function is defined with the function keyword, followed by a **name**, followed by parentheses **()**.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas: **(*parameter1, parameter2, ...*)**

The code to be executed, by the function, is placed inside curly brackets: **{}**

You can read more about it [here](https://www.w3schools.com/js/js_functions.asp). There is also a way to write the function without function keyword and it is known as arrow functions and is introduced in ES6. You can read it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

**Exercise: Make different functions to add, subtract, multiply and divide two numbers and invoke them by passing variables containing two different numbers into it.**

**Set timeout and set interval:**

set Timeout (expression, timeout); runs the code/function ***once*** after the timeout.

setInterval(expression, timeout); runs the code/function ***repeatedly***, with the length of the timeout between each repeat.

You can read more about them in these two links [here](https://www.w3schools.com/jsreF/met_win_settimeout.asp) and [here](https://www.w3schools.com/jsreF/met_win_setinterval.asp).

**String methods:** We have some string methods in JavaScript to make things easier with strings. There are methods to concatenate strings, split them into arrays, and many more you can read about them [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods).

**Date and Time: Here** in JavaScript we have methods to get date and time directly using new Date() constructor. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [here](https://www.w3schools.com/js/js_dates.asp).

### **TASK 1**

So now it’s time to make a small project to show what you have learned yet. You have to make a pull request for it.

**Description**: You have to make a simple webpage that will display the current time and it should update automatically after a second pass.  (Hint: make use of the setInterval)

Here is a screenshot, what you will make. You can use your own creativity to make it more beautiful.

![Untitled](JavaScript%20Beginner%20Track%200e60ca90a02548ad8a7f0e16e68f9582/Untitled.png)

Optional: If you want to push yourself to make a more beautiful thing you can make an analog clock also JS concept for it will remain the same, but you have to use creativity in CSS (Hint: rotate property and absolute position)

Here is the screenshot of it. And a link to view it [https://vipul0425.github.io/Analog-watch/](https://vipul0425.github.io/Analog-watch/)

![Untitled](JavaScript%20Beginner%20Track%200e60ca90a02548ad8a7f0e16e68f9582/Untitled%201.png)

Hope you enjoyed this task now let’s jump to another level.

## Level 2: Know the Fundamentals

**Array:** An array is a special variable, which can hold more than one value at a time. An array can hold many values under a single name, and you can access the values by referring to an index number. Using an array literal is the easiest way to create a JavaScript Array. For example: const *array_name* = [*item1*, *item2*, ...].

There is another method for it which is using new keyword: For example:

const cars = new Array("Saab", "Volvo", "BMW");

You can read more about arrays [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

There are different methods to work with arrays as we did for strings, and you can read about them [here](https://www.w3schools.com/js/js_array_methods.asp).

**Object:** Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real-life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. In the same way, JavaScript objects can have properties, which define their characteristics. You can read about objects [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and [here](https://www.w3schools.com/js/js_objects.asp).

**Loops:** Loops offer a quick and easy way to do something repeatedly. There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. JavaScript offers the following kinds of loops, and you can read about them by clicking on their name.

- [for](https://www.w3schools.com/js/js_loop_for.asp) - loops through a block of code several times
- [for/in](https://www.w3schools.com/js/js_loop_forin.asp) - loops through the properties of an object
- [for/of](https://www.w3schools.com/js/js_loop_forof.asp) - loops through the values of an iterable object
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) – to iterate an array
- [while](https://www.w3schools.com/js/js_loop_while.asp) - loops through a block of code while a specified condition is true
- [do/while](https://www.w3schools.com/js/js_loop_while.asp) - also loops through a block of code while a specified condition is true

**Exercise:** Store some items you want to buy in an array and print them in the console.

**Conditions:** A **condition** is a set of rules that can interrupt normal code execution or change it, depending on whether the condition is completed or not.

An instruction or a set of instructions is executed if a specific condition is fulfilled. Otherwise, another instruction is executed. It is also possible to repeat the execution of an instruction, or set of instructions, while a condition is not yet fulfilled.

You can read more about it [here](https://www.w3schools.com/js/js_if_else.asp). And you can read about the switch case [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

**Dom selectors:** When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page. The **HTML DOM** model is constructed as a tree of **Objects**. You can read more about the DOM model [here](https://www.w3schools.com/js/js_htmldom.asp).

And with the help of this model, we can select different elements in the web page. There are different types of selectors in JS.

Single element Selector:

- getElementById
- querySelector

Multi Element Selectors:

- getElementsByClassName
- getElementsByTagName
- querySelectorAll

You can read all about these selectors, how to use them and how to change certain properties of elements [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) and [here](https://www.w3schools.com/js/js_htmldom_css.asp).

**Events:** There are many events in JavaScript with the help of which you can add functionality to your web page. You can read about some common events [here](https://www.w3schools.com/js/js_events.asp).

**Exercise**: Take name as input from the users with the help of HTML forms and then make a function which will greet that user with a good morning or good afternoon depending upon the time and print the result on the webpage. (HINT: use conditions to check the time and while taking the input to remember to put .value to retrieve the value of that input field).

**Math Object:** The JavaScript Math object allows you to perform mathematical tasks on numbers. There are various methods, and you can read about them [here](https://www.w3schools.com/js/js_math.asp).

### **TASK 2**

So, it’s time for another quick project. Get ready to make one more pull request.

**Description:** In this task, you have to make a simple game in which you will generate a random number then the user will make a guess if that number matches, he wins the game else he lose. You can use your own creativity while designing it.

Optional: You can give an option of chances users have for example you can give 3 chances to a user to make guess then the final decision will come up. You can take input from the user about the lower and upper limit of the random number and lastly you can add some audio if he wins or loses.

Screenshot and link: [Random Number Guesser Game (vipul0425.github.io)](https://vipul0425.github.io/Random-Number-Guesser/)

![Untitled](JavaScript%20Beginner%20Track%200e60ca90a02548ad8a7f0e16e68f9582/Untitled%202.png)

Congrats on one more pull request now let’s move on to another level.

## Level 3: Digging up the things

**DOM Navigation:** As we have seen earlier that a web page can be seen as a tree structure. So, there are ways to traverse it like selecting the parent element of the subject or selecting its descendants. You can read more about it [here](https://www.w3schools.com/js/js_htmldom_navigation.asp).

**Creating dynamic element:** You can create an element dynamically in the HTML page with the help of document.createElement(tagename) and then append it in the DOM as per your need. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).

**Event Listeners**: Earlier we have seen some events related to mouse and keyboard. Event Listeners can listen for a particular event on a particular element and you can achieve this by element.addEventListener(*event*, *callback*). You can read about it [here](https://www.w3schools.com/js/js_htmldom_eventlistener.asp).

**Template literals:** This is an ES6 feature and is very useful. Template Literals use back-ticks (``) rather than quotes ("") to define a string. It provides an easy way to interpolate variables and expressions into strings. The method is called string interpolation. The syntax is: {…}.

You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

**Local storage:** Web storage objects localStorage and sessionStorage allow saving key/value pairs in the browser. What’s interesting about them is that the data survives a page refresh (for sessionStorage) and even a full browser restart (for localStorage). So, you can make a simple webpage that will have a storage facility without having a database or any server.

You can read more about localStorage [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and about sessionStorage [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

### **TASK 3**

Now it’s time to make the last pull request for this track.

**Description:** You have to make a Day planner or To-do list in which you use can add list items and delete them after completion. This whole thing should be implemented with local storage so whenever the user comes back to the webpage his items should be present there. You can make designs as per your creativity.

Optional: You can add the search feature to search tasks and you can display date and day. Moreover, you can make a section where completed items will be enlisted. And you can add more features as you want.

Screenshot and link: [https://dayplan.netlify.app/](https://dayplan.netlify.app/)

![Untitled](JavaScript%20Beginner%20Track%200e60ca90a02548ad8a7f0e16e68f9582/Untitled%203.png)

Hope you enjoyed this task and this track also. This is not an end of JavaScript, there is much more into it. The more you dig the more you will find. So, what’s the **next step?** Well, now you have some basic knowledge you can proceed with some more concepts like promises, callbacks, working with APIs, Async Await, and much more. You can refer to the MDN docs if you like reading or you can refer to some YouTube channels like Traversy Media, Hitesh Chaudhary, Code With Harry, etc. if you prefer video content.

Good Luck with your journey!