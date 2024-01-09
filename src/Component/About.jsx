import img1 from "../img/img_2.jpg";
import img2 from "../img/img_3.jpg";
import { Zoom  } from "react-awesome-reveal";


export default function About() {
  return (
 <Zoom>
  <div id="About"  className="w-full   mt-10 py-20 h-fit bg-white flex max-sm:flex-col ">
      <div className="  w-3/5 ml-20 items-center h-fit justify-center flex  max-sm:flex-col  max-sm:w-full max-sm:m-auto  ">
        <img className="h-full mr-10 w-80 rounded-3xl max-sm:mb-10 max-sm:h-64 max-sm:mr-0  " src={img1} alt="" />
        <img className="h-full w-80 rounded-3xl max-sm:mb-10 max-sm:h-64 " src={img2} alt="" />
      </div>


      <div className="w-3/12 h-full p-3 max-sm:w-full max-sm:text-center   ">
        <h1 className="font-bold text-2xl mb-4">The Restaurant</h1>
        <p className="w-full  mb-4 ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </p>

        <button className="font-bold">See our menu
 </button>
      </div>
    </div>

 </Zoom> 
  );
}
