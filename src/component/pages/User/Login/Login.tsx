import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../../../layout/FormInput/TextInput";
import './Login.css';
import { useForm } from "react-hook-form";
import ApiService from "../../../../services/ApiService";

import { useDispatch } from 'react-redux'

import { LOGIN_ACTION, SHOP_ACTION } from '../../../../store/authReducers'

const Login: React.FC = () => {

    const history = useHistory();
    const Api = new ApiService();

    const dispatch = useDispatch()

    const { register, handleSubmit, watch, errors } = useForm();
    const [error, setError] = React.useState('');
    const [isLoad, setisLoad] = useState(false);


    const getShop = async (id: any) => {
        var response = await Api.getData("getUserShop?id_user=" + id);
        if (response.data.length)
            dispatch(SHOP_ACTION(response.data[0]))

        history.push("/account");
    }
    
    const onSubmit = async (data: any) => {
        setisLoad(true);
        setError('')
        var response = await Api.postData("login", data);
        console.log(response.data);

        if (response.data['success']) {
            // dispatch(LOGIN_ACTION(response.data['data'].id))
            dispatch(LOGIN_ACTION(response.data['data']));
            localStorage.setItem("authConsoInvest", JSON.stringify(response.data['data']));
            localStorage.setItem("oba", JSON.stringify(response.data['data'].id));
            getShop(response.data['data'].id)
            //
        } else {
            setisLoad(false);
            setError(response.data['message'])
            console.log(response.data['message']);
        }
    };


    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container">
                    <form className="form p-2" onSubmit={handleSubmit(onSubmit)} >
                        <h2>Connexion</h2>
                        <p className="form__subtitle">Bon retour sur ConsoInvest</p>

                        <TextInput type="email" name="email" placeholder="Email" required={true} refs={register({ required: true })} />
                        <TextInput type="password" name="password" placeholder="Mot de passe" required={true} refs={register({ required: true })} />

                        <div className="form-group">
                           {!isLoad &&  <input type="submit" className="btn btn-primary w-100" value="Me connecter" /> }
                           {isLoad &&  <input type="submit" className="btn btn-primary w-100" value="En cours..." /> }
                        </div>
                        <div className="form-group">
                            <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>{error}</p>
                        </div>

                        <div className="form-group">
                            <p><Link to="/register"> J'ai déjà un compte ? M'inscrire</Link></p>
                        </div>
                        <h5 className="text-center"> <Link to="/home"> Accueil</Link></h5>
                    </form>
                </div>
            </div>
        </div >
    );

}

export default Login;