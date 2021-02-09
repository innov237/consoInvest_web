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

import {
    ADD_KEY,
    ITEM_ACTION
} from '../../../store/searchReducers'

const Home: React.FC = (props) => {


    const Api: any = useContext(ApiContext);
    const local: any = useContext(StorageContext);
    const history = useHistory();
    const [categorieData, setCategorie] = useState([]);
    const [productData, setProduct] = useState([]);

    const [boutiques, setBoutique] = useState([]);

    const dispatch = useDispatch();
    const comand = useSelector((state: any) => state.comand)
    const search = useSelector((state: any) => state.search)
    const auth = useSelector((state: any) => state.auth)
    const show = useSelector((state: any) => state.auth.show)



    const redirect = (e: any) => {

        history.push({
            pathname: '/shop',
            search: '?uuid=' + e.id
        });
    }
    useEffect(() => {

        getCategorie();
        getAllproduct();
        getAllBoutique();


    }, []);

    const getAllBoutique = async () => {

        //console.log("on va chercher sur le serveur")

        var response = await Api.getData("getAllBoutique?lastInsertId=20&etat=1");
        if (response.status == 200) {

            setBoutique(response.data);
            //history.push("/login", response.data); pour redirection les pages.
        }
    }


    const getCategorie = async () => {

        //console.log("on va chercher sur le serveur")
        var response = await Api.getData("getcategorie");
        if (response.status == 200) {
            setCategorie(response.data);
            //history.push("/login", response.data); pour redirection les pages.
        }
    }


    const getAllproductCategorie = async (url: any = null) => {
        //setProduct([])
        if (url) {
            var response = await Api.postData("getPublicationByCategorie", { idCategorie: url, lastInsertId: 10 });
            if (response.status == 200)
                dispatch(ADD_KEY({ data: response.data, key: "" }))

        } else {
            var response = await Api.getData("getAllPublication?lastInsertId=" + 100);
            if (response.status == 200)
                dispatch(ADD_KEY({ data: response.data, key: "" }))

        }

        history.push({ pathname: '/search' })
    }

    const getAllproduct = async (url: any = null) => {
        setProduct([])
        if (url) {
            var response = await Api.postData("getPublicationByCategorie", { idCategorie: url, lastInsertId: 10 });
            if (response.status == 200)
                setProduct(response.data)
        } else {
            var response = await Api.getData("getAllPublication?lastInsertId=" + 100);
            if (response.status == 200)
                setProduct(response.data)
        }


    }

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

    console.log(auth)

    const display = () => {

        return (boutiques.length > 1) ? (boutiques.length == 2) ? 2 : 3 : 1
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 no-padding left__menu bd-red" id="side__nemu" style={{ 'display': (show) ? 'block' : 'none' }}>
                    <div className="menu__title">Catégorie</div>
                    <div className="">
                        {categorieData.map((categorie, index) => (<div className="categirie__item" key={index} onClick={() => getAllproductCategorie(categorie['id'])}>
                            <img src={"./images/" + categorie['icon_categorie']} className="categorie__image" />  {categorie['libelle_categorie']}
                        </div>))}
                    </div>
                </div>
                <div className="col-md-8 no-padding">
                    <OwlCarousel
                        className="owl-theme"
                        items={1}
                        dots={true}
                        dotClass="dot-div"
                        dotsSpeed={true}
                        autoplay={true}
                        autoplaySpeed={500}
                        loop={true}
                    >
                        <div className="item">
                            <div className="slider-content">
                                <img src="https://img.alicdn.com/tfs/TB1FFhgpMgP7K4jSZFqXXamhVXa-990-400.png" className="slider__img" alt="" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-content">
                                <img src="https://img.alicdn.com/tfs/TB1x8x9eEY1gK0jSZFMXXaWcVXa-990-400.jpg" className="slider__img" alt="" />
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
                <div className="col-md-2 no-padding rigth__menu order-sm-first order-md-last">
                    <img className="menu__logo" src="data:image/jpeg;base64,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" alt="" />
                    <p className="mt-2 mb-5 welcome__text">Bienvenue sur <br /> ConsoInvest</p>
                    <div className="container-fluid">
                        <button className="btn btn-secondary w-100 mb-3" style={{ 'display': (!auth.user) ? 'block' : 'none' }}><Link to="/login">Me Connecter</Link></button>
                        <button className="btn btn-primary w-100" style={{ 'display': (!auth.user) ? 'block' : 'none' }}><Link to="/register">M'inscrire</Link></button>
                        {/*<button className="btn btn-secondary w-100 mt-3" data-toggle="modal" data-target="#exampleModal" style={{ 'display' : (auth.user) ? 'block' : 'none'}}>Créer ma boutique</button>*/}
                        <button className="btn btn-secondary w-100 mt-3" onClick={() => history.push('/new-shop')} style={{ 'display': (auth.isAuth) ? (auth.shop && auth.shop.id) ? 'none': 'block' : 'none' }}>Créer ma boutique</button>

                    </div>
                </div>
            </div>
            {/* livraison ligne */}
            <div className="row mt-2">
                <div className="card container-fluid">
                    <div className="row">
                        <div className="col-md-4"> <img src="./images/timer.png" alt="" /> Livraison rapide</div>
                        <div className="col-md-4"><img src="./images/card.png" alt="" /> Produit de qualité</div>

                        <div className="col-md-4"><img src="./images/secure.png" alt="" /> Paiement sécurisé</div>
                    </div>
                </div>
            </div>

            {/* deuxieme ligne */}
            <div className="row mt-2" style={{ 'display': (boutiques.length) ? 'block' : 'none' }}>
                <div className="card container-fluid">
                    <div className="row">
                        <OwlCarousel
                            className="owl-theme"
                            items={display()}
                            dots={true}
                            dotClass="dot-div"
                            dotsSpeed={true}
                            autoplay={true}
                            autoplaySpeed={500}
                            loop={true}
                        >

                            {
                                boutiques.map((e: any, i: any) => (
                                    <div className="item" onClick={
                                        () => redirect(e)}
                                    >
                                        <div className="slider-content">
                                            <div className="boutique__card">
                                                <img src={Api.imageUrl + e.logo_boutique} className="slider__img_shop img-thumbnail" alt="" />
                                                <p>{e.nom_boutique}</p>
                                                <p className="shop__description">{e.presentation_boutique}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </OwlCarousel>
                    </div>
                </div>
            </div>

            {/* troisieme ligne */}
            <div className="row product__list__row">
                {productData.map((product: any, index: any) => (
                    <div key={index} className="col-6 col-md-3 col-sm-6 col-xl-3 col-xs-6 col-lg-3 col-sl-3" onClick={() => openDetail(product)}>
                        <ProductCard key={index} image={Api.baseUrl + "storage/" + toArray(product['images'])[0]} title={product['titre']} price={product['prix']} descrption={product['description']} oldprice={50} />
                    </div>
                ))}
            </div>

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

export default Home;