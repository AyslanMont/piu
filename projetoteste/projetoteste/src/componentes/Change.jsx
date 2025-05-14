import { useState } from "react";

export default function Change() {
  //   let valor = 0;
  let [valor, setValor] = useState(0);
  return (
    <div>
      <button onClick={() => setValor(valor + 1)}>{valor} Clique aqui</button>
    </div>
  );
}
