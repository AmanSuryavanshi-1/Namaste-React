// $ 65) Types of Routing => Server Side & Client Side Routing

//&  Q: What is SPA?
//&  A: Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. 
//      All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. 
//      An SPA is sometimes referred to as a single-page interface (SPI).



// $ 65.1) Server Side Routing :-
//  => In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.
//  -> when you make a routing call to the server and the server loads the whole page again with the content.
//  -> It will load whole application again when their is any change in content.

// $ 65.2) Client Side Routing :- 
//  => In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, 
//     the router library navigates the user to the new page without sending any request to backend. 
//  -> All Single Page Applications uses client-side routing.
//  -> In client side routing only the changes are loaded only a particular component is loaded again.

// => Feature           |              Server-Side Routing 	                                   |             	Client-Side Routing
// -> Process	        |   Server: Interprets URL, generates content, sends HTML.	           |   Browser: Interprets URL, fetches data, updates content dynamically.
// -> Server's Role	    |   Handles all requests, renders content, and sends complete HTML.    |   Fetches data upon request and serves static assets.
// -> Initial           |   Faster (no extra requests)	                                       |   Slower (needs to load JavaScript first)
// -> Navigation        |	Slower (requires server round trips)	                           |   Faster (updates page content without reloading)
// -> SEO	            |   Better (search engines can easily read content)	                   |   Worse (search engines might miss dynamic content)
// -> User Experience   |   Feels traditional, requires complete page reloads.	               |   Modern, Can feel more responsive and app-like.
// -> Scalability	    |   Less scalable (more server resources)	                           |   More scalable (less server load)
// -> Security	        |   Sensitive logic can be executed on server-side.                    |   JavaScript code can potentially be vulnerable.
// -> Example	        |   Traditional websites, WordPress	                                   |   Single-page applications (SPAs), React, Vue.js
