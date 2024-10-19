import { useState } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"

export default function Pag2(){
    const [texto, setTexto] = useState('')
    const navigate = useNavigate()

    return(
        <>
        <h1>Pag2</h1>
        <input onKeyDown={(e)=>{
            if(e.key == 'Enter'){
                navigate(`/detalhe/${texto}`)
            }
        }} type="text" onChange={(event)=>{setTexto(event.target.value)}} value={texto}/>
        <button  onClick={()=> navigate(`/detalhe/${texto}`)}>Enviar texto para Detalhe</button>
        </>
    )
}