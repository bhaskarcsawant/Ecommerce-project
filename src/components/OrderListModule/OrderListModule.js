import React from 'react'
import './OrderListModule.css'

function OrderListModule() {
    return (
        <div className="ProductListModuleContainer">
            <div className="AddProductModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='AddProductModuleHeader1'>Order List</h2>
                </div>

            </div>
            <div className="ProductListModuleSearchFilterContainer">
                <form>
                    <input className='ProductListModuleSearch' type="text" name="" placeholder="Search entry" />
                </form>
                <button id='FilterBt' type='button'>
                    Filter
                </button>
            </div>
            <div className="ProductListModuleTableContainer">
                <table id='ProductListModuleTable'>
                    <tr id='HeadTr'>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>CUSTOMER</th>
                        <th>PAYMENT STATUS</th>
                        <th>ORDER STATUS</th>
                        <th>PAYMENT METHOD</th>
                        <th>ACTIONS</th>
                    </tr>
                    <tr id='OrderListModuleTableRow'>
                        <td>
                            <h3 className="ProductPrice">#676762</h3>
                        </td>
                        <td id='PaymentDate'>Aug 17, 2020, 5:48 (ET)</td>
                        <td id='PaymentDate'>
                            <h3 className="ProductPrice">Steve Jobs</h3>
                        </td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='completed'></h3></td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='inProgress'></h3></td>
                        <td id='ProductPrice'>GPAY</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Print
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='OrderListModuleTableRow'>
                        <td>
                            <h3 className="ProductPrice">#676762</h3>
                        </td>
                        <td id='PaymentDate'>Aug 17, 2020, 5:48 (ET)</td>
                        <td id='PaymentDate'>
                            <h3 className="ProductPrice">Steve Jobs</h3>
                        </td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='completed'></h3></td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='inProgress'></h3></td>
                        <td id='ProductPrice'>GPAY</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Print
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='OrderListModuleTableRow'>
                        <td>
                            <h3 className="ProductPrice">#676762</h3>
                        </td>
                        <td id='PaymentDate'>Aug 17, 2020, 5:48 (ET)</td>
                        <td id='PaymentDate'>
                            <h3 className="ProductPrice">Steve Jobs</h3>
                        </td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='completed'></h3></td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='inProgress'></h3></td>
                        <td id='ProductPrice'>GPAY</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Print
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='OrderListModuleTableRow'>
                        <td>
                            <h3 className="ProductPrice">#676762</h3>
                        </td>
                        <td id='PaymentDate'>Aug 17, 2020, 5:48 (ET)</td>
                        <td id='PaymentDate'>
                            <h3 className="ProductPrice">Steve Jobs</h3>
                        </td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='completed'></h3></td>
                        <td id='ProductPrice'><h3 id='orderPaymentStatus' className='inProgress'></h3></td>
                        <td id='ProductPrice'>GPAY</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Print
                                </button>
                            </div>
                        </td>
                    </tr>





                </table>
            </div>

        </div>
    )
}

export default OrderListModule