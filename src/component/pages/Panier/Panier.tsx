import React, { useState, useContext } from "react";
import { connect, useSelector, useDispatch } from 'react-redux'

import './Panier.css';
import ApiContext from '../../../context/ApiContext'

var idDel: any=[]

const Panier: React.FC = ({history}: any) => {
    const [state, setState]=useState(false)
    const [check, setCheck]=useState(false)
    const comand=useSelector((state: any)=>state.comand)
    const dispatch = useDispatch()
    const Api=useContext(ApiContext)
    const nbrArt=()=>{
        let nbre=0
        comand.map((data: any)=>nbre=nbre+data.quantity)
        return nbre
    }
    const total=()=>{
        let total=0
        comand.map(({item, quantity}: any)=>total=total+item.prix*quantity)
        return total
    }
    const taxe=0
    const addDel=(id: number)=>idDel.push(id)
    const removeDel=(id: any)=>idDel=idDel.filter((data: any)=>data!==id)
    const delItem=(id: any)=>{
        const action={
            type: 'REMOVE_COMAND_ITEM',
            value: id
        }
        dispatch(action)
        console.log("supprime")
        setState(!state)
    }
    const delAll=()=>{
        console.log("vous avez clique")
        idDel.map((id: any)=>{
            const action={
                type: 'REMOVE_COMAND_ITEM',
                value: id 
            }
            dispatch(action)
        })
        idDel=[]
        setCheck(false)
        console.log(comand)
    }
    const handleCheck=(e: any, id: any)=>{
        e.target.checked ? addDel(id) : removeDel(id) 
        console.log("handle ",idDel)
    }
    const checkAll=(e: any)=>{
        setCheck(e.target.checked)
        if(e.target.checked) comand.map(({item}: any)=>idDel.push(item.id))
        else idDel=[]
        console.log("checkAll : ",idDel)
    }
    const sendComand=()=>{
        let prod=comand.map(({item, quantity}: any)=>{
            let com={
                id: item.id,
                panierId: '0',
                titre: item.titre,
                quantite: quantity,
                descripton: item.description,
                image: item.images
            }

            return com
        })
        let panier={
            produits: prod,
            id_boutique: '0',
            id_user: '0',
            montant_cmd: total()
        }
        console.log(panier)
        Api.postData('enregistrerCommande', panier).then(response=>console.log(response))
    }

    const listItem=comand.length ? (
        comand.map(({item, quantity}: any)=>
        <tr>
            <th scope="row"> { check ? <input type="checkbox" checked={check}/> : <input type="checkbox" onClick={e=>handleCheck(e, item.id)}/>} </th>
            <th><img className="rounded-circle p-3" width="60%" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" data-holder-rendered="true"/></th>
            
            <td>{item.nom}</td>
            <td>{item.description}</td>
            <td><input type="text" value={quantity}/></td>
            <td>{item.prix}FCFA</td>
            <td className="trash" onClick={()=>delItem(item.id)}><i className="fas fa-trash-alt"></i></td>
        </tr>)
    ): ( <tr><td colSpan={7}>vous n'avez encore rien commande</td></tr> )
    return (
        <div>
            <h5>panier</h5>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-md-8">
                        <div className="table-container">
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"><input type="checkbox" checked={check} onClick={e=>checkAll(e)} /></th>
                                <th scope="col">image</th>
                                <th scope="col">Article</th>
                                <th scope="col">description</th>
                                <th scope="col">Qté</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listItem}
                            </tbody>
                            </table>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4 mb-3"><button type="button" className="btn btn-warning" onClick={()=>history.push('/')}><i className="fas fa-cart-plus"></i> Continuer les achats</button></div>
                            <div className="col-md-4 mb-3"><button type="button" className="btn btn-secondary" onClick={()=>setState(!state)}><i className="fas fa-sync-alt"></i> Actualiser le panier</button></div>
                            <div className="col-md-4 mb-3"> <button type="button" className="btn btn-secondary" onClick={delAll}><i className="fas fa-trash"></i> Tout Supprimer</button></div>
                        </div>
                    </div>
                    <div className="col-md-3 resume">
                        <h4>RESUME</h4>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Nombre D'articles
                                <span className="badge badge-primary badge-pill"> {nbrArt()} </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Montant total
                                <span className="badge badge-primary badge-pill"> {total()} Fcfa </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Taxe
                                <span className="badge badge-primary badge-pill"> 0 Fcfa </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total de la commande
                                <span className="badge badge-primary badge-pill"> {total()-taxe} Fcfa </span>
                            </li>
                            <button className="btn btn-secondary colorbtncommander" onClick={sendComand}><b>COMMANDER</b></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps=(state: any)=>({
    comand: state.comand,
})

export default connect(mapStateToProps)(Panier);