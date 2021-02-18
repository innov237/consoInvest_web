import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './Epagne.css';

import {useSelector} from 'react-redux'
import ApiContext from '../../../../../context/ApiContext'

const Epagne: React.FC = () => {


    React.useEffect(() => {
        getUserEpargne();
    },[])

    const [data, setData] = React.useState({userEpagne:0 , message: ''});

    const auth = useSelector((state:any) => state.auth)

    const Api: any = React.useContext(ApiContext);
    
    const getUserEpargne = async () => {
        
        var response = await Api.getData("getUserEpargne?id_user="+auth.user.id);
        if (response.status == 200) {
            setData(response.data);
            
        }
    }

    

    return (
        <div>
            <h5 className="titre">Mon epagne</h5>
        <div className="my-3 p-3 bg-white rounded shadow-sm d-flex justify-content-center">
            <div className="row ">
                <div className="col-md-4">
                    <div className="media text-muted pt-3">
                        <span className="numberCircle"><span>{data.userEpagne} FCFA</span></span>
                    </div>
                </div>
                <div className="col-md-8">
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <p className="card-text">{data.message}</p>
                </div>
            </div> 
        </div>
        </div>

    );

}

/********** */

export default Epagne; 