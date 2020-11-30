import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Home.css';
import Sidebar from '../../../../layout/Sidebar/UserSideBar';

import Commande from '../Commande/Commande';
import Affiliers from '../Affiliers/Affiliers';
import Password from '../Password/Password';
import Profil from '../Profil/Profil';
import Boutique from '../Boutique/Boutique';
import Epagne from '../Epagne/Epagne';



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
                            <Route path="/account">
                                <Profil />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/user">
                            <Sidebar />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/commande">
                                <Commande />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/affiliers">
                                <Affiliers />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/password">
                                <Password />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/boutique">
                                <Boutique />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/account/epagne">
                                <Epagne />
                            </Route>
                        </Switch>
                        
                </div>

                <div className="col-md-2  p-3">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <p>informations de l'utilisateurs</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );

}

/********** */

export default Home;