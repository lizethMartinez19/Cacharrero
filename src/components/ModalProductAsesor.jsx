import { useState } from "react"
const ModalProductAsesor = ({ consultProduct }) => {
    const producto = Object.values(consultProduct)
    const [information, setInformation] = useState({})
    const [product, setProduct] = useState({})
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
    const paintProduct = (idParam) => async () => {
        if (producto.length === 1) {
            const paintProd = await producto[0]
            setProduct(paintProd)
        } else {
            const paintProd = await producto[idParam - 1]
            setProduct(paintProd)
        }
    }
    return (
        <div className="modal fade" id="modalAsesorProduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header justify-content-center ">
                        <div className="row ">
                            <div className="col-10">
                                <h5 className="modal-title modalheadertitle" id="exampleModalLabel">Productos Registrados</h5>
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
                        <select name='product' value={information.product || ''} onChange={handleOnChange} className="form-control" id="productR">
                            <option key={0} value={0} > --Seleccione un producto--  </option>
                            {producto.map(respuesta => {
                                return (
                                    <option key={respuesta.id} value={respuesta.id} > Producto #{respuesta.id}  </option>
                                )
                            })}
                        </select>
                        <button type="button" onClick={onClean(paintProduct(information.product))} className="btn btn-info my-5 btn-block">CONSULTAR</button>
                        <ul key={product.id}>
                            <li >
                                <b>BRAND:</b> {product.brand}
                            </li>
                            <li >
                                <b>PROCESOR:</b> {product.procesor}
                            </li>
                            <li >
                                <b>OS:</b> {product.os}
                            </li>
                            <li >
                                <b>DESCRIPTION:</b> {product.description}
                            </li>
                            <li >
                                <b>MEMORY:</b> {product.memory}
                            </li>
                            <li >
                                <b>HARD DRIVE:</b> {product.hardDrive}
                            </li>
                            <li >
                                <b>AVAILABILITY:</b> {product.availability}
                            </li>
                            <li >
                                <b>QUANTITY:</b> {product.quantity}
                            </li>
                            <li >
                                <b>PHOTOGRAPHY:</b> {product.photography}
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ModalProductAsesor