import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Commande.css';


const Commande: React.FC = () => {



    return (
        <div>

            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-tout" role="tab" aria-controls="nav-tout" aria-selected="true">Tout</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-payement" role="tab" aria-controls="nav-payement" aria-selected="false">En attente de payement</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-transit" role="tab" aria-controls="nav-transit" aria-selected="false">En Transit</a>
                    <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-retour" role="tab" aria-controls="nav-retour" aria-selected="false">Retour d'informations</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-tout" role="tabpanel" aria-labelledby="nav-tout-tab">tout</div>
                <div className="tab-pane fade" id="nav-payement" role="tabpanel" aria-labelledby="nav-payement-tab">payement</div>
                <div className="tab-pane fade" id="nav-transit" role="tabpanel" aria-labelledby="nav-transit-tab">trasit</div>
                <div className="tab-pane fade" id="nav-retour" role="tabpanel" aria-labelledby="nav-retour-tab">retour</div>
                </div>
            </div>
        </div>

    );

}

/********** */

export default Commande;