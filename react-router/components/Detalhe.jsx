import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Detalhe (){
    const params = useParams()
    const navigate = useNavigate()

    return(
        <div>
            <h1>Foi recebido: {params.texto}</h1>
            <button onClick={()=>navigate(-1)}>Voltar</button>
            <button onClick={()=>navigate('/')}>Ir para Home</button>
        </div>
    )
}