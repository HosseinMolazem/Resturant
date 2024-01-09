import { createContext } from "react";

export  const GlobalVar = createContext();
export default function Context({ children }) {
  return (
    <>
      <GlobalVar.Provider value="test">{children}</GlobalVar.Provider>
    </>
  );
}
