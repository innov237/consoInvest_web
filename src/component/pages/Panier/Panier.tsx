import React from "react";
import { connect, useSelector } from 'react-redux'

import './Panier.css';

const Panier: React.FC = (props) => {

    console.log(props)
    const comand=useSelector((state: any)=>state.comand)
    const listItem=comand.length ? (
        comand.map(({item, quantity}: any)=>
        <tr>
            <th scope="row"><input type="checkbox" /></th>
            <th><img className="rounded-circle p-3" width="60%" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/></th>
            
            <td>{item.nom}</td>
            <td>{item.description}</td>
            <td><input type="text" value={quantity}/></td>
            <td>{item.prix}FCFA</td>
            <td><i className="fas fa-trash-alt"></i></td>
        </tr>)
    ): ( "vous n'avez encore rien commande" )
    return (
        <div>
            <h5>panier</h5>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"><input type="checkbox" /></th>
                            <th scope="col">image</th>
                            <th scope="col">Article</th>
                            <th scope="col">description</th>
                            <th scope="col">Qté</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                            {/* <tr>
                            <th scope="row"><input type="checkbox" /></th>
                            <th><img className="rounded-circle p-3" width="60%" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/></th>
                            
                            <td>Mark</td>
                            <td>@mdo</td>
                            <td><input type="text" value="1"/></td>
                            <td>100 FCFA</td>
                            <td><i className="fas fa-trash-alt"></i></td>
                            </tr> */}
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
                            <button className="btn btn-secondary colorbtncommander"><b>COMMANDER</b></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps=(state: any)=>({
    comand: state.comand,
})

export default connect(mapStateToProps)(Panier);