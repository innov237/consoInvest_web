import React, { useState, useContext, useEffect } from 'react'

import ApiContext from '../../../context/ApiContext'

type boutique = {
    key: string,
    data:any
    api: any
}

const ListBoutique: React.FC=()=>{
    const [list, setList]=useState([])
    const [load, setLoad]=useState(true)
    let Api=useContext(ApiContext)
    useEffect(() => {
        getStoreList()
    }, [])
    const getStoreList=async ()=>{
        let data={"lastInsertId": 1, "est_actif": 1}
        let response= await Api.getData("getAllBoutique")
        console.log(response.data)
        setList(response.data)
        setLoad(false)
    }
    return (
        <div className="container">
            {
                load ? <><div className="loader"></div><p>Loading... </p></> :
                list.map((data, i)=><BoutiqueItem key={`bout${i}`} data={data} api={Api} />)
            }
        </div>
        )
}

export default ListBoutique

const BoutiqueItem: React.FC<boutique>=({data, api}: any)=>{
    console.log(api.imageUrl+data["baniere_boutique"])
    return (
        <div className="bd-red">
            <div className="">
                <img srcSet={api.imageUrl+data["baniere_boutique"]} alt=""/>
                <h2>{data["nom_boutique"]}</h2>
            </div>
        </div>
    )
}
