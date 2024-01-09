
import { Zoom } from "react-awesome-reveal";
import logo from "../img/logo.png";
import { elastic as Menu } from "react-burger-menu";
export default function Home() {
  return (
    <div className="h-full py-4 "id="App-Background" >
      <header  className="w-4/6 mt-6 m-auto">
        <nav className="w-full h-full    bg-black bg-opacity-70 rounded-3xl text-white   ">
          {/* Start Defualt Menu */}
          <ul className=" max-sm:hidden p-4  w-full h-full flex justify-center items-center font-bold  ">
            <li className="mr-20">
              {" "}
              <a href="#Home">Home</a>
            </li>
            <li className="mr-20">
              {" "}
              <a  href="#About">About</a>
            </li>
            <li className="mr-20">
              <i>
                <img className=" " src={logo} alt="" />
              </i>
            </li>
            <li className="mr-20">
              {" "}
              <a href="#Background-Menu">Menu</a>
            </li>
            <li className="mr-20">
              <a href="#Gallery">Gallery</a>
            </li>
          </ul>

          {/* Finish Defualt Menu */}

          {/* Start menu hambergery */}

          <div className="  min-[700px]:hidden absolute left-0 top-0     ">
            {" "}
            <Menu width={200} className="w-20">
              <a className="menu-item mb-5 " href="/">
                Home
              </a>
              <a className="menu-item mb-5" href="/salads">
                About
              </a>
              <a className="menu-item mb-5" href="/pizzas">
                Menu
              </a>
              <a className="menu-item mb-5" href="/desserts">
                Gallery
              </a>
            </Menu>
          </div>

          {/* End menu hambergery */}
        </nav>
      </header>

      {/* Start Content */}
     <Zoom>
     <div className="w-4/5 m-auto max-sm:w-screen rounded-3xl p-10   h-70 text-white bg-black max-sm:mt-28 bg-opacity-50 mt-10 flex flex-col justify-center items-center ">
        <h1 className="mb-1  font-bold text-2xl">The Lean Restaurant</h1>
        <p className="w-96 p-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Inventore natus architecto voluptatibus recusandae quis earum illum
          neque voluptatem harum aut. and Consonantia, there live the blind
          texts.
        </p>
        <button className="px-20 py-2 rounded-3xl hover:bg-black bg-black bg-opacity-70">Click</button>
      </div>
     </Zoom>
      {/* Finish Content */}
    </div>
  );
}
