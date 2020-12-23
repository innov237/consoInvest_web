import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ApiService from "../../../services/ApiService";
import './Detail_produit.css';



const Detail: React.FC = () => {

    const history = useHistory();
    const [productData, setProduct] = useState<any>([]);
    const [isload, setLoader] = useState(false);
    const Api = new ApiService();
    let [quantity, setQuantity]=useState(1)
    useEffect(() => {
        console.log(history.location.state);
        setProduct(history.location.state);
        setLoader(true);
    }, [])
    const toArray = (data: any) => {
        var array = JSON.parse(data);
        return array;
    }
    const changeQuantity=(num: number)=>{
        setQuantity(quantity+num)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left__menu">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {/* {toArray(productData["images"]).map((result: any) => (
                                    <div className="carousel-item active" data-interval="1000">
                                        <img src={Api.imageUrl + result} className="d-block w-100" />
                                    </div>
                                ))} */}
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
                                        <input type="text" name="" id="" value={quantity} />
                                        <button type="button" className="btn btn-secondary" onClick={()=>changeQuantity(1)}><b>+</b></button>
                                    </div>
                                </ul>
                                <br />
                                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">Acheter</button>
                                    </div>
                                    <div className="input-group">
                                        <button type="button" className="btn btn-secondary"><i className="fas fa-cart-plus"></i> Ajouter au panier</button>
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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default Detail;
