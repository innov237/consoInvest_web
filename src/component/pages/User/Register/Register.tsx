import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../../../layout/FormInput/TextInput";
import './Register.css';
import { useForm } from "react-hook-form";
import ApiService from "../../../../services/ApiService";

const Register: React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [enableCodeInvitationInput, setCodeInputStatus] = useState(false);
    const Api = new ApiService();
    const history = useHistory();
    const [isLoad, setisLoad] = useState(false);


    const handleconnuMode = (e: any) => {

        if (e.target.value === 'proche') {
            setCodeInputStatus(true);
        } else {
            setCodeInputStatus(false);
        }
    }

    const onSubmit = async (data: any) => {
        setisLoad(true);
        var response = await Api.postData("inscription", data);
        if (response.data['success']) {
            history.push('/login')
        } else {
            setisLoad(false);
            alert(response.data['message']);

        }
    };



    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container-fuild">
                    <form className="form p-2" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Inscription</h2>
                        <p className="form__subtitle">Inscrivez vous gratuitement!</p>

                        <TextInput type="text" name="nom" placeholder="Nom" refs={register({ required: true })} />
                        {errors.nom && <span>Nom obligatoire</span>}

                        <TextInput type="text" name="prenom" placeholder="Prenom" refs={register({ required: true })} />
                        {errors.prenom && <span>Prenom obligatoire</span>}

                        <TextInput type="email" name="email" placeholder="Email" refs={register({ required: true })} />
                        <TextInput type="tel" name="telephone" placeholder="+237 téléphone" refs={register({ required: true })} />
                        <div className="form-group">
                            <label>Ville?</label>
                            <select name="ville" className="form-control"  ref={register({ required: true })}>
                                <option selected disabled value="null">choisi..</option>
                                <option value="yaoundé">yaoundé</option>
                                <option value="douala">douala</option>
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
                            {!isLoad && <input type="submit" className="btn btn-primary w-100 mt-2" value="M'inscrire" />}
                            {isLoad && <input type="submit" className="btn btn-primary w-100 mt-2" value="En cours..." />}
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