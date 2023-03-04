import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import LatestTransactionModule from '../../components/LatestTransactionModule/LatestTransactionModule'

function TransactionList() {
    return (
        <>
            <Navbar pageNo="3" />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <LatestTransactionModule />
                </div>

            </div>
        </>
    )
}

export default TransactionList