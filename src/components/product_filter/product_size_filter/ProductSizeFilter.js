import React from 'react'
import './productsizefilter.css'
import { useState } from 'react'
import Checkbox from '../../checkbox/Checkbox'

function ProductFilters() {
    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const handleDropdown = () => {
        if (toggle === 1) {
            document.getElementById('size_dropdown_icon').style.transform = 'rotate(0deg)'
            document.getElementById('product_size_filter_container').style.height = 'auto'
            setToggle(0)
        }
        else {
            document.getElementById('size_dropdown_icon').style.transform = 'rotate(180deg)'
            document.getElementById('product_size_filter_container').style.height = '6rem'
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
    const handleCheck1 = () => {
        if (checked1) {
            setChecked1(false)
        }
        else {
            setChecked1(true)
        }
    }
    const handleCheck2 = () => {
        if (checked2) {
            setChecked2(false)
        }
        else {
            setChecked2(true)
        }
    }
    return (
        <div className="product_price_filter_container" id='product_size_filter_container'>
            <div className="filter_header_container">
                <h3 className='filter_header'>SIZE</h3>
                <img className='dropdown_icon' id='size_dropdown_icon'
                    src={require('../assets/dropdown.png')}
                    onClick={() => handleDropdown()}
                    alt='' />
            </div>
            <div className="select_filters_div">
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>S<span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked1} handleCheck={handleCheck1} />
                    <h3 className='filter_name_header'>M<span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked2} handleCheck={handleCheck2} />
                    <h3 className='filter_name_header'>L<span className='count_bracket'>(50)</span></h3>
                </div>
            </div>
        </div>

    )
}

export default ProductFilters