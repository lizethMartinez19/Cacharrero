import CardOrden from '../components/CardOrden';
//import TablaUsuario from '../components/TablaUsuario';
import MUser from '../components/MUser';
import ModalOrden from '../components/ModalOrden';
import { useEffect, useState } from 'react';
import TablaOrden from '../components/TablaOrden';
import ModalProductAsesor from '../components/ModalProductAsesor';
import MFiltroFecha from '../components/MFiltroFecha';
import MFiltroState from '../components/MFiltroState';
const Ordenes = () => {
    const [data, setData] = useState([])
    const [idOrder, setIdOrder] = useState('')
    const [idUser, setIdUser] = useState('')
    const [product, setProduct] = useState([])
    const [productSave, setProductSave] = useState([])
    const [quantitySave, setQuantitySave] = useState([])
    const [productR, setProductR] = useState([])
    const [salesMan, setSalesMan] = useState([])
    const [consultProduct, setConsultProduct] = useState([])
    const [filterFecha, setFilterFecha] = useState([])
    const getIdUser = (id) => async () => {
        const getId = await id
        setIdUser(getId)
    }
    const getIdOrder = (id) => async () => {
        const getId = await id
        setIdOrder(getId)
    }

    const userInfo = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/user/getById/' + localStorage.getItem('userLogin'))
        const json = await data.json()
        return json
    }

    const consultarProd = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/clone/getAll')
        const json = await data.json()
        setProduct(json)
    }

    const consultarProdRegister = async (id) => {
        if (id === undefined) {
            id = 1
        }
        const data = await fetch('http://129.151.122.91:5505/api/clone/getById/' + id)
        const json = await data.json()
        return json
    }

    const saveProducts = (data) => async () => {
        const product = await consultarProdRegister(data.product)
        const quantities = await data.quantities
        if (!productR.find(p => p.products.id === product.id)) {
            setProductR([...productR, { products: product, quantities: quantities }])
            setProductSave([...productSave, product])
            setQuantitySave([...quantitySave, quantities])
        }
    }

    const saveOrder = () => async () => {
        const user = await userInfo()
        const dataSave = {
            registerDay: new Date(),
            status: "Pendiente",
            salesMan: user,
            products: Object.assign({}, productSave),
            quantities: Object.assign({}, quantitySave)
        }
        await fetch("http://129.151.122.91:5505/api/order/save", {
            body: JSON.stringify(dataSave),
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }


    const updateOrder = (data) => async () => {
        const user = await userInfo()
        const dataUpdate = {
            registerDay: new Date(),
            status: data.status,
            salesMan: user,
            products: Object.assign({}, productSave),
            quantities: Object.assign({}, quantitySave)
        }
        await fetch("http://129.151.122.91:5505/api/order/update", {
            body: JSON.stringify(dataUpdate),
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
        })
        document.getElementById('btnCerrarModal').click()
        await consultar();
    }
    const consultarSales = (id) => async () => {
        const data = await fetch('http://129.151.122.91:5505/api/order/getAll')
        const json = await data.json()
        setSalesMan(json[id - 1].salesMan)
    }
    const consultarProduct = (id) => async () => {
        const data = await fetch('http://129.151.122.91:5505/api/order/getAll')
        const json = await data.json()
        setConsultProduct(json[id - 1].products)
    }
    const consultar = async () => {
        const data = await fetch('http://129.151.122.91:5505/api/order/getAll')
        const json = await data.json()
        setData(json)
    }
    
    const filtroFecha = (filter) => async () => {
        await setData(data.filter(day=>day.registerDay===filter.Date))
        document.getElementById('btnCerrarModal').click()
    }

    const filtroState = (filter) => async () => {
        await setData(data.filter(state=>state.status===filter.State))
        document.getElementById('btnCerrarModal').click()
    }

    const deleteOrder = (id) => async () => {
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
            <CardOrden consultar={consultar} consultarProd={consultarProd} />
            <ModalOrden productR={productR} product={product} saveOrder={saveOrder} saveProducts={saveProducts} />
            <TablaOrden consultarProduct={consultarProduct} consultarSales={consultarSales} data={data} />
            <MUser salesMan={salesMan}/>
            <ModalProductAsesor consultProduct={consultProduct} />
            <MFiltroFecha filtroFecha={filtroFecha} />
            <MFiltroState filtroState={filtroState} />
        </>
    )
}


export default Ordenes