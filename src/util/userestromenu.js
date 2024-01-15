import { useEffect, useState } from "react"
import { menuApi } from "./contant";

const userestromenu=(resid)=>{
    const [resinfo,setresinfo]=useState(null);
useEffect(()=>{
 fetchdata()
},[]);
const fetchdata= async()=>{
const data=await fetch(menuApi + resid);
const result=await data.json();
setresinfo(result.data);
}
return resinfo
}
export default userestromenu;