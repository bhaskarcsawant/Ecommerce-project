import React from 'react'
import './LatestTransactionModule.css'

function LatestTransactionModule() {
    return (
        <div className="LatestTransactionModuleContainer">
            <div className="LatestTransactionModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='LatestTransactionModuleHeader1'>Transactions</h2>
                    <h2 className='LatestTransactionModuleHeader2'>This is a list of latest transactions</h2>
                </div>
            </div>
            <div className="TransactionListTableContainer">
                <table id='TransactionTable'>
                    <tr id='HeadTr'>
                        <th>TRANSACTION</th>
                        <th>DATE & TIME</th>
                        <th id='AmountHeader'>AMOUNT</th>
                        <th id='StatusHeader'>STATUS</th>
                    </tr>
                    <tr>
                        <td id='PaymentName'>Payment from <span id='PaymentUserName'>Steve Jobs</span></td>
                        <td id='PaymentDate'>Apr 23,2023</td>
                        <td id='PaymentAmount'>₹1000</td>
                        <td><h3 id='PaymentStatus' className='completed'></h3></td>
                    </tr>
                    <tr>
                        <td id='PaymentName'>Payment from <span id='PaymentUserName'>Steve Jobs</span></td>
                        <td id='PaymentDate'>Apr 23,2023</td>
                        <td id='PaymentAmount'>₹1000</td>
                        <td><h3 id='PaymentStatus' className='completed'></h3></td>
                    </tr>
                    <tr>
                        <td id='PaymentName'>Payment from <span id='PaymentUserName'>Steve Jobs</span></td>
                        <td id='PaymentDate'>Apr 23,2023</td>
                        <td id='PaymentAmount'>₹1000</td>
                        <td><h3 id='PaymentStatus' className='inProgress'></h3></td>
                    </tr>
                    <tr>
                        <td id='PaymentName'>Payment from <span id='PaymentUserName'>Steve Jobs</span></td>
                        <td id='PaymentDate'>Apr 23,2023</td>
                        <td id='PaymentAmount'>₹1000</td>
                        <td><h3 id='PaymentStatus' className='cancelled'></h3></td>
                    </tr>
                    <tr>
                        <td id='PaymentName'>Payment from <span id='PaymentUserName'>Steve Jobs</span></td>
                        <td id='PaymentDate'>Apr 23,2023</td>
                        <td id='PaymentAmount'>₹1000</td>
                        <td><h3 id='PaymentStatus' className='completed'></h3></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default LatestTransactionModule