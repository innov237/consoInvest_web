import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import ApiService from "../../../../../services/ApiService";
import './Profil.css';


const Profil: React.FC = () => {

    const [userData, setuserData] = useState<any>();
    var Api = new ApiService();
    useEffect(() => {
        setuserData(JSON.parse(localStorage.getItem('authConsoInvest')));
    }, []);

    return (
        <div>
            {userData &&
                <div>
                    <h5 className="titre">Mon profil</h5>
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="media text-muted pt-3">
                                    <img className="rounded-circle p-3" width="100%" src={Api.baseUrl + "storage/" + userData.photo} data-holder-rendered="true" />
                                </div>
                                <p className="userCode">Code: {userData?.code}</p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={userData?.nom + ' ' + userData?.prenom} disabled />
                                </div>
                                <div className="form-group">
                                    <input type="mail" className="form-control" placeholder={userData?.email} disabled />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={userData?.telephone} disabled />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={userData?.ville} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>

    );

}

/********** */

export default Profil;