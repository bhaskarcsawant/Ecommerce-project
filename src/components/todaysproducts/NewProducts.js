import React from 'react'
import Loader from '../Loader/Loader'
import ProductCard from '../productcard.js/ProductCard'
import './newproducts.css'

function NewProducts({ products, loading }) {
    return (
        <>
            {loading ? (<Loader />) : (

                <div className="container_prouducts_2">

                    <h3 align='center' className="header_1">Products in today</h3>
                    <div className='products_container_2'>
                        {products ? products.map(product => <ProductCard data={product} key={product._id} />) : null}
                    </div>
                </div>
            )}
        </>
    )
}

export default NewProducts