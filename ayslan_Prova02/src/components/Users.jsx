import { useEffect, useState } from "react"

const url = "https://jsonplaceholder.typicode.com/users"

export default function Users(){

    const [users, setUser] = useState([])
    const [entrada, setEntrada] = useState("")
    const [number, setNumber] = useState("")
    const [recarregar, setRecarregar] = useState(0)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const carregaDados = async () => {
            try{
                const response = await fetch(url)
                const dados = await response.json()
                setUser(dados) 
            } catch (error){
                console.log(error)
            } finally {
                setLoad(false)
            }
        }

    carregaDados();

    }, [recarregar])

    if (load){
        return <h2>Carregando...</h2>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumber(entrada)
        setEntrada("")

    }

    const handleRecarregar = () => {
        setRecarregar(prev => prev + 1)
        console.log(users)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Id:</span>
                    <input type="number" onChange={(e) => setEntrada(e.target.value)} value={entrada} placeholder="Digite o ID"/>
                </label>
                <button>Enviar</button>
            </form>

            <div>
                <ul>
                    {
                        users.filter(user => user.id  == number).map((user, i) => {
                            return <li key={user.id}>
                                {user.name} <br />
                                {user.username} <br />
                                {user.email} <br />
                                {user.address.street} <br />
                                {user.address.suite} <br />
                                {user.address.city} <br />
                                {user.address.zipcode} <br />
                                {user.address.geo.lat} <br />
                                {user.address.geo.lng}

                            </li>
                        })
                    }
                </ul>
            </div>

            <button onClick={handleRecarregar}>Recarregar</button>
        </div>
    )
}