import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Navbar = () => (
    <div className="navbar navbar-expand-lg bg-personal">
        <a className="navbar-brand ml-2" href="index.html">
            <img src={Logo} className="w-25" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-3">
                <li className="nav-item px-3 align-middle">
                    <Link to='/Client' className="nav-link" href="html/usuarios.html">Soy Cliente<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ">
                    <button type="button" className="btn btn-outline-light">
                        <Link to='/Login' className="nav-link" href="html/usuarios.html">Ingresar<span className="sr-only">(current)</span></Link>
                    </button>
                </li>
            </ul>
        </div>
    </div>
)

export default Navbar