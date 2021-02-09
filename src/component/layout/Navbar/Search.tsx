import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ApiContext from '../../../context/ApiContext'

import {useDispatch} from 'react-redux';


import queryString from 'query-string';

import {
    ADD_KEY
} from '../../../store/searchReducers'

const Search: React.FC=(props)=>{
    const Api: any = useContext(ApiContext);
    const history=useHistory()
    
    const [sug, setSug]=useState(new Array)
    const [key, setKey]=useState('')
    
    const dispatch = useDispatch();
    
    const process= async (parsed:any)=>{
       

        if (parsed){
            var response = await Api.getData(`rechercherPublication?key=${parsed}&lastInsertId=5`);
            if (response.status == 200){

                if ( response.data.length){
                    dispatch(ADD_KEY({data:response.data, key:parsed}))
                }else{
                    alert(`No data found for ${parsed}`);
                    history.push('/home');
                };
            }

        }else
          history.push('/home');
        
    }

    const search= async ()=>{
        
        if(history.location.pathname === '/search'){
            process(key)
        
        }else
            history.push({
                pathname: '/search',
                search: '?params='+key
            })
           
    }
    
    const choice=(item: any)=>{
        setSug([])
        history.push('home', {data:item})
    }
    return (
            <div className="row container-fluid">
                <div className="col-10 no__padding  search-bar">
                    <input type="text" className='form-control search__input' typeof="search"  onChange={e=> setKey(e.target.value)} />
                    <div className="search-item-container">
                    {
                        sug.map(item=><div className="seach-item" onClick={()=>choice(item)}>{item.description}</div>)
                    }
                    </div>
                </div>
                <div className="col-2 no__padding">
                    <input type="submit" className="form-control Rechercherbtn" value="Rechercher"  onClick={() => search()}/>
                </div>
            </div>
        )
}

export default Search
