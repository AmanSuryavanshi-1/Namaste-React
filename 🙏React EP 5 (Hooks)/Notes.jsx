// $ 51) React Algorithm 

// $ 51.1) Reconciliation Algorithm / REACT FIBER 
// & React uses something known as Reconciliation Algorithm also known as React Fiber
// & React Reconciliation is the process through which React updates the Browser DOM. 
// & It makes the DOM updates faster in React. 
// & It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

//    -> suppose we have a RestaurantContainer and we have 7 cards init.
//    -> After using filter and useState only 3 cards  are showed on the browser.
//    -> React uses virtual DOM to achieve this smoothly.

// $ 51.1.1) ACTUAL DOM 
//    -> Actual DOM stores the components of a website in a tree structure.
//    -> DOM structure is like  div in div inside there can be a img and a link in it etc.

// $ 51.1.2) VIRTUAL DOM 
//    -> VIRTUAL DOM is not an actual DOM
//    -> It is representation of actual DOM
//    -> It is a normal JS object.
//    -> React uses virtual DOM which is a lightweight version of the DOM. 
//    -> The only difference is the ability to write the screen like the real DOM,

// $ 51.1.3) DIFFING ALGORITHM => Diffing is short form for Differences Algorithm 
//    -> It is used to differentiate the DOM Tree for efficient updates.
//    => Diff algo will calculate the difference between old and new virtual dom and when there is a difference it ReRenders the DOM.
//    -> It occurs after every render cycle. In fact, a new virtual DOM is created after every re-render.

// ~ why there are two functions in const [listOfRestaurants , setListOfRestaurants] = useState(resList);
// ~ Why can't we change it directly?
//    -> Bcz there need to be a trigger to start the DIFF algorithm and so that the rerendering occurs and the DOM gets updated.
//    -> Whenever you will call setListOfRestaurants function it will automatically rerender your component

//    -> const [listOfRestaurants , setListOfRestaurants] = useState(resList) we are destructuring it on the fly.
//    -> It is basically a array of functions & We are just destructuring on fly
//    -> const [listOfRestaurants , setListOfRestaurants] = arr  &  arr= useState(resList);

console.log("EP6");
// ! EP6 

// $ 56) ALL ABOUT CORS
// 1) Cross-origin resource sharing (CORS)
// 2) CORS WILL BLOCK US TO GET DATA FROM THE LIVE SWIGGY API
// 3) It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page.
// 4) When making a cross-origin HTTP request from a web page, the browser enforces the Same-Origin Policy, which restricts the web page's ability to make requests to a different origin (protocol, domain, or port). If the request violates the Same-Origin Policy, the browser blocks it, and you encounter a CORS error.
// 5) CORS is mechanism which uses additional HTTP header's to tell the browsers weather a specific webapp can share the resources with another webapp but both the webapp should have different origins.
// 6) If they have same origin they can share origin very easily
// 7) If they don't have same origin then they need to follow the CORS mechanism.

// Q1) What is origin?
// Domain name -> aman.in (The browser did not allow aman.in to share the resources with other origin).

// Domain A.com -> B.com
// => THIS OCCURS WHEN YOU TRY TO FETCH THE RESOURCES OF DOMAIN A.com IN THE DOMAIN B.com
// -> A.com can access anything from b.com
// -> While we send any information from out browser to any domain. So, we have sended a HEADER with it that header have some information in it like STATUS, DOMAIN, PROTOCOL, POST, GET, UPDATE, DELETE
// -> Similar request is sent to your server and the server gives response to it.
// -> There is no problem when you're trying to  access any resources in a.com
// -> CORS ERROR Arises when we try to fetch from another Domain B.com





// => Our browser with the help of CORS is not allowing us to access the swiggy live api in our localhost
// => There is a way to bypass CORS using Alow CORS chrome extension

