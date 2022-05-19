import { useState } from 'react';
const ModalProducto = ({ saveProduct, updateProduct }) => {
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
                                    <label htmlFor="emailRegistro" className="form-label">Brand</label>
                                    <input type="text" name='brand' value={information.brand || ''} onChange={handleOnChange} className="form-control" id="brandR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="usuarioRegistro" className="form-label">Processor</label>
                                    <input type="text" name='procesor' value={information.procesor || ''} onChange={handleOnChange} className="form-control" id="procesorR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro" className="form-label">Os</label>
                                    <input type="text" name='os' value={information.os || ''} onChange={handleOnChange} className="form-control" id="osR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Description</label>
                                    <input type="text" name='description' value={information.description || ''} onChange={handleOnChange} className="form-control" id="descriptionR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Memory</label>
                                    <input type="text" name='memory' value={information.memory || ''} onChange={handleOnChange} className="form-control" id="memoryR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">HardDrive</label>
                                    <input type="text" name='hardDrive' value={information.hardDrive || ''} onChange={handleOnChange} className="form-control" id="hardDriveR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Availability</label>
                                    <select name='availability' value={information.availability || ''} onChange={handleOnChange} className="form-control" name="zone_user" id="availabilityR">
                                        <option> True </option>
                                        <option> False </option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Price</label>
                                    <input type="number" step="0.01" name='price' value={information.price || ''} onChange={handleOnChange} className="form-control" id="priceR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Quantity</label>
                                    <input type="number" step="0.01" name='quantity' value={information.quantity || ''} onChange={handleOnChange} className="form-control" id="quantityR" />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center d-block px-5">
                                <div className="">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Photography</label>
                                    <input type="text" name='photography' value={information.photography || ''} onChange={handleOnChange} className="form-control" id="photographyR" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" onClick={onClean(saveProduct(information))} className="btn btn-guardar " id="guardar">Guardar</button>
                        <button type="button" onClick={onClean(updateProduct(information))} className="btn btn-guardar " id="editar">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProducto