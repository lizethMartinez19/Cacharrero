import { useState } from 'react';
const ModalOrden = ({ productR, product, saveOrder, saveProducts }) => {
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
                                <h5 className="modal-title modalheadertitle" id="exampleModalLabel">Registrar Orden</h5>
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
                            <div className="row mb-3 justify-content-center d-flex px-5">
                                <div className="col-6">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Product</label>
                                    <select name='product' value={information.product || ''} onChange={handleOnChange} className="form-control" id="productR">
                                        {product.map(respuesta => {
                                            return (
                                                <option key={respuesta.id} value={respuesta.id}>  {respuesta.brand} {respuesta.procesor} </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="contrasenaRegistro2" className="form-label">Quantities</label>
                                    <input type="number" name='quantities' value={information.quantities || ''} onChange={handleOnChange} className="form-control" id="brandR" />
                                </div>

                                <div className="col-2 d-flex align-middle">
                                    <button type="button" onClick={onClean(saveProducts(information))} className="btn btn-guardar " id="añadir">Añadir</button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-hover ">
                            <thead id="titulos-tabla">
                                <tr>
                                    <th className="titlestable text-center" scope="col">Product</th>
                                    <th className="titlestable text-center" scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody id="resultado">
                                {productR.map(respuesta => {
                                    return (
                                        <tr key={respuesta.products.id}>
                                            <td>  {respuesta.products.brand} | {respuesta.products.procesor} </td>
                                            <td>  {respuesta.quantities} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" onClick={onClean(saveOrder())} className="btn btn-guardar " id="guardar">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrden