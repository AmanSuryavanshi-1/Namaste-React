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
//    -> when setListOfRestaurants function is called the old listOfRestaurant is updated with new list of restaurants to the browser window.

console.log("EP6");

// ! EP6 

// $ 52) MONOLITH ARCHITECTURE
// -> “mono” represents the single codebase containing all the required functionalities. 
// ->  All the functionalities of a project exist in a single codebase
// ->  We design our application in various layers like presentation, service, and persistence and then deploy that codebase as a single jar/war file
// ->  It has an API, UI, Auth, DB code written inside one project

// ->  Difficult to manage
// ->  We need to redeploy the whole application, even for a small change.
// ->  All the teams work on single Repository
// ->  Everything should be written in one language.

// $ 52.1) Microservices
// ->  It is an architectural development style in which the application is made up of smaller services that handle a small portion
//     of the functionality and data by communicating with each other directly using lightweight protocols like HTTP.
// ->  It has different services for different tasks like API, UI, Auth, DB micro services.
// ->  These microservices combines together to form a large app (EG UBER)
// ->  These microservices talk to each other according to the requirements of the project.

// ->  There are separate service for different concerns this is known as SEPARATION OF CONCERNS or SINGLE RESPONSIBILITY PRINCIPLE
// ->  Instead of sharing a single database with other microservices, each microservice has its own database.
// ->  Every team work on their own independent service
// ->  You can have different techStacks for different things and can use any other language. In our case we are working on UI microservices with React as a techStack

//  &  How the services connect to each other?
//  &  Every service is hosted on different ports and hosted in different URL for eg : api is stored in url/api , url/sms, url/ for UI etc.
//  &  So when UI needs to connect to backend it sends request to url/api and to connect with sms services it calls for url/sms

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
            },[dependency array])

            console.log("Body rendered"); */

//&  Q: When console.log will get printed?
//&  A: -> After the React component will get rendered it will then ReRender the data from an API.
//      -> The code will run the body component will render and then the useEffect is executed and then the callback function is called and then the console.log() will get printed in console.
//      -> When you have to do something which you want to be rendered after the react component will get loaded then you have to use useEffect.
//      => The body rendered will be printed first in the console and then the useEffect called will be printed

//&  Q: After loading the content of component and if there are any changes in data how are they will be shown in browser?
//&  A: To handle these type of changes useEffect is used.


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

