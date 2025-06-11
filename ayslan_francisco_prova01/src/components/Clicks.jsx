import { useState } from "react"
import "./Clicks.css"


// Aqui eu usei os useState para guardar os valores do contador, do tamnho do botao de aumentar e do tamanho do botao de diminuir, eu ia fazendo verificações e mudando esses valores para as espeficações da atividade, sobre o css eu so mudava o nome da classe conforme o valor do contador

export default function Clicks(){
    const [cont, setCont] = useState(0)
    const [tamanho, setTamanho] = useState("normal")
    const [tamanho2, setTamanho2] = useState("normal")

    function aumentar(){
        setCont(cont + 1)
        if (cont > 10){
            setTamanho("grande")
        } else {
            setTamanho("normal")
            setTamanho2("normal")
        }
    }

    function diminuir(){
        setCont(cont - 1)
        if (cont < 0){
            setTamanho2("pequeno")
        } else {
            setTamanho2("normal")
            setTamanho('normal')
        }
    }

    return(
        <div>
            <h1>{cont}</h1>
            <button onClick={aumentar} className={tamanho}>Aumentar</button>
            <button onClick={diminuir} className={tamanho2}>Diminuir</button>
        </div>
    )
}