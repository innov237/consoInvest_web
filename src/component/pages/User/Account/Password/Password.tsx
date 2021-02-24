import React from "react";
import { useHistory } from "react-router-dom";
import './Password.css';

import {
    useSelector
} from 'react-redux'

import ApiContext from '../../../../../context/ApiContext'

const Password: React.FC = () => {

    const history = useHistory()
    const Api: any = React.useContext(ApiContext);

    const [newPassword, setNewPassword] = React.useState('')
    const [oldPassword, setOldPassword] = React.useState('')
    const [rePassword, setRePassword] = React.useState('')
    const [isLoad, setIsLoad] = React.useState<boolean>(false)

    const disabled = () => (newPassword.length && oldPassword.length && rePassword.length) ? false : true

    const auth = useSelector((state: any) => state.auth)

    const submit = async (e: any) => {
        e.preventDefault()

        if (newPassword.trim() == rePassword.trim()) {

            setIsLoad(true);

            const credentials = {
                new_password: newPassword.trim(),
                old_password: oldPassword.trim(),
                user_id: auth.user.id
            }

            const response = await Api.postData("api/resetpassword", credentials, { headers: { 'Accept': 'application/json' } });
            if (response.data.success) {
                alert('Votre mot de passe à été modifié avec succès')
                history.push('/home')
            } else {

                setIsLoad(false);
                alert(response.data.message);
            }

        } else {
            setIsLoad(false);
            alert('les mots de passe (nouveau et confirmez) doivent être identique');
        }
    }
    return (
        <div>
            <p className="text">Modifier le mot de passe</p>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Ancien mot de passe" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Nouveau mot de passe" value={newPassword} onChange={e => setNewPassword(e.target.value)} />

                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirmez le nouveau mot de passe" value={rePassword} onChange={e => setRePassword(e.target.value)} />
                </div>
              {!isLoad &&  <button disabled={disabled()} type="submit" className="btn btn-primary mb-2 w-100" onClick={submit}>Modifier</button>} 
              {isLoad &&  <button disabled={disabled()} type="submit" className="btn btn-primary mb-2 w-100" >En cours...</button>} 
            </div>
        </div>

    );
}


export default Password;