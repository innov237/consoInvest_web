import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Password.css';


const Password: React.FC = () => {
    return (
        <div>
            <p className="text">Modifier le mot de passe</p>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Ancient mot de passe" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Nouveau mot de passe" />

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirmez le nouveau mot de passe" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 w-100">Modifier</button>
                </div>
        </div>

    );
}

/********** */

export default Password;