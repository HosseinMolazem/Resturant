import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "react-awesome-reveal";
import React from "react";
import img1 from "../img/img_1.jpg";
import img2 from "../img/img_2.jpg";
import img3 from "../img/img_3.jpg";

export default function Gallerys() {
  const [open, setOpen] = React.useState(false);
  return (
   <Zoom className="">


   
<>
      <div className="w-screen h-fit bg-white max-sm:h-fit      " id="Gallery">

<h1 className="text-4xl font-bold text-center mt-20  tracking-widest ">Gallery</h1>
        <div className="w-11/12 flex justify-around items-center m-auto p-10  max-sm:h-fit     ">
          <img
            src={img1}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2 cursor-pointer        hover:scale-105  "
            onClick={() => setOpen(true)}
            alt=""
          />

          <img
            src={img2}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2  cursor-pointer  hover:scale-105   "
            onClick={() => setOpen(true)}
            alt=""
          />
          <img
            src={img3}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2 cursor-pointer   hover:scale-105"
            onClick={() => setOpen(true)}
            alt=""
          />
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: `${img1}` }, { src: `${img2}` }, { src: `${img3}` }]}
        />
      </div>
      <div className="w-screen h-96 bg-white max-sm:h-fit ">
        <div className="w-11/12 flex justify-around items-center m-auto mt-10  max-sm:h-fit p-10 max-sm:-mt-11     ">
          <img
            src={img1}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2 cursor-pointer      hover:scale-105  "
            onClick={() => setOpen(true)}
            alt=""
          />

          <img
            src={img2}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2 cursor-pointer   hover:scale-105  "
            onClick={() => setOpen(true)}
            alt=""
          />
          <img
            src={img3}
            className="w-72 h-72 rounded-2xl max-sm:w-32 max-sm:h-32 max-sm:p-2 cursor-pointer   hover:scale-105"
            onClick={() => setOpen(true)}
            alt=""
          />
        </div>

      
      </div>
    </>
    
   </Zoom>
 
  );

}
