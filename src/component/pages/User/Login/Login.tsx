import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../layout/FormInput/TextInput";
import './Login.css';
import { useForm } from "react-hook-form";

const Login: React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);


    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container">
                    <form className="form p-5" onSubmit={handleSubmit(onSubmit)} >
                        <h2>Connexion</h2>
                        <p className="form__subtitle">Bon retour sur ConsoInvest</p>

                        <TextInput type="email" name="email" placeholder="Email" required={true} refs={register({ required: true })} />
                        <TextInput type="password" name="password" placeholder="Mot de passe" required={true} refs={register({ required: true })} />

                        <div className="form-group">
                            <input type="submit" className="btn btn-primary w-100" value="Me connecter" />
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

/********** */

export default Login;