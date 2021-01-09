import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import StorageContext from '../../../context/StorageContext'

const Search: React.FC=(props)=>{
    //const [text, setText]=useState('')
    const history=useHistory()
    const local=useContext(StorageContext)
    var Products=local.getAllProducts()
    const [sug, setSug]=useState(new Array)
    //var sug=new Array()
    const search=(e: any)=>{
        //setText(e.target.value)
        check(e.target.value)
    }
    const check=(text: string)=>{
        var reg=new RegExp('^'+text, 'i');
        var suggestion=new Array()
        if(text){
            for (var i=0; i<Products.length; i++){
                if(reg.test(Products[i].description)){
                    suggestion.push(Products[i])
                    //sug.push(Products[i].name);
                }
            }
        }
        setSug(suggestion)
    }
    const choice=(item: any)=>{
        setSug([])
        history.push('produit', item)
    }
    return (
            <div className="row">
                <div className="col-10 no__padding  search-bar">
                    <input type="text" className='form-control search__input' typeof="search"  onChange={e=>search(e)} />
                    <div className="search-item-container">
                    {
                        sug.map(item=><div className="seach-item" onClick={()=>choice(item)}>{item.description}</div>)
                    }
                    </div>
                </div>
                <div className="col-2 no__padding">
                    <input type="submit" className="form-control Rechercherbtn" value="Rechercher" />
                </div>
            </div>
        )
}

export default Search
