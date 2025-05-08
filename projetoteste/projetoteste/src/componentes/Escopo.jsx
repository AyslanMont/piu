function Escopo() {
    const label = "Clique aqui"
    function handleClick () {
        return (
            alert("Alertado")
        )
    }
    return (
        <>
            <div>
                <h2>Teste de componenetes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dolore ipsum repellendus optio! Quidem distinctio iure omnis alias debitis, voluptatibus veniam enim doloremque sed autem rem cum, fuga quod eos!</p>
            </div>
            <div>
                <button onClick={() => {console.log("Funciona")}}>{label}</button>
            </div>
            <div>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}

export default Escopo