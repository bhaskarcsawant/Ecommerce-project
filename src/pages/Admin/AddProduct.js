import React from 'react'
import AddProductModule from '../../components/AddProductModule/AddProductModule'
import Navbar from '../../components/AdminNavBar/Navbar'

function AddProduct() {
    return (
        <>
            <Navbar pageNo="1" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <AddProductModule />
                </div>

            </div>
        </>
    )
}

export default AddProduct