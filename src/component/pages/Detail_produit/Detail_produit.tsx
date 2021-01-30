import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux'

import ApiService from "../../../services/ApiService";
import './Detail_produit.css';
import { act } from "react-dom/test-utils";

import queryString from 'query-string';



const Detail: React.FC = () => {

    const history = useHistory();
    const item = useSelector((state:any) => state.search.item)
    const [productData, setProduct] = useState<any>([]);
    const [slider, setSlider] = useState<any>([]);
    const [isload, setLoader] = useState(false);
    const [quantity, setQuantity]=useState(1)
    const Api = new ApiService();
    let dispatch=useDispatch()
    
    const comand=useSelector((state: any)=> state.comand)
    const auth = useSelector((state:any) => state.auth)

 
    const toArray = (data: any) => {
        return JSON.parse(data)
    }


    const process= async (parsed:any)=>{
       

        if (parsed.slug){
            var response = await Api.getData(`getPublicationBySlug?key=${parsed.slug}&?lastInsertId=10`);
            if (response.status == 200){

                if ( response.data.length){
                    setProduct(response.data[0])
                }else{
                    alert(`No data found for ${parsed.params}`);
                    history.push('/home');
                };
            }

        };
        
    }


    const command = async () => {

        const credentials = {
            'id_user':auth.user.id,
            'id_boutique':productData.id_boutique,
            'produits': [productData],
            'montant_cmd': quantity * productData.prix
        }

        console.log(credentials)

        const response = await Api.postData('enregistrerCommande', credentials)
        
        if (response.status == 200) {
            alert('Opération effectuée avec success')
            history.push('/home')
            
        }
    }
   
  
    const changeQuantity=(num: number)=>{
        setQuantity((quantity+num)? quantity+num : 1)
    }
    const comandItem=()=>{
        const action={
            type: 'ADD_COMAND_ITEM',
            value: {
                item: productData,
                quantity: quantity
            }
        }
        dispatch(action)
    }


    useEffect(() => {
        if(item)
            setProduct(item)
        else
            process(queryString.parse(history.location.search))

        setLoader(true);
    }, [])
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left__menu">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                { 
                                    (productData.images) ?
                                    (
                                        toArray(productData.images).map((result: any) => (
                                            <div className="carousel-item active" data-interval="1000">
                                                <img src={Api.imageUrl + result} className="d-block w-100" />
                                            </div>
                                            )
                                        )
                                    ) : <div></div>
                                }
                                {/* {toArray(productData['images'])} */}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{productData["titre"]}</h5>
                                <p className="card-text">
                                    {productData["description"]}
                                </p>
                                <div className="alert alert-primary alert-link" role="alert">
                                    {productData["prix"]} CFA
                            </div>
                                <ul className="list-group list-group-flush">
                                    Quantité:
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary" onClick={()=>changeQuantity(-1)}><b>-</b></button>
                                        <input type="text" name="" id="" value={quantity} onChange={()=>{}}/>
                                        <button type="button" className="btn btn-secondary" onClick={()=>changeQuantity(1)}><b>+</b></button>
                                    </div>
                                </ul>
                                <br />
                                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary" onClick={() => command()} style={{'display' : (auth.user.id) ? 'block': 'none'}}>Acheter</button>
                                    </div>
                                    <div className="input-group">
                                        <button type="button" className="btn btn-secondary" onClick={comandItem}><i className="fas fa-cart-plus"></i> Ajouter au panier</button>
                                    </div>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-primary mb-3 w-100">
                    <div className="card-header"></div>
                    <div className="card-body text-secondary">
                        <u><p className="card-title description">Description du produit</p></u>
                        <div className="card-text">
                            <ul className="row">
                                <li className="col-md-6 no-padding">Categorie : {productData["libelle_categorie"]} </li>
                                <li className="col-md-6 no-padding">Ville : {productData["ville"]} </li>
                                <li className="col-md-6 no-padding">Sexe : {productData["sexe"]} </li>
                                <li className="col-md-6 no-padding">Telephone : {productData["telephone"]} </li>
                                <li className="col-md-6 no-padding">Age : {productData["age"]} </li>
                                <li className="col-md-6 no-padding">Lieu Boutique : {productData["lieu_boutique"]} </li>
                            </ul>
                            <div className="row justify-content-center">
                                <button className="col-3 btn btn-success">Livraison</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}
const mapStateToProps=(state: any)=>({
    comand: state.comand,
});


export default connect(mapStateToProps)(Detail);
