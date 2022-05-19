import CardOrdenCoord from '../components/CardOrdenCoord';
import MUser from '../components/MUser';
import ModalOrdenCoord from '../components/ModalOrdenCoord';
import { useEffect, useState } from 'react';
import TablaOrdenCoord from '../components/TablaOrdenCoord';
import ModalProductAsesor from '../components/ModalProductAsesor';
const OrdenesCoord = () => {
    const [data, setData] = useState([])
    const [idOrder, setIdOrder] = useState('')
    const [product, setProduct] = useState([])
    const [productSave, setProductSave] = useState([])
    const [quantitySave, setQuantitySave] = useState([])
    const [productR, setProductR] = useState([])
    const [salesMan, setSalesMan] = useState([])
    const [consultProduct, setConsultProduct] = useState([])
    

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
        const dataUpdate = {
            id: idOrder,
            status: data.state
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
            <CardOrdenCoord consultar={consultar} consultarProd={consultarProd} />
            <ModalOrdenCoord updateOrder={updateOrder}  />
            <TablaOrdenCoord consultarProduct={consultarProduct} consultarSales={consultarSales} data={data} getIdOrder={getIdOrder} />
            <MUser salesMan={salesMan}/>
            <ModalProductAsesor consultProduct={consultProduct} />
        </>
    )
}


export default OrdenesCoord