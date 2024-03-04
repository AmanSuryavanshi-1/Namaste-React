import React from "react";
import { useRouteError } from "react-router-dom";
// -> This is the hook provided by react-router-dom for handling errors
// => Anything which contains a use in the name then it is a hook
// -> It is used to give more details about the error or how the error has occurred. 
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
//  -> Error response in the console
            /* 
            * data: "Error: No route matches URL \"/acsac\""
            * error: Error: No route matches URL "/acsac" at getInternalRouterError (http://localhost:1234/App.f684dadd.js:224419:59) at createRouter (http://localhost:1234/App.f684dadd.js:221195:17) at createBrowserRouter (http://localhost:1234/App.f684dadd.js:227031:35) at parcelRequire.src/App.js.react (http://localhost:1234/App.f684dadd.js:228347:57) at newRequire (http://localhost:1234/App.f684dadd.js:47:24) at http://localhost:1234/App.f684dadd.js:81:7 at http://localhost:1234/App.f684dadd.js:120:3
            * internal: true
            * status: 404
            * statusText: "Not Found" */
// -> We can use this error response to provide specific details of why error is occurring
    return(
    <div>
        <h1>OOPS!!!</h1>
        <h2> Something went Wrong</h2>
        <h3>Coustomized error component</h3>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
    );
};

export default Error;
