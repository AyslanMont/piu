import "./Details.css"
import Card from "./Card"

export default function Details({nome, descricao, arquivo}){
    return(
        <div className="details">
            <Card nome={nome} arquivo={arquivo}>
                {descricao}
            </Card>
        </div>
    )
}