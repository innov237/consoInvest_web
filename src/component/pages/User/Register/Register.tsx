import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../layout/FormInput/TextInput";
import './Register.css';
import { useForm } from "react-hook-form";
import ApiService from "../../../../services/ApiService";

const Register: React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [enableCodeInvitationInput, setCodeInputStatus] = useState(false);
    const Api = new ApiService();


    const handleconnuMode = (e: any) => {

        if (e.target.value === 'proche') {
            setCodeInputStatus(true);
        }
    }

    const onSubmit = async (data: any) => {
        console.log(data);

        var response = await Api.postData("inscription", data);
        if (response.data['success']) {
            console.log("inscription ok");
            alert("inscription ok");
        } else {
            console.log(response.data['message']);
        }
    };



    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container">
                    <form className="form p-5" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Inscription</h2>
                        <p className="form__subtitle">Inscrivez vous gratuitement!</p>

                        <TextInput type="text" name="nom" placeholder="Nom et prenom" required={true} refs={register({ required: true })} />
                        {errors.nom && <span>Nom obligatoire</span>}

                        <TextInput type="email" name="email" placeholder="Email" required={true} refs={register({ required: true })} />
                        <TextInput type="tel" name="telephone" placeholder="+237 téléphone" required={true} refs={register({ required: true })} />
                        <span className="helper">De preference un numero whatsapp</span>

                        <div className="form-group">
                            <select name="ville" className="form-control">
                                <option selected disabled>Ville</option>
                                <option>yaoundé</option>
                                <option>douala</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Comment avez-vous connu consoInvest?</label>
                            <select name="connuMode" className="form-control" ref={register({ required: true })} onChange={handleconnuMode} >
                                <option selected disabled value="null">choisi..</option>
                                <option value="proche">Via un proche</option>
                                <option value="pub">Via une publicité</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        {enableCodeInvitationInput && <TextInput type="text" name="codeInvitation" placeholder="Code invitation" required={true} refs={register({ required: true })}></TextInput>}
                        {errors.codeInvitation && <span>Code Obligatoire</span>}

                        <TextInput type="password" name="password" placeholder="Mot de passe" required={true} refs={register({ required: true })} />
                        <TextInput type="password" name="confirm-password" placeholder="Confirmez votre mot de passe" required={true} refs={register({ required: true })} />

                        <div className="form-group">
                            <input type="submit" className="btn btn-primary w-100 mt-2" value="M'inscrire" />
                        </div>
                        <div className="form-group">
                            <p><Link to="/login"> Accueil j'ai déjà un compte ? Me connecter</Link></p>
                        </div>
                        <h5 className="text-center"> <Link to="/home"> Accueil</Link></h5>
                    </form>
                </div>
            </div>
        </div >
    );

}

/********** */

export default Register;