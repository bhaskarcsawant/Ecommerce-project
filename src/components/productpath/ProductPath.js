import React from 'react'
import './productpath.css'

function ProductPath() {
    return (
        <div className="productpath_container">
            <h3 className="product_path">
                <img className='home_img' src={require('./assets/home.png')} alt='' />
                &nbsp;&nbsp;/&nbsp;&nbsp;<span>Men's Tops</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>T-Shirt</span>&nbsp;&nbsp;
                /&nbsp;&nbsp;<span className='final_path'>&nbsp;&nbsp;T-Shirt Summer Vibes</span>
            </h3>
        </div>
    )
}

export default ProductPath