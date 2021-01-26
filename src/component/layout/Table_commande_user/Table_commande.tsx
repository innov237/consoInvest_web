import React from "react";
import { Link } from "react-router-dom";
import "./Table_commande.css";
import PropTypes from 'prop-types';

const Table_commande: React.FC = () => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Produit</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qté</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><img className="rounded-circle p-3" width="30%" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/></th>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                        <div className="btn-group dropleft">
                        <i className="fas fa-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            
                            <div className="dropdown-menu">
                                <button className="dropdown-item" type="button">En Attente</button>
                                <button className="dropdown-item" type="button">En cour</button>
                                <button className="dropdown-item" type="button">En route</button>
                                <button className="dropdown-item" type="button">Livré</button>
                            </div>
                            </div>
                        
                        </td>
                    </tr>
                </tbody>
                </table>
            
        </div>
    )
}

Table_commande.propTypes = {
   image: PropTypes.string,
   name: PropTypes.string,
   descript: PropTypes.string,
   qte: PropTypes.string,
   status: PropTypes.string,
};

Table_commande.defaultProps = {
   image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
   name: "",
   descript: "",
   qte: "",
   status: "",
};

export default Table_commande;