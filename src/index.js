import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/body";
import Header from "./component/Header";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Errorpage from "./pages/Errorpage";
import Restromenupage from "./pages/Restromenupage";
import Shimmer from "./component/Shimmer";
// import Grocery from "./pages/Grocery";

const Grocery=lazy(()=>import("./pages/Grocery"))
// cart item
const Applayout=()=>{
    return(
       <>
       <div className="app">
          <Header/>
        <Outlet/>
       </div>
       </>
    )
 }
// const heading=React.createElement("h1",{id:"heading"},"this is a react");/
const appRouter=createBrowserRouter([
{
   path:"/",
   element:<Applayout/>,
   children:[
      {
         path:"/",
         element:<Body/>,
      },
      {
         path:"/about",
         element:<About/>
      },
      {
         path:"/contact",
         element:<Contact/>,
      },
      {
         path:"/restaurant/:resid",
         element:<Restromenupage/>
      },
      {
         path:"/grocery",
         element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      }
   ],
   errorElement:<Errorpage/>
},

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
