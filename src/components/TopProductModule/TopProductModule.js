import React from 'react'
import './TopProductModule.css'

function TopProductModule() {
    return (
        <div className="TopProductModuleContainer">
            <div className="TopProductModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='TopProductModuleHeader1'>Top products</h2>
                </div>
                <div className="PeriodToggleBtContainer">
                    <button id='QuarterlyBtOfTopProducts'>Quarterly</button>
                    <button id='AnnuallyBtOfTopProducts'>Annually</button>
                </div>
            </div>
            <div className="TopProductModuleListConatiner">
                <div className="TopProductModuleRow">
                    <h2 className="TopProductModuleName">Cheese Burger</h2>
                    <h2 className="TopProductModuleSaleCount">70 <span className='TopProductModuleSaleCountSpan'>sales</span></h2>
                </div>
                <div className="TopProductModuleRow">
                    <h2 className="TopProductModuleName">Cheese Sandwich</h2>
                    <h2 className="TopProductModuleSaleCount">70 <span className='TopProductModuleSaleCountSpan'>sales</span></h2>
                </div>
                <div className="TopProductModuleRow">
                    <h2 className="TopProductModuleName">Grilled Burger</h2>
                    <h2 className="TopProductModuleSaleCount">70 <span className='TopProductModuleSaleCountSpan'>sales</span></h2>
                </div>
                <div className="TopProductModuleRow">
                    <h2 className="TopProductModuleName">Pasta Burger</h2>
                    <h2 className="TopProductModuleSaleCount">70 <span className='TopProductModuleSaleCountSpan'>sales</span></h2>
                </div>
                <div className="TopProductModuleRow">
                    <h2 className="TopProductModuleName">Cheese Burger</h2>
                    <h2 className="TopProductModuleSaleCount">70 <span className='TopProductModuleSaleCountSpan'>sales</span></h2>
                </div>
            </div>
        </div>
    )
}

export default TopProductModule