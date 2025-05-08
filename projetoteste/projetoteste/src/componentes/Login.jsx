import { useState } from "react";

function Login() {
    const [logado, setLogado] = useState(false);

    function login() {
        setLogado(true);
    }

    if (logado) {
        return <h1>Você foi logado</h1>;
    }

    return (
        <>
            <h3>Login</h3>
            <label>Nome</label>
            <input type="text" />
            <label>Senha</label>
            <input type="password" />
            <button onClick={login}>Entrar</button>
        </>
    );
}

export default Login;
