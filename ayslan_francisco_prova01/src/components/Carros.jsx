import carros from "./dados_carro";
import "./Carro.css";

export default function Carros() {
  return (
    <div>
      <h1>Primeira parte</h1>
      <div>
        {/* Aqui eu usei a função map para pegar cada elemento da lista e retornar uma div para cada elemento desse, na div tem o modelo e a cor, a função map fará isso para todos os carros */}
        {carros.map((carro) => {
          return (
            <div className="carro">
              <div>
                <p>{carro.modelo}</p>
                <p>{carro.cor}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Segunda parte</h1>
      <div>
        {/* Aqui eu usei a função filter para verificar cada carro da lista e fazer uma checagem no ano, se for maior o que 2019 ele manda para a função map que ira retornar uma div exibindo o modelo para cada carro que vier do filter*/}
        {carros
          .filter((carro) => carro.ano > 2019)
          .map((carro) => {
            return (
              <div>
                <p>{carro.modelo}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
