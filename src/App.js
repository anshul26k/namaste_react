import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurant from "./Components/Restaurant";
import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";

// const cardclr = {
//   backgroundColor:"red",
// }

const About = lazy(()=>import("./Components/About"))

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const Approuter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element: <Suspense fallback={<h1>nope</h1>}> <About/> </Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restarants/:resid",
        element:<Restaurant/>
      }
    ],
    errorElement:<Error/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);
root.render(<RouterProvider router={Approuter}/>)
