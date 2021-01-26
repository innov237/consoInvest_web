import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Profil.css';


const Profil: React.FC = () => {



    return (
        <div>
            <h5 className="titre">Profil</h5>
        <div className="my-3 p-3 bg-white rounded shadow-sm">
            <div className="row">
                <div className="col-md-4">
                    <div className="media text-muted pt-3">
                        <img className="rounded-circle p-3" width="100%" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/>
                    </div>
                </div>
                <div className="col-md-8">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="nom et premon" />
                        </div>
                        <div className="form-group">
                            <input type="mail" className="form-control" placeholder="..."/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="..."/>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option selected disabled>ville..</option>
                                <option>yaoundé</option>
                            </select>
                        </div>
                    <button type="submit" className="btn btn-primary w-100">Modifier</button>
                </div>
            </div> 
        </div>
        </div>

    );

}

/********** */

export default Profil;