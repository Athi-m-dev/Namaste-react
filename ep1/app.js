import React from "react";
import ReactDOM from "react-dom/client";

const createElement = React.createElement("h1", { id: "heading" }, "Hello World From React"); // it will create the object of the give element inside the createElement function 
// we console the createElement it will return object !not the h1 tag at render only it create the tag
console.log(createElement);
// all our react elemnt are render only inside the root this createRoot will create the tag and push inside the elemnt that we get form html

//const root1 = ReactDOM.createRoot(document.getElementById("root"));
//root1.render(createElement);

/*<div id: parent> 
    <div id: child 1> 
       <h1>this is h1 tag </h1>
       <h2>this is h2 tag </h2>
    </div>
    <div id : child 2>
       <h1> this is h1 tag </h1>
       <h2> this is h2 tag </h2>
    </div>
  </div>  
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  ...[
    React.createElement("div", { id: "child 1" }, [
      React.createElement("h1", { key: "h1" }, "this is h1 tag"),
      React.createElement("h2", { key: "h2" }, "this is h2 tag")
    ]),
    React.createElement("div", { id: "child 2" }, [
      React.createElement("h1", { key: "child2h1" }, "this is h1 tag"),
      React.createElement("h2", { key: "child2h2" }, "this is h2 tag")
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
