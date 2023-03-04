import React from 'react'
import ProductCard from '../productcard.js/ProductCard'
import './newproducts.css'

function NewProducts() {
    return (
        <>
            <div className="container_prouducts_2">

                <h3 align='center' className="header_1">Products in today</h3>
                <div className='products_container_2'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default NewProducts