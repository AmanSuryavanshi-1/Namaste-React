// $ 65) Types of Routing => Server Side & Client Side Routing

// $ 65.1) Server Side Routing :-
//  -> when you make a routing call to the server and the server loads the whole page again with the content.
//  -> It will load whole application again when their is any change in content.

// $ 65.2) Client Side Routing :- 
// ->  Whereas in client side routing only the changes are loaded only a particular component is loaded again.
// ->  Single page application uses client side routing.

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
