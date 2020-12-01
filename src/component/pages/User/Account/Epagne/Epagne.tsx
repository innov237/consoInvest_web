import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Epagne.css';


const Epagne: React.FC = () => {



    return (
        <div>
            <h1>Mon epagne</h1>
        <div className="my-3 p-3 bg-white rounded shadow-sm">
            <div className="row">
                <div className="col-md-4">
                    <div className="media text-muted pt-3">
                        <span className="numberCircle"><span>543 FCFA</span></span>
                    </div>
                </div>
                <div className="col-md-8">
                    <h5 className="card-title">title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">sous titre</h6>
                    <p className="card-text">text</p>
                </div>
            </div> 
        </div>
        </div>

    );

}

/********** */

export default Epagne;