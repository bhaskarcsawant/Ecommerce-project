import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import CategoryListModule from '../../components/CategoryListModule/CategoryListModule'

function CategoryList() {
    return (
        <>
            <Navbar pageNo="1" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <CategoryListModule />
                </div>

            </div>
        </>
    )
}

export default CategoryList