const TablaUsuario = ({ data, deleteUser, getIdUser }) => {
    
    return (
        <div className="m-5">
            <table className="table table-hover ">
                <thead id="titulos-tabla">
                    <tr>
                        <th className="titlestable" scope="col">Identificacion</th>
                        <th className="titlestable" scope="col">Name</th>
                        <th className="titlestable" scope="col">birthDay</th>
                        <th className="titlestable" scope="col">monthBirthDay</th>
                        <th className="titlestable" scope="col">Email</th>
                        <th className="titlestable" scope="col">Password</th>
                        <th className="titlestable" scope="col">Address</th>
                        <th className="titlestable" scope="col">Cellphone</th>
                        <th className="titlestable" scope="col">Zone</th>
                        <th className="titlestable" scope="col">Type</th>
                        <th className="titlestable" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="resultado">
                    {data.map(respuesta => {
                        const formatDate = new Date(respuesta.birthtDay)
                        const cleanDate = formatDate.getDate() + "-" + (formatDate.getMonth() + 1) + "-" + formatDate.getFullYear()
                        return (
                            <tr key={respuesta.id}>
                                <td>  {respuesta.identification}  </td>
                                <td>   {respuesta.name} </td>
                                <td>   {cleanDate}</td>
                                <td>   {respuesta.monthBirthtDay} </td>
                                <td>   {respuesta.email}  </td>
                                <td>   {respuesta.password} </td>
                                <td>   {respuesta.address}  </td>
                                <td>   {respuesta.cellPhone}  </td>
                                <td>   {respuesta.zone}  </td>
                                <td>   {respuesta.type}  </td>
                                <td><button type="button" onClick={deleteUser(respuesta.id)} className="btn btn-danger btn-block">BORRAR</button><button type="button" href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={getIdUser(respuesta.id)} className="btn btn-success btn-block">EDITAR</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuario