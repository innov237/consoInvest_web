import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BiChevronsDown } from 'react-icons/bi'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './categories.css'
import ApiContext from '../../../context/ApiContext'
import ProductCard from "../../layout/Product/ProductCard/ProductCard";

const Categorie: React.FC=({match, history}: any)=>{

    const Api = useContext(ApiContext)
    const [produit, setProduit]=useState({load: true, lastId: 20, products: []})
    useEffect(() => {
        getProductsByCategorie(id, produit.lastId)
        console.log("montage")
    }, [])
    let id=match.params.id.split(':')[1]
    const getProductsByCategorie=async (idCatogorie: any, lastId:any)=>{
        const params={"idCategorie":idCatogorie, "lastInsertId":lastId}
        var response=await Api.postData("getPublicationByCategorie", params)
        setProduit({load: false, lastId: 40, products: response.data})
    }
    const openDetail = (product: any) => {
        //console.log(product);
        history.push("produit", product);

    }
    const toArray = (data: any) => {
        var array = JSON.parse(data);
        return array;
    }
    const displayMore=async()=>{
        const params={"idCategorie":id, "lastInsertId":produit.lastId}
        var response=await Api.postData("getPublicationByCategorie", params)
        setProduit({...produit, lastId: produit.lastId+20, products: produit.products.concat(response.data)})
        console.log("ajout")
    }
    console.log(id)
    return  <div className="row product__list__row">
                <div className="container">
                    {
                    produit.load ? <><div className="loader"></div><p>Loading... </p></> :
                        <>
                            <h1><b><u>Categorie: {produit.products[0]["libelle_categorie"]}</u></b></h1>
                            <div className="row product__list__row">
                                {produit.products.map((product, index) => (
                                    <div className="col-md-3 col-sm-6 col-xl-3 col-lg-3 col-sl-3" onClick={() => openDetail(product)}>
                                        <ProductCard key={index} image={Api.baseUrl + "storage/" + toArray(product['images'])[0]} title={product['titre']} price={product['prix']} descrption={product['description']} oldprice={50} />
                                    </div>
                                ))}
                            </div>
                            <div className="alert alert-secondary" role="alert" onClick={displayMore}>
                                Afficher Plus <span style={{fontSize: 20}}> <BiChevronsDown /> </span>
                            </div>
                        </>
                    }

                </div>
            </div>
}

export default Categorie