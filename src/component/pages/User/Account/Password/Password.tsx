import React from "react";
import { useHistory} from "react-router-dom";
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

    const disabled = () => (newPassword.length && oldPassword.length && rePassword.length) ? false : true

    const auth = useSelector((state: any) => state.auth)
    
    const submit = async (e) => {
        e.preventDefault()

        if (newPassword.trim() == rePassword.trim()){

            const credentials ={
                new_password: newPassword.trim(),
                old_password: oldPassword.trim(),
                user_id : auth.user.id
            }

            const response = await Api.postData("api/resetpassword", credentials ,{headers:{'Accept': 'application/json'}});
            if (response.data.success) {
                alert('Opération effectué avec success')
                history.push('/home')
            }else
                alert(response.data.message)

        }else
            alert('Le nouveau mot de passe et le passe de confirmation doivent être identique')
    }
    return (
        <div>
            <p className="text">Modifier le mot de passe</p>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Ancien mot de passe" value={oldPassword} onChange={ e => setOldPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Nouveau mot de passe" value={newPassword} onChange={ e => setNewPassword(e.target.value)}/>

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirmez le nouveau mot de passe" value={rePassword} onChange={ e => setRePassword(e.target.value)}/>
                    </div>
                    <button disabled={disabled()} type="submit" className="btn btn-primary mb-2 w-100" onClick={submit}>Modifier</button>
                </div>
        </div>

    );
}


export default Password;