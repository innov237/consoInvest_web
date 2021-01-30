import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import OwlCarousel from 'react-owl-carousel';

import ApiContext from '../../../context/ApiContext'
import StorageContext from '../../../context/StorageContext'
import './Home.css';
import ProductCard from "../../layout/Product/ProductCard/ProductCard";

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import {useDispatch} from 'react-redux';

import queryString from 'query-string';


import {
    ADD_KEY
} from '../../../store/searchReducers'

const Home: React.FC = (props) => {


    const Api: any = useContext(ApiContext);
    const history = useHistory();
    const [categorieData, setCategorie] = useState([]);
    const [productData, setProduct] = useState([]);

    const dispatch = useDispatch();
    const comand = useSelector((state: any) => state.comand)
    const search = useSelector((state: any) => state.search)

    
    
    const process= async (parsed:any)=>{
       

        if (parsed.params){
            var response = await Api.getData(`rechercherPublication?key=${parsed.params}&lastInsertId=5`);
            if (response.status == 200){

                if ( response.data.length){
                    dispatch(ADD_KEY({data:response.data, key:parsed.params}))
                }else{
                    alert(`No data found for ${parsed.params}`);
                    history.push('/home');
                };
            }

        }else
          history.push('/home');
        
    }
    useEffect(() => {
    
        const parsed = queryString.parse(history.location.search);
        
        getCategorie();
        console.log(search.results)
        if (!search.results)
        process(parsed)
        
       
        
    }, []);


     
    const getCategorie = async () => {
        
        //console.log("on va chercher sur le serveur")
        var response = await Api.getData("getcategorie");
        if (response.status == 200) {
            setCategorie(response.data);
            //history.push("/login", response.data); pour redirection les pages.
        }
    }
    
   

    const toArray = (data: any) => {
        var array = JSON.parse(data);
        return array;
    }

    const openDetail = (product: any) => {
        //console.log(product);
        history.push("produit", product);

    }

   

     const getAllproduct = async (url:any = null) => {
        
        if (url) {
            var response = await Api.postData("getPublicationByCategorie",{idCategorie:url, lastInsertId:10});
                if (response.status == 200) 
                    dispatch(ADD_KEY({key:null, data:response.data}))
        }else{
            var response = await Api.getData("getAllPublication?lastInsertId=" + 100);
                if (response.status == 200) 
                    dispatch(ADD_KEY({key:null, data:response.data}))
        }
        
 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 no-padding left__menu bd-red">
                    <div className="menu__title">Catégorie</div>
                    <div className="">
                        {categorieData.map((categorie, index) => (<div className="categirie__item" key={index} onClick={() => getAllproduct(categorie['id'])}>
                            <img src={"./images/" + categorie['icon_categorie']} className="categorie__image" />  {categorie['libelle_categorie']}
                        </div>))}
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row mt-2 pl-1">
                        <div className="card container-fluid">
                            <div className="row">
                                <div className="col-md-4"> <img src="./images/timer.png" alt="" /> Livraison rapide</div>
                                <div className="col-md-4"><img src="./images/card.png" alt=""  /> Produit de qualité</div>
                                <div className="col-md-4"><img src="./images/secure.png" alt="" /> Paiement sécurisé</div>
                            </div>
                        </div>
                    </div>
                    <div className="row product__list__row pl-1">
                        {
                            (search.results) ? 
                                (

                                    search.results.map((product: any, index:any) => (
                                        <div key={index} className="col-md-3 col-sm-6 col-xl-3 col-lg-3 col-sl-3" onClick={() => openDetail(product)}>
                                            <ProductCard key={index} image={Api.baseUrl + "storage/" + toArray(product['images'])[0]} title={product['titre']} price={product['prix']} descrption={product['description']} oldprice={50} />
                                        </div>
                                        ))

                                ): <></>

                        }
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

export default Home;