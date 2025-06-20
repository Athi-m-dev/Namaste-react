/* 
we going see what is jsx
jsx is the react element that babel pakage give lot of developers think jsx is the html is not the html
it is html like syntax 
in html <h1 class = ""> </h1>
in jsx <h1 className = ""> </h1> -- 1
form 1 we can see dif between the attribute in html and jsx 
*/
import React from "react";
import ReactDOM from "react-dom/client";

 const head = <h1>jsx</h1>;
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(head);
/*
we going to see about the React component
two component inn react
1) class component - old version
2) functional component - new version for write the component
*/
/* 
functional component return the react element inside the function is called functional component
*/
const TitleCom = () => (
    <h1>this used for component composition</h1>
)
const HeadingComponent = () => 
    (
    <div>
    <TitleCom />
    <h1>this functional component</h1>
    </div>
    );
// in arrow function 
const ArrowHeading = () => {
    <h2>this is functional component</h2>
} //or
const ArrowHeading1 = () => {
    return <h2>this is functional component</h2>
} 
// component composition composite two component into one is called component composition

root.render(<HeadingComponent/>);