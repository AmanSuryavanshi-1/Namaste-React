// $ 7) API (Application Programming Interface): 
// -> It's a set of rules and protocols that allows different software applications to communicate with each other.
// -> It's commonly used in web development to interact with external services or resources.

// $ 8) Context API: 
// -> It's a feature provided by React that allows components to share data without having to pass props manually through every level of the component tree.
// -> It's useful for managing and sharing state across components, especially when data needs to be accessed by many components at different nesting levels.

// $ 7) API
// -> Creating a front-end and back-end for testing purposes.
// -> Initiating backend
// npm init -y
// npm i express
// -> Creating a small backend with mock data init.
// $ 7.1) in index.js

// $ 7.2) API front-end
// $ 7.2.1) Initiating a front-end app using vite
//  npm create vite@latest .
//  √ Select a framework: » React
//  √ Select a variant: » JavaScript
//    npm install
//    npm run dev

// $ 7.2.2) To avoid CORS Error we will make changes in viteLogo.config.js
            /* server:{
                proxy:{
                'api': 'https://localhost:3000'
                }
            }, */
// $ 7.2.3) Installing AXIOS to get the data from the backend server (App.jsx of frontend)
//      -> Axios is widely used in modern web development for its simplicity, versatility, and robust feature set, making it a preferred choice for handling HTTP requests in JavaScript applications.
//      -> Axios provides a reliable solution for making HTTP requests and interacting with remote APIs.

// =>   a) API that abstracts away the complexities of XMLHttpRequests (XHR) and provides features such as:-
//      -> HTTP request methods: Axios supports all standard HTTP request methods, including GET, POST, PUT, DELETE, and more, making it versatile for interacting with RESTful APIs.
//      -> Response handling: Axios automatically parses JSON responses and provides response data in a convenient format, making it easy to work with data returned from API endpoints.
//      -> Request and response interception: Axios allows for request and response interception, enabling features like logging, authentication, error handling, and request/response modification.
//      -> CSRF protection: Axios includes built-in protection against Cross-Site Request Forgery (CSRF) attacks through a feature called XSRF protection.

// =>   b) Axios Alternatives in React-specific ecosystems:
// ->>  1) Fetch with async/await: In many cases, especially in React applications, developers opt to use the Fetch API directly along with async/await syntax for making HTTP requests.
//          -> This approach can simplify code and reduce dependencies, especially for projects where Axios might be considered overkill.

// ->>  2) React Query: React Query is a powerful data fetching library for React applications that provides a hooks-based API for fetching, caching, and updating data from remote APIs. 
//          -> While not a direct replacement for Axios, React Query can be used alongside or instead of Axios in React applications to manage data fetching and caching more efficiently.

// =>   c) AXIOS VS FETCH 
//& Choose Axios: If you need a wider browser support, simpler syntax, built-in features like interceptors and error handling, and a larger community for support.
//& Choose Fetch: If you want a minimalist approach, no external dependencies, and more granular control over requests and responses.


//@  Feature	                                Axios             	         V/S                   Fetch
//-> Installation	                Required (npm or yarn)	                             No installation needed
//-> Support	                    Wider(includes older browsers)                       Modern only (stringify and parse)
//-> Syntax	                        Simpler	                                             Verbose
//-> Data handling	                Auto JSON	                                         Manual JSON
//-> Response access	            Data property                                        Variable of your choice after response.json()
//-> Error handling	                Built-in error handling with status codes 	         Requires checking response.ok property
//-> Community & Documentation	    Larger community & extensive documentation	         Smaller community & less extensive documentation
//-> Features	                    More built-in	                                     Fewer built-in
//-> Learning Curve	                Easier	                                             Steeper

//@ Getting CORS Error While trying tno connect frontend with backend
//@ after npm i cors my cors error disappeared
//& in index.js of backend 
// import cors from 'cors';
// After `const app = express();`
// app.use(cors());
//& in vite.config.js
// export default defineConfig({
//     server:{
//       proxy:{
//         'api': 'https://localhost:3000'
//       }
//     },
//     plugins: [react()],
//   })
  