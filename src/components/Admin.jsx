import usuarioImage from '../assets/images/Usuarios.jpg'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const consultar = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/user/getByEmailAndPassword/' + email + "/" + password)
        const json = await data.json()
        if (json.password == null) {
            alert("Usuario o Contraseña incorrecto")
        } else {
            localStorage.setItem('userLogin',json.id)
            if(json.type == 'COORD'){
                navigate('/OrdenesCoord')
            }else if(json.type == 'ADM'){
                navigate('/UsuariosAdmin')
            }else if(json.type == 'ASE'){
                navigate('/Usuarios')
            }
            else{
                navigate('/Client')
            }
        }
    }
    return (
        <div className="container text-center ">
            <div className="row mt-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="card text-center">
                        <img className="card-img-top" src={usuarioImage} alt="Card image cap" />
                        <div className="card-header d-flex justify-content-end">
                            <a href="../index.html" className="links card-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                </svg>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">ADMIN</h5>
                            <div className="form-group">
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mt-2" id="email" placeholder="Correo Electronico" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
                                <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} className="form-control mt-2" id="password" placeholder="Contraseña" />
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <button id="login" type="button" onClick={consultar} className="btn btn-success btn-block">INGRESAR</button> &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted"></div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}

export default Admin