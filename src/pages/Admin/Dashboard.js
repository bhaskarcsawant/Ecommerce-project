import React from 'react'
import Navbar from '../../components/AdminNavBar/Navbar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import LatestTransactionModule from '../../components/LatestTransactionModule/LatestTransactionModule'
import SalesXProfitChartModule from '../../components/SalesXProfitChartModule/SalesXProfitChartModule'
import TodaySummaryModule from '../../components/TodaySummaryModule/TodaySummaryModule'
import TopProductModule from '../../components/TopProductModule/TopProductModule'
import './Admin.css'

function Dashboard() {

    return (
        <>
            <Navbar />
            <div className="dashBoardContainer">
                <div className="leftSpace"></div>
                <div className="rightSpace">

                    <TodaySummaryModule />
                    <div className="SalesBarAndTopProductContainer">
                        <SalesXProfitChartModule />
                        <TopProductModule />
                    </div>
                    <LatestTransactionModule />
                </div>

            </div>
        </>
    )
}

export default Dashboard