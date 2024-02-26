// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }




// NaN Practice 🤯

  

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.







// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");

// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statement 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.

// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again.

// DRY => do not repeat yourself


// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


// 6️⃣ Fat Arrow Function 

// 👻 Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return `the sum of the two number is ${sum}`;
// }


// 👻 How to convert it into Fat Arrow Function 

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 


// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });

// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional. 

// No, -1, 0, and 1 in a comparison function are used to tell the caller how the first value should be sorted in relation to the second one.
// -1 means the first goes before the second, 1 means it goes after, and 0 means they're equivalent.

// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order 
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

//const array1 = [1, 4, 9, 16, 25];

//let newArr = array1.map((curElem,index,arr) => {
//    return curElem > 9; //num > 9
//})
//console.log(array1);
//console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);


// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

// let myName = "vinod thapa";
// console.log(myName.length);



// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes 

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);









// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("h", 6));
// (search for letter , start from which index)


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...




// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.


// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));

// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("Technical");
// console.log(sData);



// The search() method cannot take a second start position argument.



// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod`;

// let repalceData = myBioData.replace('vinod','VINOD');
// console.log(repalceData);
// console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work

//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));




// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );


// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));




// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);

//👉  Other useful methods 

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());


// Challenge Time NOT yet decided (LIVE CLOCK)
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 3000)
// })();

// // **********************************************************************

// Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object

// 2️⃣ All the members like objects, methods or properties. 
//  If they are the part of window object then we do not refer 
//  the window object. Since window is the global object 
//  so you do not have to write down window. 
//  - it will be figured out by the runtime.

// For example
// 👉  window.screen or just screen is a small information 
//      object about physical screen dimensions.
// 👉  window.location giving the current URL
// 👉  window.document or just document is the main object 
//      of the potentially visible (or better yet: rendered) 
//      document object model/DOM.
  

// 2️⃣  Where in the DOM we need to refer the document, 
//      if we want to use the document object, methods or properties
// For example
// 👉  document.getElementById()


// 3️⃣ Window has methods, properties and object. 
//    ex setTimeout() or setInterval() are the methods 
//    where as Document is the object of the Window and 
//    It also has a screen object with properties 
//    describing the physical display.


//  Now, I know you have a doubt like we have seen the methods 
//  and object of the global object that is window. But What about
//  the properties of the Window Object 🤔

//  so example of window object properties are
//  innerHeight, 
//  innerWidth and there are many more 

//  let's see some practical in DOM HTML file




// ************** DOM vs BOM *******************

// 👉  The DOM is the Document Object Model, which deals with the document, 
//      the HTML elements themselves, e.g. document and all traversal you 
//      would do in it, events, etc.

// For Ex: 👨‍🏫
//     change the background color to red
//     document.body.style.background = "red";


// 👉  The BOM is the Browser Object Model, which deals with browser components 
//      aside from the document, like history, location, navigator and screen 
//     (as well as some others that vary by browser). OR 
//      In simple meaning all the Window operations which comes under BOM are performed 
//      using BOM 




//    Let's see more practical on History object 

//    Functions alert/confirm/prompt are also a part of BOM: 
//    they are directly not related to the document, 
//    but represent pure browser methods of communicating with the user.

//    alert(location.href); // shows current URL
//    if (confirm("Want to Visit ThapaTechnical?")) {
//    location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }





// Section 3️⃣: Navigate through the DOM 

//  1: document.documentElement
      // returns the Element that is the root element of the document. 
//  2: document.head
//  3: document.body
//  4: document.body.childNodes (include tab,enter and whiteSpace)
//     list of the direct children only 
//  5: document.children (without text nodes, only regular Elements)
//  6: document.childNodes.length


/**** Section 11👉 EVENTS in JavaScript ****/


//  HTML events are "things" that happen to HTML elements.
//  When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
//  An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

//  An HTML web page has finished loading
//  An HTML input field was changed
//  An HTML button was clicked
//  Often, when events happen, you may want to do something.

//  JavaScript lets you execute code when events are detected.

//  HTML allows event handler attributes, with JavaScript code, 
//  to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

//  1: using inline events alert();
//  2: By Calling a function (We already seen and most common way of writing) 
//  3: using Inline events (HTML onclick="" property and element.onclick)
//  4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



//  section 2️⃣: What is Event Object?
//   Event object is the parent object of the event object. 
//   for Example 
//   MouseEvent, focusEvent, KeyboardEvent etc 



//  section ️3️⃣ MouseEvent in JavaScript
//   The MouseEvent Object
//   Events that occur when the mouse interacts with the HTML 
//   document belongs to the MouseEvent Object.



