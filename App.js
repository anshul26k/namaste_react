import ReactDOM from "react-dom/client";
import React from "react";

// old wY
// const heading = React.createElement("h1",{id:"heading"},"hello react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Using jsx -> html like syntax
// jsx and react are two different things
// jsx -> reactcreteelemt -> reactelement(js object) -> html
// const newheading = (
//   <h1 id="headign" tabIndex="5">
//     Hello react with JSX
//   </h1>
// );
// root.render(newheading);

// react functional component -> js funtion that return jsx
// const Headcomponent = () => {
    //   return <h1>hello react funcatinal component</h1>;
    // };
    // const Headcomponent1 = () => <h1>hello react funcatinal component</h1>;

    const Title = () => (
        <h2>not now title</h2>
    )

    const Ak = (<h2>react element</h2>)
    const num = 190;
    
    const Headcomponent2 = () => (
        <div id="parent">
            <h2>num is  {num}</h2>
            {Ak}
            {console.log("hello bro")}
            <Title/>
            {Title()}
    <h1>hello react funcatinal component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headcomponent2/>)
// root.render(<Headcomponent/>)

// console.log(newheading);
