import React from 'react';
import './ProductDetail.css'

const ProductDetail: React.FC = () => {
    return (
        <div className="container">
            <div className="row container-fluid">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <img width="100%" src="https://global2019-static-cdn.kikuu.com/upload-productImg-1557817317157_320_234.jpeg?" />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 product__detail__row">
                    <p className="product__title">Chausure homme</p>
                    <p className="product__price">50.000 FCFA</p>
                    <p className="product__decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic alias nemo illo, illum laboriosam libero similique at, deleniti quo repudiandae voluptatem? Aut qui, iusto quia ipsam nisi dolor incidunt!</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;