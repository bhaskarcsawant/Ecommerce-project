import React from 'react'
import './product_card.css'
import { Link } from 'react-router-dom'

function ProductCard({ data }) {
    return (
        <>
            {data ? (
                <Link to={`/product/${data._id}`}>
                    {/* to='/product' */}
                    <div className="product_card">
                        <div className="product_discount">-50%</div>
                        <img className="product_img" src={data.images[0].url} alt={data.name} />
                        <h3 className="product_name">{data.name}</h3>
                        <div className="product_price_container">
                            <h3 className="product_price">₹{data.price}</h3>
                            <h3 className="product_discounted_price">₹1399</h3>
                        </div>
                    </div>
                </Link>
            ) : null

            }
        </>
    )
}

export default ProductCard