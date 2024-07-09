// $ 5) - 7) in index.html

//$ 8) How to give heading using React into html -->

  /*   const heading = React.createElement("h2",
     {id: "heading", xyz:"abc"}, 
     "Hello world from react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); */

//$ 9) How to create nested structure inside React (using array of children in *  [] *  )

     {/* <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h1>I'm h2 tag</h1>
        </div>
     </div> */}

    // ReactElement(Object) => HTML that browser understands

    /* const parent = React.createElement(
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
        root.render(parent); */

//! EP2
// $ 10) - 11) Notion notes
//! EP3
// $ 12) - 17) Notion Notes
// to use it inside app.js we have to import it from our node modules
import React from "react"
import ReactDOM from "react-dom"

   function Title() {
    return (
        <div className="div">
            <h1>REACT Title Component</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);