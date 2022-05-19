const TablaProducto = ({ data, deleteProduct, getIdProduct }) => {
    return (
        <div className="m-5">
            <table className="table table-hover ">
                <thead id="titulos-tabla">
                    <tr>
                        <th className="titlestable text-center" scope="col">Brand</th>
                        <th className="titlestable text-center" scope="col">Processor</th>
                        <th className="titlestable text-center" scope="col">Os</th>
                        <th className="titlestable text-center" scope="col">Description</th>
                        <th className="titlestable text-center" scope="col">Memory</th>
                        <th className="titlestable text-center" scope="col">HardDrive</th>
                        <th className="titlestable text-center" scope="col">Availability</th>
                        <th className="titlestable text-center" scope="col">Price</th>
                        <th className="titlestable text-center" scope="col">Quantity</th>
                        <th className="titlestable text-center" scope="col">Photography</th>
                        <th className="titlestable text-center" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="resultado">
                    {data.map(respuesta => {
                        return (
                            <tr key={respuesta.id}>
                                <td>  {respuesta.brand}  </td>
                                <td>   {respuesta.procesor} </td>
                                <td>   {respuesta.os}</td>
                                <td>   {respuesta.description} </td>
                                <td>   {respuesta.memory} </td>
                                <td>   {respuesta.hardDrive}  </td>
                                <td>   {respuesta.availability} </td>
                                <td>   {respuesta.price}  </td>
                                <td>   {respuesta.quantity}  </td>
                                <td>   {respuesta.photography}  </td>
                                <td><button type="button" onClick={deleteProduct(respuesta.id)} className="btn btn-danger btn-block">BORRAR</button><button type="button" href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={getIdProduct(respuesta.id)} className="btn btn-success btn-block">EDITAR</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TablaProducto