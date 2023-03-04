import React from 'react'
import './product_card.css'
import { Link } from 'react-router-dom'

function ProductCard() {
    return (
        <Link to='/product'>
            <div className="product_card">
                <div className="product_discount">-50%</div>
                <img className="product_img" src={require('./assets/product_img.png')} alt='' />
                <h3 className="product_name">T-Shirt Summer Vibes</h3>
                <div className="product_price_container">
                    <h3 className="product_price">₹699</h3>
                    <h3 className="product_discounted_price">₹1399</h3>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard