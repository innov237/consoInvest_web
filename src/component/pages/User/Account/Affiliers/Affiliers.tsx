import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiService from "../../../../../services/ApiService";
import './Affiliers.css';


const Affiliers: React.FC = () => {

    var Api = new ApiService();
    const [userAffilierData, setuserAffilierData] = useState<any>([]);
    const [isLoad, setLoader] = useState(false);

    
    const auth = useSelector((state:any) => state.auth)

    useEffect(() => {
        getUserAffilier();
    }, [])

    const getUserAffilier = async () => {
        setLoader(true);
        var response = await Api.getData("getUserAffilier?userId=" + auth.user?.id);
        setuserAffilierData(response.data);
        setLoader(false);
    }

    return (
        <div>
            <h5 className="titre">Mes Affiliers</h5>
            { !isLoad && userAffilierData.length > 0 ? userAffilierData.map((result: any) => (
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="media text-muted pt-3">
                        <img className="rounded-circle p-3" width="70" src={Api.baseUrl + "storage/" + result['photo']} data-holder-rendered="true" />
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <strong className="text-gray-dark">Nom: {result['nom']}</strong>
                                <strong className="d-block text-gray-dark">Tel: {result['telephone']}</strong>
                                <strong className="d-block text-gray-dark">Code: {result['code']}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )) : !isLoad && userAffilierData.length == 0 ? <div className="d-flex">
                <div className="card w-100 text-center p-5">Aucun Affilier</div>
            </div> : <div className="card w-100 text-center p-5"> Chargement en cours...</div>}
        </div>

    );

}

/********** */

export default Affiliers;