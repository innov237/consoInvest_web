import React, { useEffect, useState, useContext } from "react";

import { profile } from "console";

import { Link, Switch, Route } from "react-router-dom";
import './Boutique.css';

import { useForm } from "react-hook-form";

import ProductCard from "../../../../layout/Table_commande_user/Table_commande";
import { link } from "fs";

import {useSelector} from 'react-redux'
import ApiContext from '../../../../../context/ApiContext'

const Boutique: React.FC = () => {

    const Api: any = useContext(ApiContext);
    const [categorieData, setCategorie] = useState([]);
    const [data, setData] = useState([]);

    const [produits, setProduits] = useState([]);

    const [link, setLink] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState(0);
    const [solde, setSolde] = useState(0);
    const [categorie, setCase] = useState(0);
    const [message, setMessage] = useState('');

    const productClick = React.createRef<any>();

    const [files, setFile] = useState([]);

    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
       getCategorie();
       getUserCommands();

    }, []);

    const auth = useSelector((state:any) => state.auth)

    const getUserProduct = async () => {
        setProduits([])
        
        const credentials = { 'id_user':1, 'lastInsertId':10}
        
        
        var response = await Api.postData("getUserPost", credentials);
        if (response.status == 200) {
            console.log(response.data)
            setProduits(response.data);
            
        }
    }

    const onFileChange = (e:any) => {
        setFile( e.target.files)
    }

    const getUserCommands = async (etat:any = 1) => {
        setData([])
        setMessage('')
    
        
        var response = await Api.getData(`getCommandeBoutique?id_boutique=${auth.shop.id}&lastInsertId=10&etat=${etat}`);
        if (response.status == 200) {
            setData(response.data); 
            if (!response.data.length)
            setMessage('No element found')
        } 
        
    }      

    const saveProduct = async (data:any) => {
        setData([])

       

        const images = Array.from(files).map((e:any,i) => {
            return e.name
        })
   
        const credentials = {
            'id_user': auth.user.id,
            'id_categorie':categorie,
            'titre':name,
            'description':description,
            'prix':price,
            'prixNormal':solde,
            'etiquette':status,
            'link': link,
            images
        }

        setCase(0)
        setName('')
        setDescription('')
        setPrice(0)
        setSolde(0)
        setStatus('')
        setFile([])
        setLink('')
        
        var response = await Api.postData("enregistrerPublication", credentials);
        if (response.status == 200) {
            
            Array.from(files).map((e:any,i) => {
                Api.uploadFile(e);
            })
            productClick.current.click();
            alert('Opération éffectuée. Vous pouvez voir l\'enregistrement dans la liste des produits.')
            
        }
    }


    


    const _onDelete = (id:any) => {
        deleteProduit(id)
    }


    const deleteProduit = async (id:any) => {
        setData([])
        const credentials = { 'id_publication':id}       
        var response = await Api.postData("deletePublication", credentials);
        if (response.status == 200) {
            alert('Opération effectuée avec sucess')
            getUserProduct();
            
        }
    }

    const getCategorie = async () => {
        
        var response = await Api.getData("getcategorie");
        if (response.status == 200) {
            setCategorie(response.data);
            
        }
    }


    const disabledSubmit =  () => (!categorie || !status || !files) ? true : false

    

    return (
        <div>
            <h5 className="titre">Ma boutique</h5>
             <div className="my-3 p-3 bg-white rounded shadow-sm">

             <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active cursor-pointe" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => getUserCommands()}>Commandes</a>
                    <a className="nav-link cursor-pointe" id="nav-produit-tab" data-toggle="tab" href="#nav-produit" role="tab" aria-controls="nav-produit" aria-selected="false">Vendre un produit</a>
                    <a ref={productClick} className="nav-link cursor-pointe" id="nav-produit-tab" data-toggle="tab" href="#nav-list-produit" role="tab" aria-controls="nav-list-produit" aria-selected="false" onClick={() => getUserProduct()}>Liste des produits</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => getUserCommands(1)}>Tout</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={() => getUserCommands(2)}>En attente</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getUserCommands(3)}>En cour</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact1" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getUserCommands(4)}>En route</a>
                            <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact2" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={() => getUserCommands(5)}>Livré</a>
                        </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                {
                                    (data.length) ?
                                       (<ProductCard  item={data} type={'admin'} update={() => getUserCommands(1)}/>)
                                    : <>{message}</>
                                }
                                
                                
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                {
                                    (data.length) ?
                                       (<ProductCard  item={data} type={'admin'} update={() =>getUserCommands(2)} />)
                                    : <>{message}</>
                                }
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                {
                                    (data.length) ?
                                       (<ProductCard  item={data} type={'admin'}  update={() =>getUserCommands(3)} />)
                                    : <>{message}</>
                                }
                            </div>
                            <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab">
                                 {
                                    (data.length) ?
                                       (<ProductCard  item={data} type={'admin'} update={() => getUserCommands(4)} />)
                                    : <>{message}</>
                                }
                            </div>
                            <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab">
                                {
                                    (data.length) ?
                                       (<ProductCard  item={data} type={'admin'} update={() =>getUserCommands(5)} />)
                                    : <>{message}</>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-produit" role="tabpanel" aria-labelledby="nav-produit-tab">

                        <form className="form p-5" onSubmit={handleSubmit(saveProduct)}>
                            <div className="form-group pt-3">
                            <input type="url" className="form-control text w-100" onChange={(e) => setLink(e.target.value)} placeholder="http://" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control text w-100" placeholder="Nom" onChange={(e) => setName(e.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <select className="form-control w-100" onChange={(e:any) => setCase(e.target.value)}>
                                <option selected disabled value="">Catégories</option>
                                {
                                    categorieData.map((item, index) => (<option value={item['id']} key={index}>{item['libelle_categorie']}</option>))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control w-100" onChange={(e) => setStatus(e.target.value)}>
                                <option selected disabled value="">Etiquette</option>
                                <option value="promo">Prome</option>
                                <option value="solde">Solde</option>
                                <option value="arrivage">Arrivage</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control text w-100" placeholder="Description de l'article" onChange={(e:any) => setDescription(e.target.value)} required></textarea>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control text w-100" placeholder="Prix normal" onChange={(e:any) => setPrice(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control text w-100" placeholder="Prix" onChange={(e:any) => setSolde(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={onFileChange} multiple />
                        </div>

                        <button type="submit" className="btn btn-primary w-100" disabled={disabledSubmit()}>Enregister</button>
                        </form>
                      
                    </div>

                    <div className="tab-pane fade" id="nav-list-produit" role="tabpanel" aria-labelledby="nav-produit-tab">

                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Descriptinon</th>
                            <th scope="col">Etiquette</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                produits.map((item, index) => (
                                    <tr key={index}>
                                    <th scope="row">{item['id_pub']}</th>
                                    <td>{item['titre']}</td>
                                    <td>{item['description']}</td>
                                    <td>{item['etiquette']}</td>
                                    <td className="cursor-pointe">
                                    <i className="fas fa-bars" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item cursor-pointe" type="button">Modifier</button>
                                            <button className="dropdown-item cursor-pointe" type="button" onClick={ () => _onDelete(item['id_pub'])}>Supprimer</button>
                                        </div>
                                    
                                    </td>
                                    </tr>
                                ))
                        
                            }
                        
                        </tbody>
                    </table>
                       
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Boutique;