import { Link, NavLink } from "react-router-dom"

export default function Nav (){
    return(
        <nav>
            <ul>
                {/*Utilizar a tag <a> gera uma requisição para o servidor. Mas utilizar a tag <Link> nao gera requisição */}
                {/* <li><Link to="/">Home</Link> | </li>
                <li><Link to="/pag1">Página 1</Link> | </li>
                <li><Link to="/pag2">Página 2</Link></li> */}
                <li><NavLink className={({isActive})=> isActive ? 'activeLink' : undefined} to="/">Home</NavLink> | </li>
                <li><NavLink className={({isActive})=> isActive ? 'activeLink' : undefined} to="/pag1">Página 1</NavLink> | </li>
                <li><NavLink className={({isActive})=> isActive ? 'activeLink' : undefined} to="/pag2">Página 2</NavLink></li>
            </ul>
        </nav>
    )
}