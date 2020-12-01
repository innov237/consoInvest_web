import React from "react";
import { Link } from "react-router-dom";
import './Detail_produit.css';

const Detail: React.FC = () => {


    return (
        <div>
            <div className="container">
                   
                <div className="row">
                <div className="col-md-6 left__menu">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                        <img src="https://global2019-static-cdn.kikuu.com/upload-productImg-1565760073638_320_234.jpeg" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                        <img src="https://global2019-static-cdn.kikuu.com/upload-productImg-1565759827744_320_234.jpeg" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src="https://global2019-static-cdn.kikuu.com/upload-productImg-1565759824082_320_234.jpeg" className="d-block w-100"/>
                        </div>
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
                            <h5 className="card-title">Sport Smartwatch</h5>
                            <p className="card-text">
                                D13 montre intelligente hommes femmes pour Android Apple téléphone étanche 116Plus traqueur de fréquence cardiaque pression artérielle oxygène Sport Smartwatch
                            </p>
                            <div className="alert alert-primary alert-link" role="alert">
                                4 212 CFA
                            </div>
                            <ul className="list-group list-group-flush">
                                Quantité: 
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">-</button>
                                    <input type="text" name="" id="" value="0"/>
                                    <button type="button" className="btn btn-secondary">+</button>
                                </div>
                            </ul>
                            <br/>
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
                    <h5 className="card-title">Description du produit</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div >
    );

}

/********** */

export default Detail;