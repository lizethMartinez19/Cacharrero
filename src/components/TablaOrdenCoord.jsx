const TablaOrdenCoord = ({ data, consultarSales, consultarProduct,getIdOrder }) => {
    return (
        <div className="m-5">
            <table className="table table-hover ">
                <thead id="titulos-tabla">
                    <tr>
                        <th className="titlestable text-center" scope="col">Date</th>
                        <th className="titlestable text-center" scope="col">State</th>
                        <th className="titlestable text-center" scope="col">User</th>
                        <th className="titlestable text-center" scope="col">Product</th>
                        <th className="titlestable text-center" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="resultado">
                    {data.map(respuesta => {
                        return (
                            <tr key={respuesta.id}>
                                <td>  {respuesta.registerDay}  </td>
                                <td>   {respuesta.status} </td>
                                <td><button type="button" onClick={consultarSales(respuesta.id)} href="#exampleModal" data-bs-toggle="modal" data-bs-target="#modalAsesor" className="btn btn-success btn-block">Ver Usuario</button></td>
                                <td><button type="button" onClick={consultarProduct(respuesta.id)} href="#exampleModal" data-bs-toggle="modal" data-bs-target="#modalAsesorProduct" className="btn btn-success btn-block">Ver Productos</button></td>
                                <td><button type="button" onClick={getIdOrder(respuesta.id)} href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-warning btn-block">Editar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TablaOrdenCoord