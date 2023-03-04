import React from 'react'
import './TodaySummaryModule.css'
import exportIcon from './assets/exportIcon.png'
import totalSales from './assets/totalSales.png'
import totalOrder from './assets/totalOrder.png'
import productSold from './assets/productSold.png'
import newCustomer from './assets/newCustomer.png'

function TodaySummaryModule() {
    return (
        <div className="TodaySummaryModuleContainer">
            <div className="TodaySummaryModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='SummaryModuleHeader1'>Today's Summary</h2>
                    <h2 className='SummaryModuleHeader2'>Sales summary</h2>
                </div>
                <button id='exportIcon' type='button'>
                    <img className='exportIcon' src={exportIcon} alt="" />
                    Export
                </button>
            </div>
            <div className="TodaySummaryModuleStatsContainer">
                <div className="TotalSalesStatContainer">
                    <img className='totalSales' src={totalSales} alt="" />
                    <h1 className="totalSalesCount">₹1K</h1>
                    <h2 className="totalSalesHeader">Total Sales</h2>
                    <h2 className="previousDayPercentage">+8% from yesterday</h2>
                </div>
                <div className="TotalSalesStatContainer1">
                    <img className='totalSales' src={totalOrder} alt="" />
                    <h1 className="totalSalesCount">300</h1>
                    <h2 className="totalSalesHeader">Total Order</h2>
                    <h2 className="previousDayPercentage">+5% from yesterday</h2>
                </div>
                <div className="TotalSalesStatContainer2">
                    <img className='totalSales' src={productSold} alt="" />
                    <h1 className="totalSalesCount">5</h1>
                    <h2 className="totalSalesHeader">Product Sold</h2>
                    <h2 className="previousDayPercentage">+1.2% from yesterday</h2>
                </div>
                <div className="TotalSalesStatContainer3">
                    <img className='totalSales' src={newCustomer} alt="" />
                    <h1 className="totalSalesCount">8</h1>
                    <h2 className="totalSalesHeader">New Customers</h2>
                    <h2 className="previousDayPercentage">+10% from yesterday</h2>
                </div>
            </div>
        </div>
    )
}

export default TodaySummaryModule