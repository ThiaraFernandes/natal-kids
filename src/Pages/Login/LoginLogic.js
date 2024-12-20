import { useState, useEffect, useContext } from "react";
import Login from "./Login";
import Home from "./../Home/Home";
import Sleigh from "./../../components/Footer/Sleigh";
import Footer from "../../components/Footer/Footer";
import { ChildNameContext } from "../Home/Contexts/ChildNameContext";

export default function LoginLogic() {
  const { childName } = useContext(ChildNameContext);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Inicializa o estado de login com base no localStorage
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que o estado de login mudar
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && childName ? (
        <>
          <Home />
          <Sleigh /> 
          <Footer />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
