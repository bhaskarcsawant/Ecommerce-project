import React from 'react'
import './productpricefilter.css'
import { useState } from 'react'
import Checkbox from '../../checkbox/Checkbox'

function ProductFilters() {
    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState(true);
    const handleDropdown = () => {
        if (toggle === 1) {
            document.getElementById('dropdown_icon').style.transform = 'rotate(0deg)'
            document.getElementById('product_price_filter_container').style.height = 'auto'
            setToggle(0)
        }
        else {
            document.getElementById('dropdown_icon').style.transform = 'rotate(180deg)'
            document.getElementById('product_price_filter_container').style.height = '6rem'
            setToggle(1)
        }
    }
    const handleCheck = () => {
        if (checked) {
            setChecked(false)
        }

        else {
            setChecked(true)
        }
    }

    return (
        <div className="product_price_filter_container" id='product_price_filter_container'>
            <div className="filter_header_container">
                <h3 className='filter_header'>PRICE</h3>
                <img className='dropdown_icon' id='dropdown_icon'
                    src={require('../assets/dropdown.png')}
                    onClick={() => handleDropdown()}
                    alt='' />
            </div>
            <div className="select_filters_div">
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>Under ₹500 <span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>₹500 - ₹1,000<span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>₹1,000 - ₹1,500<span className='count_bracket'>(50)</span></h3>
                </div>
            </div>
        </div>

    )
}

export default ProductFilters