//  section ️4️⃣ KeyboardEvent  in JavaScript
//   Events that occur when user presses a key on the keyboard, 
//   belongs to the KeyboardEvent Object.
//   https://www.w3schools.com/jsref/obj_keyboardevent.asp


//  Section 5️⃣ InputEvents in JavaScript 
//   The onchange event occurs when the value of an element has been changed.

//   For radiobuttons and checkboxes, the onchange event occurs when the 
//   checked state has been changed.
 



// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************


//  The window object allows execution of code at specified time intervals.

//  These time intervals are called timing events.

//  The two key methods to use with JavaScript are:

//   1) setTimeout(function, milliseconds)
//      Executes a function, after waiting a specified number of milliseconds.

//   2)setInterval(function, milliseconds)
//      Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()



// **********************************************************************

// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣  What is Object Literal?

//   Object literal is simply a key:value pair data structure. 

//   Storing variables and functions together in one container, 
//   we can refer this as an Objects.

//   object = school bag 

//   How to create an Object?

//   1st way 

  //   let bioData = { 
  //       myName : "thapatechnical",
  //       myAge : 26,
  //       getData : function(){
  //          console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();


//  2nd way no need to write functions as well after es6

//     let bioData = { 
//     myName : "thapatechnical",
//     myAge : 26,
//     getData (){
//        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

//  bioData.getData();


// 👉 What if we want object as a value inside an Object 


//     let bioData = { 
//     myName : {
//       realName : "vinod",
//       channelName : "thapa technical" 
//     },
//      myAge : 26,
//      getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️⃣ What is this Object?

//   The definition  of "this" object is that it contain the current context. 

//   The this object can have different values depending on where it is placed.  


// // For Example 1 
//    console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
//    function myName() {
//      console.log(this);
//   }
//   myName();



// //  ex 3 

//   var myNames = 'vinod';
//    function myName() {
//       console.log(this.myNames);
//   }
//   myName();


// // ex 4 
//     const obj = {
//      myAge : 26,
//      myName() {
//        console.log(this.myAge);
//      }
//  }
//  obj.myName();

// // ex 5 
// //  this object will not work with arrow function bcz arrow function is bound to class.

//      const obj = {
//         myAge : 26,
//         myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

//   let bioData = {
//       myName : {
//           realName : "vinod thapa",
//           channelName : 'thapa technical'
//       },
//       // things to remember is that the myName is the key and the object is act like a value 
//       myAge : 26,
//       getData (){
//        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//       }
//     }

//     bioData.getData();


// //   call method is used to call the method of another object 
// //   or with call(), an object can use a method belonging to another object 

// //   But as per other it is simply the way to use the this keyword or another object 


// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?


// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 
// As the name suggests synchronous means to be in a sequence, i.e.
// every statement of the code gets executed one by one.
// So, basically a statement has to wait for the earlier statement to get executed.

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 
// Asynchronous code allows the program to be executed immediately where the synchronous 
// code will block further execution of the remaining code until it finishes the current one.

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// //👻 What is Event Loop in JavaScript?  {{ 13:05:00  }}
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.
 
// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";

// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// //  The scope chain is used to resolve the value of variable names 
// //  in JS.

// //  scope chain in js is lexically defined, which means that we can 
// //  see what the scope chain will be by looking at the code. 

// //  At the top, we have the Global Scope, which is the window Object
// //  in the browser.

// //  Lexical Scoping means Now, the inner function can get access to 
// //  their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();



// // 7️⃣ *** What is Closures in JavaScript 🤔

// //  A closure is the combination of a function bundled together (enclosed) with references 
// //  to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure); ??gives result in detail

// "use strict"

// let x = "vinod";
// console.log(x);


// //🏁🏁🏁 Back To Advanced JavaScript 




// Currying
// Currying is a technique of evaluating function with multiple arguments,
// into sequence of function with single argument.

// In other words, when a function, instead of taking all arguments at one time, 
// takes the first one and return a new function that takes the second one and returns a new function which takes the third one,
// and so forth, until all arguments have been fulfilled.

// That is, when we turn a function call add (1,2,3) into add (1) (2) (3).
// By using this technique, the little piece can be configured and reused with ease.

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);

// // **********************************************************************

// // 👉 // 🤩 SUBSCRIBE TO THAPA TECHNICAL YOUTUBE CHANNEL 🤩
//  👉 // 🤩  https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA

// // **********************************************************************



// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);  
// // Output="{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 

 
// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 

// typeof(object_as_string_as_object);  
// // "object" 



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data and get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });