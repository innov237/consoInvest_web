import React from "react";
import { Link } from "react-router-dom";
import './Panier.css';

const Panier: React.FC = () => {


    return (
        <div>
            <h1>panier</h1>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"><input type="checkbox" /></th>
                            <th scope="col">Article</th>
                            <th scope="col">description</th>
                            <th scope="col">Qté</th>
                            <th scope="col">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><input type="checkbox" /></th>
                            <td>Mark</td>
                            <td><input type="text" value="1"/></td>
                            <td>@mdo</td>
                            <td><i className="fas fa-trash-alt"></i></td>
                            </tr>
                        </tbody>
                        </table>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4"><button type="button" className="btn btn-warning"><i className="fas fa-cart-plus"></i> Continuer les achats</button></div>
                            <div className="col-md-4"><button type="button" className="btn btn-secondary"><i className="fas fa-sync-alt"></i> Actualiser le panier</button></div>
                            <div className="col-md-4"> <button type="button" className="btn btn-secondary"><input type="checkbox" /> <i className="fas fa-trash"></i> Tout Supprimer</button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>RESUME</h4>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sous-total
                                <span className="badge badge-primary badge-pill">14 FCFA</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Garantie
                                <span className="badge badge-primary badge-pill">2 FCFA</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Taxe
                                <span className="badge badge-primary badge-pill">1 FCFA</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total de la commande
                                <span className="badge badge-primary badge-pill">1 FCFA</span>
                            </li>
                            <button className="btn btn-secondary"><b>COMMANDER</b></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

/********** */

export default Panier;