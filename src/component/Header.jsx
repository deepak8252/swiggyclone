import { useState } from "react";
import { LOgo_url } from "../util/contant";
import { Link } from "react-router-dom";
import useOnline from "../util/useOnline";
// import Grocery from "../pages/Grocery";

const Header=()=>{
   const[btnname,setbtnname]=useState("login");
   const online=useOnline();
    return (
     <div className="flex justify-between bg-pink-100 shadow-lg">
     <div className="logo">
       <img className="w-28" src={LOgo_url}/>
     </div>
     <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-4 capitalize font-semibold text-neutral-700">
         <li>your status :{online?"✅":"🔴"}</li>
           <li ><Link to="/">home</Link></li>
           <li><Link to="/about">about</Link></li>
           <li><Link to="/contact">contact us</Link></li>
           <li><Link to="/grocery">grocery</Link></li>
           <li>cart</li>
           <button className="login" onClick={()=>{
            // btnname="logout";
            console.log(btnname);
            btnname==="login"?setbtnname("logout"):setbtnname("login");
            
       
           }}>{btnname}</button>
        </ul>
     </div>
  </div>
    )
   }
   export default Header