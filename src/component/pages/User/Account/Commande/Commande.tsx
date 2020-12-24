import React, { useEffect, useState } from "react";
import './Commande.css';
import ProductCard from "../../../../layout/Table_commande_user/Table_commande";
import ApiService from "../../../../../services/ApiService";

const Commande: React.FC = () => {

    const [userCommande, setCommande] = useState<any>([]);

    const Api = new ApiService();

    useEffect(() => {
        getCommande();
    }, userCommande);

    const getCommande = async () => {
        var response = await Api.getData("getCommandeUtilisateur?id_user=" + 1);
        console.log(response.data);
        setCommande(response.data);
    }

    const toArray = (data: any) => {
        var array = JSON.parse(data);
        return array;
    }


    return (
        <div>
            <h5 className="titre">Commande(s) client</h5>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
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
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        {userCommande.map((result: any) => (
                            <div>
                                {toArray(result['produits']).map((result: any) => (
                                    <ProductCard produit={result['titre']} quantite={result['quantite']} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );

}

/********** */

export default Commande;