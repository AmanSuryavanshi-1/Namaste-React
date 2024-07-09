//$ 1) How to give heading using React into html -->

  /*   const heading = React.createElement("h2",
     {id: "heading", xyz:"abc"}, 
     "Hello world from react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); */

//$ 2) How to create nested structure inside React (using array of children in *  [] *  )

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

// -> root.render will not append data in index.html it will replace the data present in index.html with app.js content

//$ 10) to solve the above complex writing structure we use JSX

//! EP2
// to use it inside app.js we have to import it from our node modules
import React from "react"
import ReactDOM from "react-dom"

//! EP3
      /*   const heading = React.createElement("h2",
         {id: "heading"}, 
         "HI I'M REACT HEADING");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading); */
   
//$ 22) This is core  of react this is how we write in core language in react.
//$ 23) It is very difficult to write long codes. To overcome this hard syntax writing problem React developers introduced jsx in react.
//$ 24) JSX is convention in react where we merge html and js together
//$ 25) JSX is not HTML in JS it is HTML like syntax

    // h1 tag created in jsx and it's completely same
    // THIS IS THE REACT ELEMENT
    // const jsxHeading = <h1 id="heading">HI I'M JSX HEADING</h1>;
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(jsxHeading);

//$ 26) JS engine will not understand JSX it will only understand ECMA script
//$ 27) Then how it is working? Parcel or a webpack is doing it for us.
//$ 28) when JSX code is given to the browser it is transpiled into the language understood by browser. This Transpilation is done by JS engines
//$ 29) Parcel is a manager it uses BABEL to convert jsx into browser understandable language.

//$ 30) JSX is converted into React.createElement than it's converted into ReactElement-JS Object than it's converted into HTML ELEMENT(render) 
    // JSX => React.createElement => ReactElement-JS Object => HTML ELEMENT(render)
//$ 31) BABEL also transpile the code for older versions of browsers so that they can also understand and render the site

//$ 32) className="head" is converted into normal class in browser
/* 
    const jsxHeading = (
    <h1 id="heading" className="head">
        HI I'M JSX HEADING
    </h1>);
*/
//$ 33) if u write jsx in multiple lines then you have to put the code in bracket it's mandatory

//$ 34) REACT COMPONENTS 
//$ Two types of components
        //$ 34.1] Class Based Component - Old way (Don't use)
        //$ 34.2] Functional Component - New (easy then class based

        //$ 34.2] REACT FUNCTIONAL COMPONENT
        //$ 1. name it with a capital letter (react way to understand components)
        //$ 2. it is a normal JavaScript function which returns the piece of jsx
        //$ 3. Everything in react is component navbar footer header images description....
    // const HeadingComponent = () => {
    //     return <h1>Namaste react Functional Component</h1>;
    // };

        //-> Short hand syntax: no need to write return and the brackets "()" if the code is one liner as shown below :-
    
    // const fn = () => true;
        //~ or
    // const fn = () =>(
    //     return true;
    // );
        //~ both are same


    // const HeadingComponent = () => (
    //     return <h1>Namaste react Functional Component</h1>;
    // );
        //~ or 
    // const HeadingComponent = () => <h1>Namaste react Functional Component</h1>;
        //~ both are same


    //^ Sometimes we write return and some times we don't for EG:-
    // const HeadingComponent = () => (
    //     return <h1> Namaste react Functional Component</h1>;
    // );
        //~ or 
    // const HeadingComponent = () => (
    //     <h1> Namaste react Functional Component</h1>;
    // );
        //~ both are same


//$ 35) How to enter this is in root.render or how to render it on webpage
    // root.render(jsxHeading); not like this. This method is used to render REACT ELEMENTS
    // root.render(<HeadingComponent/>); This method is used to render REACT FUNCTIONAL COMPONENTS on the webpage

//$ 36) Rendering a component inside heading component

   const Title = () =>(
    <div className="div">
        <h1>REACT Title Component</h1>
    </div>
    );
    
    //  const HeadingComponent = () => (
    //     <div id="container">
    //         <Title/>       {/* OR <Title></Title> both are same */}
    //     {/*YOU CAN WRITE ANY NUMBER OF TIMES THERE IS NO LIMIT TO IT */}
    //            <Title/>
    //            <Title></Title> 
    //            <Title/>
    //         <h1> Namaste react Functional Component</h1>;
    //     </div>
    //     ); 

        //$ 36.1) It means all the code of title will come in HeadingComponent
    /*
        const HeadingComponent = () => (
            <div id="container">
                <div className="div">
                <h1>Title Component</h1>
            </div> 
                <h1> Namaste react Functional Component</h1>;
            </div>
            );
    */
//$ 37) can we write components without using arrow function.
//&     ==> YES YOU CAN.. YOU JUST HAVE TO REMOVE THE ARROW AND HAVE TO WRITE RETURN and mention function
//$     ==> USE ARROW FUNCTION ONLY IT'S USED MOSTLY IN INDUSTRIES
    /* const Title = function() {
            return(
            <div className="div">
                <h1>Title Component</h1>
            </div>
            )
        } */

//& 38) ANYWHERE IN JSX PARENTHESIS (); YOU CAN WRITE ANY JS CODE INSIDE IT BY USING {} INSIDE IT

    // const HeadingComponent = () => (
//&     YOU CAN WRITE ANY JS CODE INSIDE THIS BY USING {} INSIDE IT
    //     );

//& Title Above is just a JS variable we can also add title to it using {}
        /* const TitleInJS = (
            <div className="div">
                <h1>Title In JS Component</h1>
            </div>
            ); */

        // const SpanElem = <span>React Element</span>
        // const number = 1000; 
   
//=> putting JS values of spanElem Number and title in HeadingComponent

        // const HeadingComponent = () => (
        //     <div id="container">
        //         <h1>{number}</h1>
        //         <h1>{number+100}</h1>
        //         <h3>{TitleInJS}</h3>
        // &         {/* CALLING REACT FUNCTION INSIDE JSX USING {ReactFUN()} for eg:-{Title()} */}
        // ^         {/* these three things below are one of the same things */}
        // ^         <h4>{Title()}</h4>
        // ^         <Title/>
        // ^         <Title></Title> 
        //         <h1>{console.log("EVEN CONSOLE.LOG WILL ALSO WORK IN HERE BUT IT HAS TO BE IN {}")}</h1>
        //         <h1>{SpanElem} Namaste react Functional Component</h1>
        //     </div>
        //     ); 
   
// $ 39) Threats while taking data from an API
// -> API can send malicious data to the browser and can get access to the all the cookies, data, session times & can also read local storage etc. of the user  
// -> JSX helps in countering this problem.It takes care of these INJECTION ATTACKS.
// -> JSX will escape the data if it is providing malicious data.
// -> JSX don't runs blindly it will sanitize the data and then it will be provided to you

// -> Suppose getting data from an API
// const data = api.getData();

            /* const HeadingComponent = () => (
                <div id="container">
                    <h1>{SpanElem} Namaste react Functional Component</h1>
                    {data}
        & JSX WILL SANITIZE ANY PEACE OF CODE WRITTEN INSIDE THESE {}.
                    {Title}
                </div> */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);