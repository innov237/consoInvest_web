import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

import OwlCarousel from 'react-owl-carousel';

import ApiContext from '../../../context/ApiContext'
import StorageContext from '../../../context/StorageContext'
import './Home.css';
import ProductCard from "../../layout/Product/ProductCard/ProductCard";

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import { useDispatch } from 'react-redux';

import queryString from 'query-string';

import {
    ADD_KEY,
    ITEM_ACTION
} from '../../../store/searchReducers'

const Shop: React.FC = (props) => {


    const Api: any = useContext(ApiContext);

    const history = useHistory();

    const [productData, setProduct] = useState([]);
    const [shop, setShop] = useState<any>();

    const dispatch = useDispatch()
    const process = async (parsed: any) => {


        if (parsed.uuid) {

            var response = await Api.postData(`getUserPost?id_user=${parsed.uuid}`);
            if (response.status == 200) {

                if (response.data.length) {
                    setShop(response.data[0])
                    getAll(parsed)
                } else {
                    alert(`No data found for ${parsed.params}`);
                    history.push('/home');
                };
            }



        } else
            history.push('/home');

    }

    const getAll = async (parsed: any) => {
        var response = await Api.postData(`getUserPost`, { id_user: parsed.uuid, lastInsertId: 20 });
        if (response.status == 200) {

            if (response.data.length) {
                setProduct(response.data)
            } else {
                alert(`No data found for ${parsed.params}`);
                history.push('/home');
            };
        }
    }

    useEffect(() => {



        const parsed = queryString.parse(history.location.search);

        process(parsed)

    }, []);



    const toArray = (data: any) => {
        var array = JSON.parse(data);
        return array;
    }

    const openDetail = (product: any) => {

        dispatch(ITEM_ACTION(product))
        history.push({
            pathname: '/produit',
            search: '?slug=' + product.slug
        });

    }


    return (
        <div className="container">
            <div className="row">

                {
                    (shop) ?
                        (<div className="col-md-2 no-padding rigth__menu">
                            <img className="menu__logo shop__logo" src={Api.imageUrl + shop.logo_boutique} />
                            <p className="mt-2 mb-5 welcome__text">Bienvenue sur <br /> {shop.nom}</p>
                            <div className="shop__info">
                                <p>Nom: {shop.nom_boutique}</p>
                                <p>Phone: {shop.telephone_boutique}</p>
                                <p>Lieu: {shop.lieu_boutique}</p>
                                <p>livraison: {shop.livraison}</p>
                            </div>
                        </div>

                        ) : <></>
                }


                <div className="col-md-10">
                    <div className="row mt-2 pl-3">
                        <div className="card container-fluid">
                            <div className="row">
                                <div className="col-md-4"> <img src="./images/timer.png" alt="" /> Livraison rapide</div>
                                <div className="col-md-4"><img src="./images/card.png" alt="" /> Produit de qualité</div>
                                <div className="col-md-4"><img src="./images/secure.png" alt="" /> Paiement sécurisé</div>
                            </div>
                        </div>
                    </div>
                    <div className="row product__list__row ml-1">
                        {productData.map((product: any, index: any) => (
                            <div key={index} className="col-md-3 col-sm-6 col-xl-3 col-lg-3 col-sl-3" onClick={() => openDetail(product)}>
                                <ProductCard key={index} image={Api.baseUrl + "storage/" + toArray(product['images'])[0]} title={product['titre']} price={product['prix']} descrption={product['description']} oldprice={50} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* deuxieme ligne */}

            {/* troisieme ligne */}


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Connectez vous pour effectuer cet opération
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop