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

    // const parent = React.createElement(
    //     "div",
    //     {id:"parent"},
    //     React.createElement("div",
    //     {id:"child"},
    //     [ 
    //     React.createElement("h1",{},"This is EP2 of Namaste React Course"),
    //     React.createElement("h1",{},"I'm h2 tag"),
    //     ]
    //     )
    //     ); 

    //     console.log(parent);
    //     const root = ReactDOM.createRoot(document.getElementById("root"));
    //     root.render(parent);
//root.render will not append data in index.htm it will replace the data present in index.html with app.js content
// 10) to solve the above complex writing structure we use JSX

// EP2
// to use it inside app.js we have to import it from our node modules
import React from "react"
import ReactDOM from "react-dom"

//EP3
// const heading = React.createElement("h2",
//      {id: "heading"}, 
//      "HI I'M REACT HEADING");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);
    // 22) This is core  of react this is how we write in core language in react.
    // 23) It is very difficult to write long codes. To overcome this hard syntax writing problem React developers introduced jsx in react.
    // 24) JSX is convention in react where we merge html and js together
    // 25) JSX is not HTML in JS it is HTML like syntax

    // h1 tag created in jsx and it's completely same
    const jsxHeading = <h1 id="heading">HI I'M JSX HEADING</h1>;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxHeading);

    // 26) JS engine will not understand JSX it will only understand ECMA script
    // 27) Then how it is working? Parcel is doing it for us.
    // 28) when JSX code is given to the browser it is transpiled into the language understood by browser. This Transpilation is done by JS engines
    // 29) Parcel is a manager it uses BABEL to convert jsx into browser understandable language.

    // 30) JSX is converted into React.createElement than it's converted into ReactElement-JS Object than it's converted into HTML ELEMENT(render) 
    //     JSX => React.createElement => ReactElement-JS Object => HTML ELEMENT(render)
    // 31) BABEL also transpile the code for older versions of browsers so that they can also understand and render the site