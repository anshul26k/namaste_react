import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const cardclr = {
//   backgroundColor:"red",
// }

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={Approuter}/>)
