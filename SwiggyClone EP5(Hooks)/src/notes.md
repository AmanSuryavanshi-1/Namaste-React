# EP6 

# 56) ALL ABOUT CORS
1) Cross-origin resource sharing (CORS)
2) CORS WILL BLOCK US TO GET DATA FROM THE LIVE SWIGGY API
3) It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page.
4) When making a cross-origin HTTP request from a web page, the browser enforces the Same-Origin Policy, which restricts the web page's ability to make requests to a different origin (protocol, domain, or port). If the request violates the Same-Origin Policy, the browser blocks it, and you encounter a CORS error.
5) CORS is mechanism which uses additional HTTP header's to tell the browsers weather a specific webapp can share the resources with another webapp but both the webapp should have different origins.
6) If they have same origin they can share origin very easily
7) If they don't have same origin then they need to follow the CORS mechanism.

Q1) What is origin?
Domain name -> aman.in (The browser did not allow aman.in to share the resources with other origin).

=> Our browser with the help of CORS is not allowing us to access the swiggy live api in our localhost
=> There is a way to bypass CORS using Alow CORS chrome extension


 