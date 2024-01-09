import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../Hocks/useFetch";
import menuResepi from "../img/resepilistsw.png";


export default function Search() {
  const loction = useLocation().search;

  const urlserch = new URLSearchParams(loction);
  const keys = urlserch.get("q");
  const { data } = useFetch("https://test-qp1u.onrender.com/food?q=" + keys);



return(


<>

    {/* content */}
   {data&& <div className="w-screen h-fit   mt-10 bg-black flex flex-col  justify-start items-center  ">
        <img
          className="w-3/5 max-sm:w-11/12 rounded-3xl mt-5  h-60 bg-center bg-cover"
          src={menuResepi}
          id="img-resepilist"
        />

        <div className="w-11/12 h-fit  rounded-3xl flex justify-center  ml-5 ">
         {data.slice(0,2).map(item=>( 

<div className="w-fit h-fit bg-yellow-500 mr-5 p-2 mt-5  rounded-xl  ">
<h1 className="w-full h-10 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500  flex justify-center items-center font-bold text-2xl  ">
  {item.name}
</h1>
<div className="flex max-sm:flex-col">
  <img
    className="w-52 h-40 mt-5 rounded-3xl"
    src={menuResepi}
    alt=""
  />

  <div className="flex flex-col mt-4 items-center justify-center ml-4">
    <p className="font-bold w-32    mb-3">
     {item.description}
    </p>
    <div className="font-bold flex justify-between">
      <span className="mr-4">{item.price}</span>{" "}
      <button className="w-20 h-7 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse rounded-3xl">
        Buy
      </button>
    </div>
  </div>
</div>
</div>

         ))}
        </div>
      
        <div className="w-11/12 h-fit  rounded-3xl flex justify-center  ml-5 ">
         {data.slice(2,4).map(item=>(

<div className="w-fit h-fit bg-yellow-500 mr-5 p-2 mt-5  rounded-xl  ">
<h1 className="w-full h-10 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500  flex justify-center items-center font-bold text-2xl  ">
  {item.name}
</h1>
<div className="flex max-sm:flex-col">
  <img
    className="w-52 h-40 mt-5 rounded-3xl"
    src={menuResepi}
    alt=""
  />

  <div className="flex flex-col mt-4 items-center justify-center ml-4">
    <p className="font-bold w-32    mb-3">
     {item.description}
    </p>
    <div className="font-bold flex justify-between">
      <span className="mr-4">{item.price}</span>{" "}
      <button className="w-20 h-7 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse rounded-3xl">
        Buy
      </button>
    </div>
  </div>
</div>
</div>

         ))}
        </div>
      </div>}

      {/* content */}


</>

)

}
