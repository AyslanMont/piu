import "./Card.css"

export default function Card({ nome, arquivo, children, onClick }){
    return(
        <div className="card" onClick={onClick}>
            <img className="img-card" src={arquivo} alt={nome} />
            <h2>{nome}</h2>
            {children}
        </div>
    )
}