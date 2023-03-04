import React, { useState } from 'react'
import './SalesXProfitChartModule.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function SalesXProfitChartModule() {
    const CHARTOPTIONS = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },

        // Modify the axis by adding scales
        scales: {
            // to remove the labels
            x: {
                display: false
            },
            // to remove the y-axis labels
            y: {
                display: false
            },
        },
    };
    const data = [
        {
            id: 1,
            month: 'Jan',
            sales: 5000,
            profit: 300
        },
        {
            id: 2,
            month: 'Feb',
            sales: 500,
            profit: 3000
        },
        {
            id: 3,
            month: 'Mar',
            sales: 5000,
            profit: 3000
        },
        {
            id: 4,
            month: 'Apr',
            sales: 5000,
            profit: 3000
        },
    ]
    // data.map((data) => console.log(data.month))
    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.month),
        datasets: [
            {
                label: ['Sales'],
                data: data.map((data) => data.sales),
                backgroundColor: ["#1C64F2"],
                borderRadius: 50,
                // barThickness: 20,
                barPercentage: 0.5,
            },
            {
                label: ['Profit'],
                data: data.map((data) => data.profit),
                backgroundColor: ["#FDBA8C"],
                borderRadius: 50,
                barPercentage: 0.5,
            },
        ],
    })

    return (
        <div className="SalesXProfitChartModuleContainer">
            <div className="SalesXProfitChartModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='SalesXProfitModuleHeader1'>₹45k</h2>
                    <h2 className='SalesXProfitModuleHeader2'>Total Sales</h2>
                </div>
                <div className="PeriodToggleBtContainer">
                    <button id='QuarterlyBt'>Quarterly</button>
                    <button id='AnnuallyBt'>Annually</button>
                </div>
            </div>
            <div className="SalesXProfitChartModuleBarContainer">
                {/* <canvas id='SalesXProfit' ></canvas> */}
                <Bar data={chartData} options={CHARTOPTIONS} />
            </div>
        </div>
    )
}

export default SalesXProfitChartModule