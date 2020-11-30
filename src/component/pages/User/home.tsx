import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Home.css';

import Sidebar from '../../layout/Sidebar/UserSideBar';

const Home: React.FC = () => {



    return (
        <div>
            <nav className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow">
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-cog fa-spin"></i>
                </button>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 no-padding left__menu">
                        <Sidebar />
                    </div>
                    <div className="col-md-8 p-3">
                        <Switch>
                            <Route path="/account/user">
                                <Sidebar />
                            </Route>
                        </Switch>
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
                                <button type="submit" className="btn btn-primary">Modifier</button>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="col-md-2  p-3">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <p>informations de l'utilisateurs</p>
                    </div>
                </div>
                </div>

                /*statistiques des commandes de l'utilisateur*/
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

                /**statistiques des affiliers */ */
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                <div className="media text-muted pt-3">
                    <img className="rounded-circle p-3" width="70" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">nom complet</strong>
                        <strong className="d-block text-gray-dark">contact</strong>
                        <a href="#">voir +</a>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
                /**modifier le mot de passe */ */
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="compte" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Entrer le mot de passe actuel" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Entrer le nouveau mot de passe" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Changez</button>
                </div>


            </div>
        </div>

    );

}

/********** */

export default Home;