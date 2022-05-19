import cardProdImage from '../assets/images/Orden.jpg'
import { Link } from 'react-router-dom'
const CardOrden = ({ consultar, consultarProd }) => (
    <div className="container text-center ">
        <div className="row mt-5">
            <div className="col-lg-12">
                <div className="card text-center">
                    <img className="card-img-top" src={cardProdImage} alt="Card image cap" />
                    <div className="card-header d-flex justify-content-center">
                        <Link to="/Usuarios" className="links card-link">Usuarios</Link>
                        <Link to="/Productos" className="links card-link">Productos</Link>
                        <Link to="/Ordenes" className="links card-link">Ordenes</Link>
                        <Link to="/" className="links card-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">ASESOR | ORDENES</h5>
                        <div className="row mt-5">
                            <div className="col-12">
                                <a type="button" href="#exampleModal" onClick={consultarProd} className="btn btn-warning btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal" id="registrar">REGISTRAR</a> &nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12">
                                <button type="button" onClick={consultar} className="btn btn-info btn-block">CONSULTAR</button> &nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6">
                                <button type="button" href="#filtroFecha"  data-bs-toggle="modal" data-bs-target="#filtroFecha"  className="btn btn-danger btn-block">FILTRAR POR FECHA</button>
                            </div>
                            <div className="col-6">
                                <button type="button" href="#filtroState"  data-bs-toggle="modal" data-bs-target="#filtroState"  className="btn btn-danger btn-block">FILTRAR POR ESTADO</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>
            </div>
        </div>
    </div>
)

export default CardOrden