import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/img_2.jpg";
import { Zoom } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Zoom cascade>
      <div
        className="w-full h-[700px] p-10 text-white overflow-x-hidden  flex justify-center items-center flex-col  "
        id="Background-Menu"
      >
        <div className="bg-black h-full max-sm:h-fit max-sm:p-10 bg-opacity-45 rounded-3xl">
          <h1 className="font-bold text-3xl flex justify-center mt-10 mb-10 tracking-wider">Menu</h1>

          <div className="w-4/5 h-fit    mr-28 max-sm:mr-10   m-auto ">
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper w-[800px] backdrop-blur-2xl      h-96 m-auto rounded-3xl bg-black bg-opacity-50 max-sm:w-[300px]  max-sm:h-[500px] "
            >
              <SwiperSlide className="w-52 h-40        ">
                <div className=" h-full flex     justify-center max-sm:flex-col max-sm:overflow-scroll  ">
                  <img className="w-80 rounded-3xl   " src={img1} alt="" />
                  <div className="flex flex-col items-center  ">
                    {" "}
                    <h1 className="font-bold text-3xl mt-5     tracking-[.25em] ">
                      Hello
                    </h1>
                    <p className="w-4/6 mt-5 max-sm:w-70 max-sm:w-4/6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      A molestias pariatur praesentium harum quis minus
                      reprehenderit mollitia?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Perferendis, dolorem! Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda repellat adipisci voluptatum natus debitis ut
                      cupiditate repellendus facilis id! Beatae.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-52 h-40       ">
                <div className=" h-full flex  justify-center max-sm:overflow-scroll max-sm:flex-col  ">
                  <img className="w-80 rounded-3xl " src={img1} alt="" />
                  <div className="flex flex-col items-center  ">
                    {" "}
                    <h1 className="font-bold text-3xl mt-5     tracking-[.25em] ">
                      Hello
                    </h1>
                    <p className="w-4/6 mt-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      A molestias pariatur praesentium harum quis minus
                      reprehenderit mollitia?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Perferendis, dolorem! Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda repellat adipisci voluptatum natus debitis ut
                      cupiditate repellendus facilis id! Beatae.
                    </p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="w-52 h-40     ">
                <div className=" h-full flex  justify-center  max-sm:overflow-scroll max-sm:flex-col      ">
                  <img className="w-80 rounded-3xl " src={img1} alt="" />
                  <div className="flex flex-col items-center  ">
                    {" "}
                    <h1 className="font-bold text-3xl mt-5     tracking-[.25em] ">
                      Hello
                    </h1>
                    <p className="w-4/6 mt-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      A molestias pariatur praesentium harum quis minus
                      reprehenderit mollitia?Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Perferendis, dolorem! Lorem,
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda repellat adipisci voluptatum natus debitis ut
                      cupiditate repellendus facilis id! Beatae.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-4/5 m-auto flex justify-center items-center h-16 "><NavLink to="/ResepiMenu" ><button className="w-60 h-10 px-11 rounded-3xl text-white   bg-gradient-to-r from-purple-500 to-pink-500  font-bold mt-14 hover:text-white  " id="btn-menu">Go to Menu </button></NavLink></div>

        </div>
      </div>
    </Zoom>
  );
}
