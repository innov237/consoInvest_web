import React from 'react'

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import { INIT_ACTION, SHOP_ACTION, LOGIN_ACTION, PROCESS_ACTION} from '../store/authReducers'


import ApiService from "../services/ApiService";

const DataWrapper = (Component:any, authorize:boolean = false) => {

	const history = useHistory()
	const dispatch = useDispatch()
	const Api = new ApiService();

	const auth = useSelector((state:any) => state.auth)

	const getShop = async (data:any) => {
		const user = JSON.parse(data);
        var response = await Api.getData("getUserShop?id_user="+user.id);
        if (response.data.length)
        	dispatch(LOGIN_ACTION(user))
            dispatch(SHOP_ACTION(response.data[0]))
        	//dispatch(INIT_ACTION())
            
    }

    const onProcess = () => dispatch(PROCESS_ACTION())

    const init = () => {

    	if (!auth.init){
				const uuid = localStorage.getItem("authConsoInvest")

			if (uuid){

				getShop(uuid)
			}else{
				dispatch(INIT_ACTION())
			}
	            
		}
    }

		
	const wrapper = () => {

		if(!auth.process){
			onProcess()
			init()
		}
		
		

		return ( <>
			{ 	
				(auth.init) ? 
					(authorize) ? 
						(!auth.shop) ? 
							history.push('/home') 
							: <Component />  
					:   <Component />
				: <></>
			}
			

		</>)
	}

	return wrapper;
}

export default DataWrapper;