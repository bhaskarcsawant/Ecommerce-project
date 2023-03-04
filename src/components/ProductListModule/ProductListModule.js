import React from 'react'
import { Link } from 'react-router-dom'
import './ProductListModule.css'


function ProductListModule() {
    return (
        <div className="ProductListModuleContainer">
            <div className="AddProductModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='AddProductModuleHeader1'>Product List</h2>
                </div>
                <Link className='SidebarLink' to='/admin/dashboard/addproduct/'>
                    <button id='createProductBt' type='button'>
                        {/* <img className='exportIcon' src={exportIcon} alt="" /> */}
                        Add Product <span id='plusIcon'>+</span>
                    </button>
                </Link>
            </div>
            <div className="ProductListModuleSearchFilterContainer">
                <form>
                    <input className='ProductListModuleSearch' type="text" name="" placeholder="Search products" />
                </form>
                <button id='FilterBt' type='button'>
                    Filter
                </button>
            </div>
            <div className="ProductListModuleTableContainer">
                <table id='ProductListModuleTable'>
                    <tr id='HeadTr'>
                        <th>PRODUCT</th>
                        <th>CATEGORY</th>
                        <th>STOCK</th>
                        <th>PRICE</th>
                        <th>ACTIONS</th>
                    </tr>
                    <tr id='ProductListModuleTableRow'>
                        <td id='ProductNameCell'>
                            <div id="product_icon">
                                <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                            </div>
                            <div className="product_cart_name_container">
                                <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                <h3 className="product_cartid">#676762</h3>
                            </div>
                        </td>
                        <td id='PaymentDate'>Shirt</td>
                        <td id='PaymentDate'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                        <td id='ProductPrice'>₹100</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Edit
                                </button>
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='ProductListModuleTableRow'>
                        <td id='ProductNameCell'>
                            <div id="product_icon">
                                <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                            </div>
                            <div className="product_cart_name_container">
                                <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                <h3 className="product_cartid">#676762</h3>
                            </div>
                        </td>
                        <td id='PaymentDate'>Shirt</td>
                        <td id='PaymentDate'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                        <td id='ProductPrice'>₹100</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Edit
                                </button>
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='ProductListModuleTableRow'>
                        <td id='ProductNameCell'>
                            <div id="product_icon">
                                <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                            </div>
                            <div className="product_cart_name_container">
                                <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                <h3 className="product_cartid">#676762</h3>
                            </div>
                        </td>
                        <td id='PaymentDate'>Shirt</td>
                        <td id='PaymentDate'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                        <td id='ProductPrice'>₹100</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Edit
                                </button>
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr id='ProductListModuleTableRow'>
                        <td id='ProductNameCell'>
                            <div id="product_icon">
                                <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                            </div>
                            <div className="product_cart_name_container">
                                <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                <h3 className="product_cartid">#676762</h3>
                            </div>
                        </td>
                        <td id='PaymentDate'>Shirt</td>
                        <td id='PaymentDate'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                        <td id='ProductPrice'>₹100</td>
                        <td>
                            <div className="EditBtCell">

                                <button id='FilterBt' type='button'>
                                    Edit
                                </button>
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>




                </table>
            </div>

        </div>
    )
}

export default ProductListModule