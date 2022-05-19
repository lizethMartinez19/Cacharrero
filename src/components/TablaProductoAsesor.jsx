const TablaProductoAsesor = ({ data, deleteProduct, getIdProduct }) => {
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
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TablaProductoAsesor