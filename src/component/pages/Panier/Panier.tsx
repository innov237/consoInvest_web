import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from 'react-redux'

import './Panier.css';



const Panier: React.FC = ({history}: any) => {
    const [state, setState]=useState(false)
    const comand=useSelector((state: any)=>state.comand)
    const dispatch = useDispatch()

    var idDel=new Array()
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
    const addDel=(id: any)=>idDel.push(id)
    const removeDel=(id: any)=>idDel=idDel.filter(data=>data!==id)
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
        console.log("le del ",idDel)
        idDel.map(id=>{
            let action={
                type: 'REMOVE_COMAND_ITEM',
                value: id
            }
            dispatch(action)
        })
        idDel=[]
    }
    const handleCheck=(e: any, id: any)=>{
        e.target.checked ? addDel(id) : removeDel(id) 
        console.log("handle ",idDel)
    }
    // const checkAll=(e: any)=>{
    //     setCheck(e.target.checked)
    //     if(e.target.checked) comand.map(({item}: any)=>idDel.push(item.id))
    //     else idDel=[]
    //     console.log("checkAll : ",idDel)
    // }

    const listItem=comand.length ? (
        comand.map(({item, quantity}: any)=>
        <tr>
            <th scope="row"><input type="checkbox" onClick={e=>handleCheck(e, item.id)}/> </th>
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
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"><input type="checkbox" /></th>
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
                        <hr/>
                        <div className="row">
                            <div className="col-md-4"><button type="button" className="btn btn-warning" onClick={()=>history.push('/')}><i className="fas fa-cart-plus"></i> Continuer les achats</button></div>
                            <div className="col-md-4"><button type="button" className="btn btn-secondary" onClick={()=>setState(!state)}><i className="fas fa-sync-alt"></i> Actualiser le panier</button></div>
                            <div className="col-md-4"> <button type="button" className="btn btn-secondary" onClick={delAll}><i className="fas fa-trash"></i> Tout Supprimer</button></div>
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
                            <button className="btn btn-secondary colorbtncommander"><b>COMMANDER</b></button>
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