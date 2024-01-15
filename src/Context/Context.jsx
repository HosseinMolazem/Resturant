import { createContext, useReducer, useState } from "react";

export  const GlobalVar = createContext();
export default function Context({ children }) {


  const [color, SetColor] = useState({ color: "blueviolet", mode: "dark" });
  const ReducerFuncion = (state, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return { ...state, color: action.pyload };

      case "CHANGE_MODE":
        return { ...state, mode: action.pyload };

      default:
        return state;
    }
  };

  const [state, dispath] = useReducer(ReducerFuncion, color);

  const changeColor = (color) => {
    dispath({ type: "CHANGE_COLOR", pyload: color });
  };
  const changeMode = (Mode) => {
    dispath({ type: "CHANGE_MODE", pyload: Mode });
  };






  return (
    <>
      <GlobalVar.Provider value={{changeColor,color}}>{children}</GlobalVar.Provider>
    </>
  );
}
