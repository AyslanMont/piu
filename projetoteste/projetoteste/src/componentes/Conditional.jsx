import { useState } from "react";
import "./Conditional.css";

export default function Conditional() {
  let [isLogged, setIsLogged] = useState(true);

  function muda_foto() {
    if (isLogged === true) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }

  return (
    <>
      <div className="fotos">
        {isLogged ? (
          <img
            src="https://images.seeklogo.com/logo-png/3/2/clube-de-regatas-do-flamengo-logo-png_seeklogo-32416.png"
            alt=""
          />
        ) : (
          <img
            src="https://images.seeklogo.com/logo-png/28/2/clube-de-regatas-do-flamengo-2001-2004-logo-png_seeklogo-288266.png"
            alt=""
          />
        )}
        <button onClick={muda_foto}>Mudar foto</button>
      </div>
    </> 
  );
}
