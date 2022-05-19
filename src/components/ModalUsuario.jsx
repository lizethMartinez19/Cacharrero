import { useState } from 'react';
const ModalUsuario = ({ saveUser, updateUser }) => {
    const [information, setInformation] = useState({})
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setInformation(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const onClean = (cb) => async () => {
        await cb()
        setInformation({})
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header justify-content-center ">
                        <div className="row ">
                            <div className="col-10">
                                <h5 className="modal-title modalheadertitle" id="exampleModalLabel">Registrar Usuario</h5>
                            </div>
                            <div className="col-2 modalheadertitle">
                                <a id="btnCerrarModal" data-bs-dismiss="modal" aria-label="Close" className="links card-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="emailRegistro" className="form-label">Correo electrónico</label>
                                    <input type="email" name='email' value={information.email || ''} onChange={handleOnChange} className="form-control" id="emailRegistro" placeholder="name@example.com" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="usuarioRegistro" className="form-label">Nombre Usuario:</label>
                                    <input type="text" name='name' value={information.name || ''} onChange={handleOnChange} className="form-control" id="usuarioRegistro" placeholder="example" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="usuarioRegistro" className="form-label">Fecha de Cumpleaños:</label>
                                    <input type="date" name='birthtDay' value={information.birthtDay || ''} onChange={handleOnChange} className="form-control" id="usuarioBirth" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro" className="form-label">Contraseña</label>
                                    <input type="password" name='password' value={information.password || ''} onChange={handleOnChange} className="form-control" id="contrasenaRegistro" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Confirmar Contraseña</label>
                                    <input type="password" name='password2' value={information.password2 || ''} onChange={handleOnChange} className="form-control" id="contrasenaRegistro2" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Identificación</label>
                                    <input type="text" name='identi' value={information.identi || ''} onChange={handleOnChange} className="form-control" id="identificacion" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Dirección</label>
                                    <input type="text" name='direct' value={information.direct || ''} onChange={handleOnChange} className="form-control" id="direccion" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Celular</label>
                                    <input type="number" name='cell' value={information.cell || ''} onChange={handleOnChange} className="form-control" id="celular" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Zona</label>
                                    <select name='zone' value={information.zone || ''} onChange={handleOnChange} className="form-control" id="zona">
                                        <option> 1 </option>
                                        <option> 2 </option>
                                        <option> 3 </option>
                                        <option> 4 </option>
                                        <option> 5 </option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Tipo</label>
                                    <select name='type' value={information.type || ''} onChange={handleOnChange} className="form-control" id="tipo">
                                        <option> COORD </option>
                                        <option> ASE </option>
                                        <option> ADM </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" onClick={onClean(saveUser(information))} className="btn btn-guardar " id="guardar">Guardar</button>
                        <button type="button" onClick={onClean(updateUser(information))} className="btn btn-guardar " id="editar">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUsuario