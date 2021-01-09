import { profile } from "console";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Boutique.css';

import ProductCard from "../../../../layout/Table_commande_user/Table_commande";

const Boutique: React.FC = () => {
    return (
        <div>
            <h5 className="titre">Ma boutique</h5>
             <div className="my-3 p-3 bg-white rounded shadow-sm">

             <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Commandes</a>
                    <a className="nav-link" id="nav-produit-tab" data-toggle="tab" href="#nav-produit" role="tab" aria-controls="nav-produit" aria-selected="false">vendre un produit</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Tout</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">En attente</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">En cour</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact1" role="tab" aria-controls="nav-contact" aria-selected="false">En route</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact2" role="tab" aria-controls="nav-contact" aria-selected="false">Livré</a>
                        </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ProductCard /></div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><ProductCard /></div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><ProductCard /></div>
                            <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab"><ProductCard /></div>
                            <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab"><ProductCard /></div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-produit" role="tabpanel" aria-labelledby="nav-produit-tab">
                    
                        <div className="form-group">
                            <input type="url" className="form-control text" placeholder="http://" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control text" placeholder="Description de l'article"></textarea>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Boutique;