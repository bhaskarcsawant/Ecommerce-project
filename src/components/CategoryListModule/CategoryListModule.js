import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CategoryListModule.css'

function CategoryListModule() {
    const [showBox, setshowBox] = useState(false)
    const addCategory = () => {
        setshowBox(true)
    }
    const closeAddCategory = () => {
        setshowBox(false)
    }
    return (
        <div className="ProductListModuleContainer">
            <div className="AddProductModuleHeaderContainer">
                <div className="ModuleHeaderContainer">
                    <h2 className='AddProductModuleHeader1'>Category List</h2>
                </div>
                <button id='createProductBt' type='button' onClick={addCategory}>
                    {/* <img className='exportIcon' src={exportIcon} alt="" /> */}
                    Add Category <span id='plusIcon'>+</span>
                </button>
            </div>
            <div className="ProductListModuleSearchFilterContainer">
                <form>
                    <input className='ProductListModuleSearch' type="text" name="" placeholder="Search category" />
                </form>
            </div>
            <div className="ProductListModuleTableContainer">
                <table id='ProductListModuleTable'>
                    <tr id='HeadTr'>
                        <th>CATEGORY</th>
                        <th>PRODUCTS COUNT</th>
                        <th>ACTIONS</th>
                    </tr>
                    <tr>

                        <td id='ProductPrice'>Shirt</td>
                        <td id='ProductPrice'>6</td>
                        <td>
                            <div className="EditBtCell">
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>

                        <td id='ProductPrice'>Shirt</td>
                        <td id='ProductPrice'>6</td>
                        <td>
                            <div className="EditBtCell">
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>

                        <td id='ProductPrice'>Shirt</td>
                        <td id='ProductPrice'>6</td>
                        <td>
                            <div className="EditBtCell">
                                <button id='DeleteBt' type='button'>
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>



                </table>
            </div>
            {showBox ? (
                <div className="addCategoryBoxContainer">
                    <input className='ProductListModuleSearch' type="text" name="" placeholder="Enter category" />
                    <div className="addCategoryBoxBtnContainer">

                        <button id='DeleteBt' type='button' onClick={closeAddCategory}>
                            Cancel
                        </button>
                        <button id='createProductBt' type='button'>
                            Add Category
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default CategoryListModule