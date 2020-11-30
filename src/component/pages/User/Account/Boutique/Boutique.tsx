import { profile } from "console";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Boutique.css';

const Boutique: React.FC = () => {
    return (
        <div>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <button type="button" className="btn btn-secondary ajout" data-dismiss="modal">Créer une boutique +</button>
            </div>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <div className="media text-muted pt-3">
                    <img className="rounded-circle p-3" width="70" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">nom de la boutique</strong>
                        <strong className="d-block text-gray-dark">informations complementaire</strong>
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Produits +</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>



        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Les Produits la boutique: Nom de la boutique</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    body
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                </div>
                </div>
            </div>
        </div>


        </div>
    );
}

export default Boutique;