import React, { useState,useEffect } from "react";
import { connect, useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import './Panier.css';
import ApiService from '../../../services/ApiService'

var idDel: any = []

const Panier: React.FC = ({ history }: any) => {
    const [state, setState] = useState(false)
    const [check, setCheck] = useState(false)
    const comand = useSelector((state: any) => state.comand)
    const auth = useSelector((state: any) => state.auth.user)
    const dispatch = useDispatch()
    const Api = new ApiService();

    const nav = useHistory()

    console.log(comand)

    const getBoutique: any = () => {

        const bt = Array.from(new Set(comand.cmds.map((i: any) => i.item.id_boutique)))

        const all: any = bt.map((i: any) => {
            return {
                produits: [],
                id_boutique: i,
                id_user: auth.id,
                montant_cmd: 0
            }
        })

        return all

    }

    const nbrArt = () => {
        let nbre = 0
        comand.cmds.map((data: any) => nbre = nbre + data.quantity)
        return nbre
    }
    const total = () => {
        let total = 0
        comand.cmds.map(({ item, quantity }: any) => total = total + item.prix * quantity)
        return total
    }

    const taxe = 0
    const addDel = (id: number) => idDel.push(id)
    const removeDel = (id: any) => idDel = idDel.filter((data: any) => data !== id)
    const delItem = (id: any) => {
        const action = {
            type: 'REMOVE_COMAND_ITEM',
            value: id
        }
        dispatch(action)
        setState(!state)
    }
    const delAll = () => {
        idDel.map((id: any) => {
            const action = {
                type: 'REMOVE_COMAND_ITEM',
                value: id
            }
            dispatch(action)
        })
        idDel = []
        setCheck(false)
    }
    const handleCheck = (e: any, id: any) => {
        e.target.checked ? addDel(id) : removeDel(id)

    }
    const checkAll = (e: any) => {
        setCheck(e.target.checked)
        if (e.target.checked) comand.cmds.map(({ item }: any) => idDel.push(item.id))
        else idDel = []
    }
    const updateQte = (e: any, item: any) => {
        let qte = e

        if (!e) qte = 1
        dispatch({
            type: 'UPDATE_QTE',
            payload: {
                qte,
                item,
            }
        })

    }
    const sendComand = () => {
        const current = getBoutique()



        const save = comand.cmds.map(({ item, quantity }: any) => {
            let find = undefined
            let com = {
                id: item.id_publication,
                panierId: '0',
                titre: item.titre,
                prix: item.prix,
                quantite: quantity,
                descripton: item.description,
                image: item.images,
                id_boutique: item.id_boutique
            }

            for (var i = 0; i < current.length; i++) {
                if (item.id_boutique == current[i].id_boutique) {
                    find = i;
                    break;
                }
            }


            if (find != undefined) {
                current[find].produits = [...current[find].produits, com]
                current[find].montant_cmd = current[find].montant_cmd + item.prix * quantity

            }
        })


        current.map((e: any) => Api.postData('enregistrerCommande', e))

        alert('Commande effectuée')
        dispatch({ type: 'RESET' })
    }

    const toggle = () => (comand.cmds.length && auth && auth?.id) ? false : true;

    const listItem = comand.cmds.length ? (
        comand.cmds.map(({ item, quantity }: any,) =>
            <tr>
                <th scope="row"> {check ? <input type="checkbox" checked={check} /> : <input type="checkbox" onClick={e => handleCheck(e, item.id)} />} </th>
                <th><img className="" width="60%" src={Api.imageUrl + JSON.parse(item.images)[0]} data-holder-rendered="true" /></th>

                <td>{item.nom}</td>
                <td>{item.description}</td>
                <td><input type="number" value={quantity} onChange={(e) => updateQte(e.target.value, item)} /></td>
                <td>{item.prix}FCFA</td>
                <td className="trash" onClick={() => delItem(item.id)}><i className="fas fa-trash-alt"></i></td>
            </tr>)
    ) : (<tr><td colSpan={7}>Aucun produit dans le panier</td></tr>)
    return (
        <div>
            <div className="container bg-white mt-2">
                <h5 className="titre mb-5 pt-2">Mon Panier</h5>
                <div className="row">
                    <div className="col-md-8">
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"><input type="checkbox" checked={check} onClick={e => checkAll(e)} /></th>
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
                        <hr />
                        <div className="row">
                            <div className="col-md-4 mb-3"><button type="button" className="btn btn-warning" onClick={() => nav.push('/home')}><i className="fa fa-cart-plus"></i> Continuer les achats</button></div>
                            <div className="col-md-4 mb-3"> <button type="button" className="btn btn-secondary" onClick={delAll}><i className="fa fa-trash"></i> Tout Supprimer</button></div>
                        </div>
                    </div>
                    <div className="col-md-3 resume">
                        <h4>RESUME</h4>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Nombre D'articles
                                <span className="badge badge-primary badge-pill"> {comand.items} </span>
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
                                <span className="badge badge-primary badge-pill"> {total() - taxe} Fcfa </span>
                            </li>
                            <button className="btn btn-secondary colorbtncommander" onClick={sendComand} disabled={toggle()}><b>COMMANDER</b></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state: any) => ({
    comand: state.comand,
})

export default connect(mapStateToProps)(Panier);