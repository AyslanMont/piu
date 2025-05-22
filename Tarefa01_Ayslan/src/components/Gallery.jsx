import Card from "./Card";
import imagem1 from "../assets/imagem1.png";
import imagem2 from "../assets/imagem2.webp";
import imagem3 from "../assets/imagem3.webp";
import imagem4 from "../assets/imagem4.webp";
import imagem5 from "../assets/imagem5.webp";
import imagem6 from "../assets/imagem6.webp";
import "./Gallery.css";
import Details from "./Details";
import { useState } from "react";

export default function Gallery() {
  const [nome, setNome] = useState("Pica-Pau");
  const [arquivo, setArquivo] = useState(imagem1);
  const [descricao, setDescricao] = useState("Personagem clássico dos desenhos animados.");

  return (
    <div className="gallery">
      <Card
        nome="Pica-Pau"
        arquivo={imagem1}
        onClick={() => {
          setNome("Pica-Pau");
          setArquivo(imagem1);
          setDescricao("Personagem clássico dos desenhos animados.");
        }}
      />
      <Card
        nome="Homem Aranha"
        arquivo={imagem2}
        onClick={() => {
          setNome("Homem Aranha");
          setArquivo(imagem2);
          setDescricao("O amigão da vizinhança!");
        }}
      />
      <Card
        nome="Bart"
        arquivo={imagem3}
        onClick={() => {
          setNome("Bart");
          setArquivo(imagem3);
          setDescricao("O garoto encrenqueiro dos Simpsons.");
        }}
      />
      <Card
        nome="Patolino"
        arquivo={imagem4}
        onClick={() => {
          setNome("Patolino");
          setArquivo(imagem4);
          setDescricao("O pato mais sarcástico dos Looney Tunes.");
        }}
      />
      <Card
        nome="Bob Esponja"
        arquivo={imagem5}
        onClick={() => {
          setNome("Bob Esponja");
          setArquivo(imagem5);
          setDescricao("Diretamente da Fenda do Biquíni.");
        }}
      />
      <Card
        nome="Bart Lavagem de dinheiro"
        arquivo={imagem6}
        onClick={() => {
          setNome("Bart Lavagem de dinheiro");
          setArquivo(imagem6);
          setDescricao("Bart em versão Breaking Bad.");
        }}
      />

      <div>
        <Details nome={nome} arquivo={arquivo} descricao={descricao} />
      </div>
    </div>
  );
}
