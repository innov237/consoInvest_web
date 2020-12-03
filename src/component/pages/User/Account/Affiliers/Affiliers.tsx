import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Affiliers.css';


const Affiliers: React.FC = () => {



    return (
        <div>
            <h5 className="titre">Affiliers de ma boutique</h5>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <div className="media text-muted pt-3">
                    <img className="rounded-circle p-3" width="70" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">nom complet</strong>
                        <strong className="d-block text-gray-dark">contact</strong>
                        <a href="#">voir +</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>

    );

}

/********** */

export default Affiliers;