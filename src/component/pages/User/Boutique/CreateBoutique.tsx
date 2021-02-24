import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../../../layout/FormInput/TextInput";
import './Boutique.css';
import { useForm } from "react-hook-form";
import ApiService from "../../../../services/ApiService";

import {
    useSelector
} from 'react-redux'



const Register: React.FC = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [enableCodeInvitationInput, setCodeInputStatus] = useState(false);

    const [logo, setLogo] = useState<any>();
    const [banniere, setBanniere] = useState<any>();
    const [isLoad, setisLoad] = useState(false);

    const [ville, setVille] = useState<any>();
    const [livraison, setLiv] = useState<any>();

    const [categorie, setCase] = useState(0);
    const [categorieData, setCategorie] = useState([]);

    const auth = useSelector((state: any) => state.auth)

    const history = useHistory();

    const Api = new ApiService();


    const getCategorie = async () => {

        var response = await Api.getData("getcategorie");
        if (response.status == 200) {
            setCategorie(response.data);

        }
    }


    const handleconnuMode = (e: any) => {

        if (e.target.value === 'proche') {
            setCodeInputStatus(true);
        } else {
            setCodeInputStatus(false);
        }
    }



    const onSubmit = async (data: any) => {



        const credentials = {
            'id_user': auth.user?.id,
            'nom_boutique': data.nom,
            'presentation_boutique': data.presentation,
            'ville_boutique': ville,
            'lieu_boutique': data.lieu,
            'telephone_boutique': data.phone,
            'livraison': livraison,
            'categorie_boutique': `[${categorie}]`,
            'logo_boutique': logo[0].name,
            'baniere_boutique': banniere[0].name
        }

        setisLoad(true);

        var response = await Api.postData(`creerBoutique`, credentials);

        if (response.data.success) {
            await Api.uploadFile(logo[0]);
            await Api.uploadFile(banniere[0]);
            alert("Votre demande à été envoyée avec succès");
            history.push('/account')
        } else {
            setisLoad(false);
            alert(response.data.message)

        }
    };


    const onFileChangeLogo = (e: any) => {
        setLogo(e.target.files)
    }

    const onFileChange = (e: any) => {
        setBanniere(e.target.files)
    }

    const disabled = () => (!logo || !banniere || !ville || !livraison) ? true : false

    React.useEffect(() => {
        getCategorie();

    }, []);

    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container">
                    <form className="form p-5" onSubmit={handleSubmit(onSubmit)}>

                        <p className="form__subtitle">Créer votre boutique</p>

                        <TextInput type="text" name="nom" placeholder="Nom de la boutique" required={true} refs={register({ required: true })} />
                        {errors.nom && <span>Nom obligatoire</span>}

                        <TextInput type="text" name="presentation" placeholder="Présentation" required={true} refs={register({ required: true })} />

                        <div className="form-group">
                            <select name="ville" className="form-control" onChange={(e) => setVille(e.target.value)} required={true} ref={register({ required: true })} >
                                <option selected disabled>Ville</option>
                                <option value="yaoundé">yaoundé</option>
                                <option value="douala">douala</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="Livraison" className="form-control" onChange={(e) => setLiv(e.target.value)} required={true} ref={register({ required: true })} >
                                <option selected disabled>Livraison</option>
                                <option value="oui">oui</option>
                                <option value="non">non</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Sélectionnez vos catégories:  </label>
                            <select className="form-control w-100" onChange={(e: any) => { let value = Array.from(e.target.selectedOptions).map((option:any) => option.value); setCase(value) }} multiple>

                                {
                                    categorieData.map((item, index) => (<option value={item['libelle_categorie']} key={index}>{item['libelle_categorie']}</option>))
                                }
                            </select>
                        </div>


                        <TextInput type="text" name="lieu" placeholder="Où est située votre boutique" required={true} refs={register({ required: true })} />
                        <TextInput type="text" name="phone" placeholder="Téléphone" required={true} refs={register({ required: true })} />

                        <div className="form-group">
                            <label>Logo:  </label>
                            <input type="file" name="logo" onChange={onFileChangeLogo} />
                        </div>

                        <div className="form-group">
                            <label>Bannière:  </label>
                            <input type="file" name="banniere" onChange={onFileChange} />
                        </div>

                        <div className="form-group">
                            {!isLoad && <input type="submit" className="btn btn-primary w-100 mt-2" value="Envoyer ma demande " disabled={disabled()} />}
                            {isLoad && <input type="submit" className="btn btn-primary w-100 mt-2" value="en cours... " disabled={disabled()} />}
                        </div>

                    </form>
                </div>
            </div>
        </div >
    );

}

export default Register;