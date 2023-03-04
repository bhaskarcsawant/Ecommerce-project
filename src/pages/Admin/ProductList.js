import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import ProductListModule from '../../components/ProductListModule/ProductListModule'

function ProductList() {
    return (
        <>
            <Navbar pageNo="1" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <ProductListModule />
                </div>

            </div>
        </>
    )
}

export default ProductList