import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Password.css';


const Password: React.FC = () => {
    return (
        <div>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="compte" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Entrer le mot de passe actuel" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Entrer le nouveau mot de passe" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Changez</button>
                </div>
        </div>

    );
}

/********** */

export default Password;