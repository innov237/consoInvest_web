import React, { useState, useContext, useEffect } from 'react'
import StorageContext from '../../../context/StorageContext'

const Search: React.FC=(props)=>{
    const [text, setText]=useState('')
    const local=useContext(StorageContext)
    useEffect(() => {
        const Products=local.getAllProducts().map((data: any)=>({name: data.description, id: data.id}))
        console.log(Products)
    }, [])
    const search=(e: any)=>{
        setText(e.target.value)
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
