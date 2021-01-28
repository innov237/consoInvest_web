import React from "react";
import { Link } from "react-router-dom";
import "./Table_commande.css";

import ApiContent from '../../../services/ApiService'

const Table_commande = (props:any) => {

    
    const Api = new  ApiContent()

    const update = async (data:any) => {
       
        const credentials = { 'etat':data.etat, 'id_commande':data.id_commande}

        var response = await Api.postData("updateEtatCommande", credentials);
        if (response.status == 200) {
            props.update()
        }
    }
    const deleteCmd = async (id:any) => {
       
        const credentials = { 'id_commande':id}

        var response = await Api.getData("deleteCommande?id_commande"+id);
        if (response.status == 200) {
            props.update()
        }
    }
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Produit</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Qté</th>
                    <th scope="col">Status</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        (props.item) ?
                        props.item.map((e:any) => {
                            let produit = JSON.parse(e.produits)
                            
                            return(
                                <tr>
                                    <th><img className="rounded-circle p-3" width="30%" src={Api.imageUrl+JSON.parse(produit[0].image)[0]} data-holder-rendered="true"/></th>
                                    <th scope="row">{produit[0].titre}</th>
                                    <td>{produit[0].prix}</td>
                                    <td>{produit[0].quantite}</td>
                                    <td>
                                    <div className="btn-group dropleft"> 
                                    <i className="fas fa-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                    {
                                        (props.type && props.type == "admin") ?
                                         (
                                                                          
                                            <div className="dropdown-menu">
                                                <button className="dropdown-item" type="button" style={{display: (e.etat == 1 )? 'none': 'block'}} onClick={() => update({etat:1, id_commande:e.id})}>En Attente</button>
                                                <button className="dropdown-item" type="button" style={{display: (e.etat == 2 )? 'none': 'block'}} onClick={() => update({etat:2, id_commande:e.id})}>En cour</button>
                                                <button className="dropdown-item" type="button" style={{display: (e.etat == 3 ) ? 'none': 'block'}} onClick={() => update({etat:3, id_commande:e.id})}>En route</button>
                                                <button className="dropdown-item" type="button" style={{display: (e.etat == 4) ? 'none': 'block'}} onClick={() => update({etat:4, id_commande:e.id})}>Livré</button>
                                                <button className="dropdown-item" type="button" onClick={() => deleteCmd(e.id)}>Supprimé</button>
                                            </div>
                                         ) : <></>
                                    }
                                     
                                    </div>
                                    
                                    </td> 
                                </tr>
                            )
                        }) : <></>
                    }
                    
                </tbody> 
                </table> 
            
        </div> 
    )  
}


export default Table_commande;