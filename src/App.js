import { useContext } from "react";
import "./App.css";
import { GlobalVar } from "./Context/Context";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Gallerys from "./Component/Gallery";
import Footer from "./Component/Footer";
import { useFetch } from "./Hocks/useFetch";
import { Route, Routes } from "react-router-dom";
import MenuResepiLists from "./Pages/MenuResepiLists";
import Addresepi from "./Pages/Addresepi";

function App() {
  const contextes = useContext(GlobalVar);
  const { data } = useFetch("https://test-qp1u.onrender.com/food");
  console.log(data);
  return (
    <div className="w-screen h-screen  overflow-x-hidden  relative    " id="">
      <Routes>
        <Route
          path="/Resturant"
          element={
            <div>
              <Home />
              <About />
              <Menu />
              <Gallerys />
              <Footer />
            </div>
          }
        />
        <Route path="/ResepiMenu" element={<MenuResepiLists />} />{" "}
        <Route path="/AddResepi" element={<Addresepi />} />{" "}

      </Routes>{" "}
    </div>
  );
}

export default App;
