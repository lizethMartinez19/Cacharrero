import CardUsuario from '../components/CardUsuario';
import TablaUsuarioAsesor from '../components/TablaUsuarioAsesor';
import ModalUsuarioAsesor from '../components/ModalUsuarioAsesor';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
const Usuarios = () => {
    const [data, setData] = useState([])
    //const location = useParams()
    const [idUser, setIdUser] = useState('')
    const getIdUser = (id) => async () => {
        const getId = await id
        setIdUser(getId)
    }
    const saveUser = (data) => async () => {
        const dataSave = {
            email: data.email,
            password: data.password,
            name: data.name,
            birthtDay: data.birthtDay,
            monthBirthtDay: (new Date(data.birthtDay).getMonth()) + 1,
            identification: data.identi,
            address: data.direct,
            cellPhone: data.cell,
            zone: data.zone,
            type: data.type
        }
        await fetch("http://129.151.122.91:5505/api/user/save", {
            body: JSON.stringify(dataSave),
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }
    const updateUser = (data) => async () => {
        const dataUpdate = {
            id: idUser,
            email: data.email,
            password: data.password,
            name: data.name,
            birthtDay: data.birthtDay,
            monthBirthtDay: (new Date(data.birthtDay).getMonth()) + 1,
            identification: data.identi,
            address: data.direct,
            cellPhone: data.cell,
            zone: data.zone,
            type: data.type
        }

        await fetch("http://129.151.122.91:5505/api/user/update", {
            body: JSON.stringify(dataUpdate),
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }
    const consultar = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/user/getAll')
        const json = await data.json()
        setData(json)
    }
    const deleteUser = (id) => async () => {
        await fetch("http://129.151.122.91:5505/api/user/deleteById/" + id, {
            method: 'DELETE'
        })
        await consultar();
    }
    useEffect(() => {
        consultar();
    }, [])
    return (
        <>
            <CardUsuario consultar={consultar} />
            <TablaUsuarioAsesor data={data} deleteUser={deleteUser} getIdUser={getIdUser} />
            <ModalUsuarioAsesor updateUser={updateUser} saveUser={saveUser} />
        </>
    )
}


export default Usuarios
