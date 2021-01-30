import React, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
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

    const [ville, setVille] = useState<any>();
    const [livraison, setLiv] = useState<any>();

    const auth = useSelector((state:any) => state.auth)

    const history = useHistory();

    const Api = new ApiService();


    const handleconnuMode = (e: any) => {

        if (e.target.value === 'proche') {
            setCodeInputStatus(true);
        }else{
            setCodeInputStatus(false); 
        }
    }

    const onSubmit = async (data: any) => {
        
        

        const credentials = {
            'id_user':auth.user.id,
            'nom_boutique':data.nom,
            'presentation_boutique':data.presentation,
            'ville_boutique':ville,
            'lieu_boutique':data.lieu,
            'telephone_boutique':data.phone,
            'livraison': livraison,
            'categorie_boutique':data.categorie,
            'logo_boutique':logo[0].name,
            'baniere_boutique':banniere[0].name
        }

        

       var response = await Api.postData(`creerBoutique`, credentials);
        if (response.status == 200) {
            alert('Operation efféctuée avec sucess')
            await Api.uploadFile(logo[0]);
            await Api.uploadFile(banniere[0]);
            history.push('home')
        }else{
            alert('Erreur survenue lors du traitement de la requête: Contactez l\'admin')
       
        } 
    };


    const onFileChangeLogo = (e:any) => {
        setLogo( e.target.files)
    }

    const onFileChange = (e:any) => {
        setBanniere( e.target.files)
    }

    const disabled =  () => (!logo || !banniere || !ville || !livraison) ? true : false


    return (
        <div>
            <div className="card container-fluid d-flex justify-content-center align-items-center mt-2">
                <div className="container">
                    <form className="form p-5" onSubmit={handleSubmit(onSubmit)}>
                        
                        <p className="form__subtitle">Créer votre boutique</p>

                        <TextInput type="text" name="nom" placeholder="Nom de la boutique" required={true}  refs={register({ required: true })} />
                        {errors.nom && <span>Nom obligatoire</span>}

                        <TextInput type="text" name="presentation" placeholder="Présentation" required={true}  refs={register({ required: true })} />
                        
                        <div className="form-group">
                            <select name="ville" className="form-control" onChange={(e) => setVille(e.target.value) } required={true}  ref={register({ required: true })} >
                                <option selected disabled>Ville</option>
                                <option value="yaoundé">yaoundé</option>
                                <option value="douala">douala</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="Livraison" className="form-control" onChange={(e) => setLiv(e.target.value) } required={true}  ref={register({ required: true })} >
                                <option selected disabled>Livraison</option>
                                <option value="oui">oui</option>
                                <option value="non">nom</option>
                            </select>
                        </div>

                        <TextInput type="text" name="categorie" placeholder="Catégorie" required={true}  refs={register({ required: true })} />

                        
                        <TextInput type="text" name="lieu" placeholder="Lieu" required={true}  refs={register({ required: true })} />
                        <TextInput type="text" name="phone" placeholder="Téléphone" required={true}  refs={register({ required: true })} />

                        <div className="form-group">
                            <label>Logo:  </label>
                            <input type="file" name="logo" onChange={onFileChangeLogo}  />
                        </div>

                        <div className="form-group">
                            <label>Bannière:  </label>
                            <input type="file" name="banniere" onChange={onFileChange}  />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-primary w-100 mt-2" value="M'inscrire" disabled={disabled()}/>
                        </div>
                        <div className="form-group">
                            <h5 className="text-center"> <Link to="/home"> Accueil</Link></h5>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div >
    );

}

/********** */

export default Register;