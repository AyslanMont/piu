import { useState } from "react"
import "./Login.css"

export default function Login(){

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("")


    const handleCor = () => {
        const cores = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const cor = cores[Math.floor(Math.random() * cores.length)]
        document.body.style.background = cor
    }


    // Só mudara de cor quando o botão for clicado, porque vai chamar a função abaixo   

    const handleSubmit = (event) => {
        event.preventDefault()

        if (senha === "AlunoPIU"){
            handleCor();
        }

        setLogin("")
        setSenha("")

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input type="text" onChange={(event) => setLogin(event.target.value)} placeholder="Login"/>
                </label>
                <label>
                    Senha:
                    <input type="password" onChange={(event) => setSenha(event.target.value)} placeholder="Senha"/>
                </label>
                <button>Enviar</button>
            </form>
        </div>
    )
}