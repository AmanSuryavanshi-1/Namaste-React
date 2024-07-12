
console.log("EP6");

// ! EP6 


// $ 53) How react renders data from an API
// -> 1st approach => As soon as our page loads we call the API for data then it will render the whole page. Suppose it takes 500ms.
// =>  Loads -> API -> Render

// -->  2nd approach is the better approach. It is used in React & it will give you a better UX.
// -> 2nd approach => As soon as our page loads we will render the UI and then call the API for data then it will ReRender the whole page by providing data to it. It will take lesser time.
// =>  Loads -> Render -> API -> ReRender

// $ 54) ( useEffect HOOK ) HOW TO GET DATA FROM AN API INSIDE REACT APP  &&  useEffect implementation from IMP ReactJS Topics

//  --> Purpose :-
//      -> Allows you to perform side effects in functional components.
//      -> Side effects include data fetching, subscriptions, timers, DOM manipulation, and anything outside the render cycle.

// --> When it runs :-
//      -> After the component renders (including the first render).
//      -> Optionally, after every render if the dependency array changes.


// --> useEffect will come from react library so we have to import in the file before using it.

//&  Q: Why do we need a useEffect Hook?
//&  A: useEffect Hook is javascript function provided by react. The useEffect Hook allows you to eliminate side effects in your components. 
//      -> Some examples of side effects are: fetching API data, directly updating the DOM, and setting up subscriptions or timers, etc can be lead to unwarranted side-effects. 
//      -> useEffect accepts two arguments, a callback function and a dependency array. The second argument is optional.

//      -> There is an arrow function ()=>, 1st argument i.e. a callback function {} and 2nd argument as a dependency array []      ==>  useEffect(()=>{},[]);  <==


// --> Dependency Array:
//      -> An optional array of values used to determine when the effect re-runs.
//      -> If the array is empty, the useEffect only runs after the initial render or when the UI is rendered.
//      -> If the array includes values, the effect re-runs whenever any of those values change.

            /* useEffect(()=>{
            console.log("useEffect Called");
            // Side Effects Handling

            // Optional return function
            },[dependency array])

            console.log("Body rendered"); */

//&  Q: When console.log will get printed?
//&  A: -> After the React component will get rendered it will then ReRender the data from an API.
//      -> The code will run the body component will render and then the useEffect is executed and then the callback function is called and then the console.log() will get printed in console.
//      -> When you have to do something which you want to be rendered after the react component will get loaded then you have to use useEffect.
//      => The body rendered will be printed first in the console and then the useEffect called will be printed

//&  Q: After loading the content of component and if there are any changes in data how are they will be shown in browser?
//&  A: To handle these type of changes useEffect is used.

// useEffect Example in React IMP Topics Notes (YT). => // $ 12) useEffect (useEffect.jsx)

// $ 56) ALL ABOUT CORS
//  1) Cross-origin resource sharing (CORS)
//  2) CORS WILL BLOCK US TO GET DATA FROM THE LIVE SWIGGY API
//  3) It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page.
//& 4) When making a cross-origin HTTP request from a web page, the browser enforces the Same-Origin Policy, which restricts the web page's ability to make requests to a different origin (protocol, domain, or port). If the request violates the Same-Origin Policy, the browser blocks it, and you encounter a CORS error.
//  5) CORS is mechanism which uses additional HTTP header's to tell the browsers weather a specific webapp can share the resources with another webapp.
//  6) If they have same origin they can share origin very easily
//  7) If they don't have same origin then they need to follow the CORS mechanism.

//& Q1) What is origin?
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

