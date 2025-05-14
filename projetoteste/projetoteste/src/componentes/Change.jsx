import { useState } from "react";

export default function Change() {
  const [valor, setValor] = useState(0);
  const [dezena, setDezena] = useState(0);
  
  const handleClick = () => {
    const newValor = valor + 1;
    setValor(newValor);
    
    if (newValor % 10 === 0) {
      setDezena(newValor / 10);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{valor} Clique aqui</button>
      <p>Dezenas: {dezena}</p>
    </div>
  );
}