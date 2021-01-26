import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Commande.css';
import ProductCard from "../../../../layout/Table_commande_user/Table_commande";

import ApiContext from '../../../../../context/ApiContext'

import {useSelector} from 'react-redux'

const Commande: React.FC = () => {

    
    const Api: any = React.useContext(ApiContext);
    const [data, setData] = React.useState([]);

    const auth = useSelector((state:any) => state.auth)

    const getCommands = async (etat:any = 1) => {
        setData([])
        
        var response = await Api.getData(`getCommandeUtilisateur?id_boutique=${auth.shop.id}&lastInsertId=10&etat=${etat}`);
        if (response.status == 200) {
            setData(response.data);
            
        }
    }

    return (
        <div>
            <h5 className="titre">Commande(s) client</h5>

            <div className="my-3 p-3 bg-white rounded shadow-sm">

                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => getCommands(1)}>Tout</a>
                        <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => getCommands(1)}>En attente</a>
                        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getCommands(2)}>En cour</a>
                        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact1" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getCommands(3)}>En route</a>
                        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact2" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getCommands(4)}>Livré</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> {
                                    (data.length) ?
                                       (<ProductCard  item={data}/>)
                                    : <></>
                                }</div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> {
                                    (data.length) ?
                                       (<ProductCard  item={data}/>)
                                    : <></>
                                }</div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> {
                                    (data.length) ?
                                       (<ProductCard  item={data}/>)
                                    : <></>
                                }</div>
                    <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab"> {
                                    (data.length) ?
                                       (<ProductCard  item={data}/>)
                                    : <></>
                                }</div>
                    <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab"> {
                                    (data.length) ?
                                       (<ProductCard  item={data}/>)
                                    : <></>
                                }</div>
                </div>

            </div>
        </div>

    );

}

/********** */

export default Commande;