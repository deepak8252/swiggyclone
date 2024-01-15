import cartdata from "../util/cart";
import { CDN_URL } from "../util/contant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../util/useOnline";
const Restrocard = () => {
  const [restdata, setrestdata] = useState([]);
  const [serachtext, setsearchtext] = useState("");
  const[fiterresturant,setfilterresturant]=useState([]);
  useEffect(() => {
    // fetchdata();
    setrestdata(cartdata);
    setfilterresturant(cartdata);
  }, []);
 const online=useOnline();
 if(online===false)
  return   <h2>you are in  check your internet connection</h2>
  
 
if(fiterresturant.length===0){
  return <Shimmer/>
}

 return (
    <>
      <div className="filter flex justify-around items-center rounded-md">
        <div className="search  m-4 p-4">
          <input
            type="text"
            placeholder="search your favourite restaurant"
            className=" border border-solid border-black p-2 rounded"
            value={serachtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
            <button className="px-4 py-2 bg-green-500 text-white font-medium shadow-md m-4 capitalize" onClick={ () => {
    let filterData = restdata.filter((item) =>
    item.name.toLowerCase().includes(serachtext.toLowerCase())

    );
    // setrestdata(filterData);
    setfilterresturant(filterData);
    console.log(restdata);
  }
    
    }>
            search
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-green-500 text-white font-medium shadow-md m-4 capitalize"
          onClick={() => {
          let listofresturant=restdata.filter((item)=>item.avgRatingString>4.2)
            
            setfilterresturant(listofresturant)
          }}
        >
          top rated restaurant
        </button>
      </div>
      <div className=" container flex flex-wrap items-center mx-auto justify-center">
      {
   fiterresturant.map((value, index) => (
     <Link key={value.id} to={"/restaurant/" +value.id}>
      <div className="card shadow-lg m-4 p-4 justify-center flex flex-col items-center bg-slate-100 rounded-lg hover:bg-slate-300 text-white">
        {/* <img src={encodeImage(value.imageId)}/> */}
        <img className=" w-60 h-52 rounded-lg shadow-lg" src={CDN_URL +value.cloudinaryImageId} />
        <h3 className=" text-center text-blue-900 font-medium  m-2 capitalize ">{value.name}</h3>
        <h4 className=" text-center text-blue-900 font-medium  m-2 capitalize ">{value.areaName}</h4>
        <h4 className=" text-center text-blue-900 font-medium  m-2 capitalize ">{value.costForTwo}</h4>
        <h4 className=" text-center text-blue-900 font-medium  m-2 capitalize ">{value.avgRatingString} star</h4>
        <h5 className=" text-center text-blue-900 font-medium  m-2 capitalize ">{value.locality}</h5>
      </div>
     </Link>
    ))}
      </div>
    </>
  );
};
export default Restrocard;
