import React from 'react'

import { useHistory, useLocation } from "react-router-dom";

import { useSelector } from 'react-redux'


const DataWrapper = (Component:any, authorize:boolean = false) => {

	const history = useHistory()
	const location = useLocation()
	

	const auth = useSelector((state:any) => state.auth)
		
	const wrapper = () => {
		return ( <>
			{ 	
				(auth.init) ? 
					(authorize) ? 
						(auth.isAuth) ? 
							(location.pathname == '/new/shop' && auth.shop) ? history.push('/home') : <Component /> 
							: history.push('/home')  
					:   <Component />
				: <></>
			}
			

		</>)
	}

	return wrapper;
}

export default DataWrapper;