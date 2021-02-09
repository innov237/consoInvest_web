import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./UserSideBar.css";

import {
    useDispatch
} from 'react-redux';

import {
    LOGOUT_ACTION, TOGGLE_ACTION
} from '../../../store/authReducers'

const Sidebar: React.FC = () => {

    const history = useHistory()

    const dispatch = useDispatch();

    const logOut = () => {


        dispatch(LOGOUT_ACTION())
        history.push('/home')
    }
    return (
        <div>
            <div className="menu__title menu">Informations</div>
            <ul className="nav flex-column">
                <Link to="/account" onClick={() =>dispatch(TOGGLE_ACTION())}>
                    <li className="nav-item">
                        <a className="nav-link">
                            <span data-feather="home"></span>
                            <i className="fas fa-users"></i> Profil <span className="sr-only">(current)</span>
                        </a>
                    </li>
                </Link>
                <Link to="/account/commande" onClick={() =>dispatch(TOGGLE_ACTION())}>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    <i className="fas fa-cart-arrow-down"></i> Mes commandes
                </a>
                </li>
                </Link>
                <Link to="/account/affiliers" onClick={() =>dispatch(TOGGLE_ACTION())}>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    <i className="fas fa-street-view"></i> Mes affiliers
                </a>
                </li>
                </Link>
                <Link to="/account/boutique" onClick={() =>dispatch(TOGGLE_ACTION())}>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span data-feather="users"></span>
                        <i className="fas fa-shopping-basket"></i> Ma boutique
                    </a>
                    </li>
                </Link>
                <Link to="/account/epagne" onClick={() =>dispatch(TOGGLE_ACTION())}>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2"></span>
                            <i className="fas fa-user"></i> Epagnes
                        </a>
                    </li>
                </Link>
                <Link to="/account/password" onClick={() =>dispatch(TOGGLE_ACTION())}>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        <i className="fas fa-key"></i> Modifier le mot de passe
                    </a>
                    </li>
                </Link>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={logOut}>
                    <span data-feather="layers"></span>
                    <i className="fas fa-sign-out-alt"></i> Se deconnecter
                </a>
                </li>
            </ul> 
        </div>
    )
}

export default Sidebar;