// 8) How to give heading using React into html -->

    // const heading = React.createElement("h2",
    //  {id: "heading", xyz:"abc"}, 
    //  "Hello world from react");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
  

// 9) How to create nested structure inside React (using array of children in *  [] *  )

    /* 

    * <div id="parent">
    *    <div id="child">
    *        <h1>I'm h1 tag</h1>
    *        <h1>I'm h2 tag</h1>
    *    </div>
    * </div>

    ReactElement(Object) => HTML that browser understands */

    const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement("div",
        {id:"child"},
        [ 
        React.createElement("h1",{},"This is EP2 of Namaste React Course"),
        React.createElement("h1",{},"I'm h2 tag"),
        ]
        )
        ); 

        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);

// 10) to solve the above complex writing structure we use JSX

// EP2
// to use it inside app.js we have to import it from our node modules
import React from "react"
import ReactDOM from "react-dom"

// 21) Parcel
//    - It plays a imporatant role in making a react app faster
//    - parcel is a bundler which minifizes and optimizes the code  
//    - it creates a Dev Build 
//    - creates a local server
//    - Automatically refreshing the page or (HMR) hot module replacement
//    - it uses a File Watching Algorithm which is written in C++
//    - It gives Faster builds because it uses Caching in .parcel-cache
//    - It does Image Omptimization
//    - Compresses
//    - Webpack / Vite / parcel are the commonly used bundler
