import React, { useState, useContext, useEffect } from 'react'
import StorageContext from '../../../context/StorageContext'

const Search: React.FC=(props)=>{
    const [text, setText]=useState('')
    const local=useContext(StorageContext)
    var Products=local.getAllProducts().map((data: any)=>({name: data.description, id: data.id}))
    const search=(e: any)=>{
        setText(e.target.value)
        check(e.target.value)
    }
    const check=(text: string)=>{
        var reg=new RegExp('^'+text, 'i');
        var sug=[];
        if(text){
            for (var i=0; i<Products.length; i++){
                if(reg.test(Products[i].name)){
                    var sugestion=document.createElement('div');
                    sugestion=Products[i].name;
                    sug.push(sugestion);
                }
            }
        }
        console.log(sug)
    }

    return (
            <div className="row">
                <div className="col-10 no__padding  search-bar">
                    <input type="text" className='form-control search__input' typeof="search" value={text} onChange={e=>search(e)} />
                    <div className="search-item-container">
                        <div className="seach-item">item</div>
                        <div className="seach-item">item</div>
                        <div className="seach-item">item</div>
                        <div className="seach-item">item</div>
                        <div className="seach-item">item</div>
                    </div>
                </div>
                <div className="col-2 no__padding">
                    <input type="submit" className="form-control Rechercherbtn" value="Rechercher" />
                </div>
            </div>
        )
}

export default Search
