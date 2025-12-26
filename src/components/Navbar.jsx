import { NavLink } from "react-router-dom"
import "../styles/style.css"
import logo from "../assets/StageLinkLogo.png"

function Navbar(){
    return(
        <div className="Nav">
            <NavLink to="/" className="logo">
                <img src={logo} alt="StageLink Logo" />
            </NavLink>
            <div className="NavElem">
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/projects">Projets</NavLink>
            </div>
            <div className="signin">
                <NavLink>Se connecter &gt;</NavLink>
            </div>
        </div>
    );
}

export default Navbar