import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <JackInTheBox>
      <div className="w-screen m-auto h-[500px] overflow-hidden text-white max-sm:h-fit  bg-slate-900 p-10  ">
        <div className="w-4/5 m-auto mt-10  ">
          <h1 className="flex w-80  justify-center items-center font-bold text-4xl  m-auto max-sm:w-full ">
            {" "}
            <MdOutlineRestaurant />
            cutlery{" "}
          </h1>{" "}
          <p className="w-96 m-auto mt-5 max-sm:w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aliquam ad minus tempore corrupti! Nostrum rerum sint error natus
            suscipit quasi, illo non perspiciatis consequatur, magni assumenda
            nobis voluptatum aspernatur?
          </p>
        </div>

        <Zoom>
          {" "}
          <div className="w-full flex justify-between mt-10 max-sm:flex-col ml-8   max-sm:ml-0 max-sm:mt-10  ">
            <div className="w-2/5">
              <h1 className="text-3xl k text-center w-80 ">Address</h1>
              <span className="flex justify-center text-center mt-5 w-80">
                {" "}
                <FaLocationDot className="mt-1 mr-1" />
                Estate Business, #32841 block, #221DRS Real estate business
                building, UK.
              </span>
            </div>
            <div className="w-2/5 max-sm:mt-10">
              <h1 className="text-3xl k text-center w-80 ">Opening Hours</h1>
              <span className="flex justify-center text-center mt-5 w-80">
                {" "}
                <IoTimeSharp className="mt-1 mr-1" />
                Mon-Fri: 9AM-11PM <br />
                Sat-Sun: 10AM-1PM
              </span>
            </div>
            <div className="w-2/5  max-sm:mt-10">
              <h1 className="text-3xl k text-center w-80 ">Contact Us</h1>
              <span className="flex justify-center text-center mt-5 w-80">
                {" "}
                <FaPhoneAlt className="mt-1 -mr-4" />
                +(21)-255-999-8888 <br />
                cutlery-mail@support.com
              </span>
            </div>
          </div>
        </Zoom>
      </div>
    </JackInTheBox>
  );
}
