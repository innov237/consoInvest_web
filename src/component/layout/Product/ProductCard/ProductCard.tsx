
import React from "react";
import './ProductCard.css';

type product = {
    key: number,
    image: string,
    title: string,
    price: number,
    oldprice: number,
    descrption: string,
}
const ProductCard: React.FC<product> = (props) => {
    return (

        <div className="card">
            <div className="card__header">
                <img className="card-img-top card__image" key={props.key} src={props.image} alt="img" />
                <span>Promo</span>
            </div>
            <div className="card-body">
                <p className="card__price" key={props.key}>{props.price} FCFA</p>
                <p className="card__title" key={props.key}>{props.title}</p>
                <p className="card__descrption" key={props.key}>{props.descrption}</p>
            </div>
        </div>
    )
}

export default ProductCard;