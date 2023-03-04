import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import OrderListModule from '../../components/OrderListModule/OrderListModule'

function OrderList() {
    return (
        <>
            <Navbar pageNo="2" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <OrderListModule />
                </div>

            </div>
        </>
    )
}

export default OrderList