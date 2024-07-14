// ! EP6 

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

