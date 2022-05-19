import CardProducto from '../components/CardProducto';
import TablaProductoAsesor from '../components/TablaProductoAsesor';
import ModalProducto from '../components/ModalProducto';
import { useEffect, useState } from 'react';
import MFiltroDescription from '../components/MFiltroDescription';
import MFiltroPrecio from '../components/MFiltroPrecio';
const Productos = () => {
    const [data, setData] = useState([])
    const [idProduct, setIdProduct] = useState('')
    const getIdProduct = (id) => async () => {
        const getId = await id
        setIdProduct(getId)
        console.log(getId)
    }
    const saveProduct = (data) => async () => {
        const dataSave = {
            brand: data.brand,
            procesor: data.procesor,
            os: data.os,
            description: data.description,
            memory: data.memory,
            hardDrive: data.hardDrive,
            availability: data.availability,
            price: data.price,
            quantity: data.quantity,
            photography: data.photography
        }
        await fetch("http://129.151.122.91:5505/api/clone/save", {
            body: JSON.stringify(dataSave),
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }
    const updateProduct = (data) => async () => {
        const dataUpdate = {
            id: idProduct,
            brand: data.brand,
            procesor: data.procesor,
            os: data.os,
            description: data.description,
            memory: data.memory,
            hardDrive: data.hardDrive,
            availability: data.availability,
            price: data.price,
            quantity: data.quantity,
            photography: data.photography
        }

        await fetch("http://129.151.122.91:5505/api/clone/update", {
            body: JSON.stringify(dataUpdate),
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }
    const consultar = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/clone/getAll')
        const json = await data.json()
        setData(json)
    }
    const deleteProduct = (id) => async () => {
        await fetch("http://129.151.122.91:5505/api/clone/deleteById/" + id, {
            method: 'DELETE'
        })
        await consultar();
    }
    const filtroDescription = (filter) => async () => {
        await setData(data.filter(des => des.description === filter.Description))
        document.getElementById('btnCerrarModal').click()
    }
    const filtroPrice = (filter) => async () => {
        await setData(data.filter(des => des.price <= filter.Price))
        console.log(data)
        document.getElementById('btnCerrarModal').click()
    }
    useEffect(() => {
        consultar();
    }, [])
    return (
        <>
            <CardProducto consultar={consultar} />
            <TablaProductoAsesor data={data} deleteProduct={deleteProduct} getIdProduct={getIdProduct} />
            <ModalProducto updateProduct={updateProduct} saveProduct={saveProduct} />
            <MFiltroDescription filtroDescription={filtroDescription} />
            <MFiltroPrecio filtroPrice={filtroPrice} />
        </>
    )
}

export default Productos