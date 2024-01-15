import React, { useState } from "react";
import Swal from 'sweetalert2'
import img from "../img/img_1.jpg";
import { IoIosHome } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "./Search";
import useContexts from "../Hocks/useContexts";

export default  function MenuResepiLists () {
  
  const [datas, SetData] = useState("pizza");
  const navigat = useNavigate();
  const handlSearch = async () => {
    await navigat(`/ResepiMenu?q=${datas}`);
  };

   Search()




   const {changeColor,color}=useContexts();
   console.log(color.mode);



  return (
    <div className={`w-screen h-screen  bg-black   flex  flex-col items-center `}>
      {/* header */}
      <div className="w-screen h-fit      relative  px-4 mt-10  max-sm:mt-5   max-sm:h-fit  text-white    flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:items-center  ">
        <div className="w-2/3 h-fit   flex justify-end max-sm:justify-center max-sm:mt-4 ">
          <i className="absolute cursor-pointer left-0 top-4 text-2xl max-sm:top-6 ml-3 flex w-20  justify-around">
           <IoIosHome  onClick={()=>{

navigat('/Resturant')

            }} />
          </i>

          <h1 className="font-bold text-5xl mr-16 max-sm:text-2xl max-sm:mr-0">
            Resepilist Menu
          </h1>
        </div>
        {/* Search-box */}
        <div className=" h-fit mt-3  flex items-center  max-sm:justify-center max-sm:mt-5   ">
          <input
            onChange={(e) => {
              SetData(e.target.value);
            }}
            placeholder="Enter.."
            className="ml-5 cursor-help mr-5 w-16 focus:w-72 transition-all relative  outline-none rounded-3xl p-1  bg-gradient-to-r from-purple-500 to-pink-500 font-bold max-sm:w-16"
            type="text"
          />
          <button
            onClick={handlSearch}
            className="w-20 h-9  bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse rounded-3xl font-bold"
          >
            Search
          </button>
        </div>
        {/* Search-box */}
      </div>
      {/* header */}

{/* content */}
  
<Search/>
  {/* content */}
      <NavLink to="/AddResepi">
        <div className="w-screen h-fit bg-black flex justify-center items-center">
          <div className="w-11/12 h-fit  mt-5 flex justify-center items-center">
            <div className="bg-yellow-500 w-4/6 h-fit rounded-3xl p-4 max-sm:w-full flex  ">
              <img className="w-3/6 rounded-3xl" src={img} alt="" />
              <div className="w-3/6 flex flex-col justify-around font-bold items-center">
                <h1 className="text-2xl">Add to card</h1>
                <p className="w-60  max-sm:w-36">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perferendis, similique et? Eos praesentium deleniti expedita?
                </p>
                <button className="w-20 h-7 bg-gradient-to-r mt-4 from-purple-500 to-pink-500 animate-pulse rounded-3xl">
                  Buy
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
