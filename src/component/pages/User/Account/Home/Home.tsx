import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Home.css';
import Sidebar from '../../../../layout/Sidebar/UserSideBar';

import Commande from '../Commande/Commande';
import Affiliers from '../Affiliers/Affiliers';
import Password from '../Password/Password';
import Profil from '../Profil/Profil';
import Boutique from '../Boutique/Boutique';
import Epagne from '../Epagne/Epagne';

import {
    useSelector
} from 'react-redux'

const Home: React.FC = () => {

    const show = useSelector(state => state.auth?.show);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 no-padding left__menu" style={{ display: (show) ? 'block' : 'none' }}>
                        <Sidebar />
                    </div>
                    <div className="col-md-8 p-3">
                        <Switch>
                            <Route path="/account" exact>
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