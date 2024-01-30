# 43) How to check Data of live sites like swiggy 
=> Console -> Network -> Fetch/XHR -> preview
data is usually stored in v5 or u can just search for most relatable word in console like cuisines.
 
=> can we hide fetch/XHR data of live site?
    -Most of the websites have hidded there data right now.
    -There are few ways to "hide" them or actually make them less obvious to find.
        a) Make a JSON request, they are not real AJAX calls, as they do not use the XMLHttpRequest object.
        b) You can also clear console via script among the lines of

            ```javascript           
                    function clearConsole() { 
                                    if(window.console || window.console.firebug) {
                                    console.clear();
                                    }
                                }
            ```
        c) Using network analyzer tools
        
# 44) Fetching Img for resCard from JSON object taken from Swiggy live site
-> It is in the form of cloudinary image id
-> What is Cloudinary?
    - when you build these large scale applications all the image are stored and hosted in a CDN.
    - this res.clodinary.com is a CDN in which swiggy has stored its IMG data
-> It consist of two things (link + cloudinary image id)
    - https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_328,c_fill/ + cloudinaryImageId 
->  how it will be in JSON obj?
    - The JSON object will only contain the ID's
    - The resCard will contain the common link ("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_328,c_fill/") and this link is appended with the cloudinaryId which is coming from JSON object
    - In my code i have used latest CDN used by swiggy right now.

 
    