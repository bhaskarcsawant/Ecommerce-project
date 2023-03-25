import React, { useEffect } from 'react'
import './productpricefilter.css'
import { useState } from 'react'
import Checkbox from '../checkbox/Checkbox'
import { getProducts } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'

function ProductFilters() {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    let keyword = ''
    useEffect(() => {
        if (checked) {
            dispatch(getProducts(keyword, 1, 'T-Shirt', checked))
        } else if (checked1) {
            dispatch(getProducts(keyword, 1, 'T-Shirt', checked1))
        }
        else {
            dispatch(getProducts(keyword, 1, 'T-Shirt', checked2))
        }
    }, [dispatch, checked, checked1, checked2, keyword])
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
            setChecked([0, 500])
            setChecked1(false)
            setChecked2(false)
        }
    }
    const handleCheck1 = () => {
        if (checked1) {
            setChecked1(false)
        }
        else {
            setChecked1([500, 1000])
            setChecked(false)
            setChecked2(false)
        }
    }
    const handleCheck2 = () => {
        if (checked2) {
            setChecked2(false)
        }
        else {
            setChecked2([1000, 1500])
            setChecked(false)
            setChecked1(false)
        }
    }

    return (
        <div className="product_price_filter_container" id='product_price_filter_container'>
            <div className="filter_header_container">
                <h3 className='filter_header'>PRICE</h3>
                <img className='dropdown_icon' id='dropdown_icon'
                    src={require('./assets/dropdown.png')}
                    onClick={() => handleDropdown()}
                    alt='' />
            </div>
            <div className="select_filters_div">
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>Under ₹500 <span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked1} handleCheck={handleCheck1} />
                    <h3 className='filter_name_header'>₹500 - ₹1,000<span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked2} handleCheck={handleCheck2} />
                    <h3 className='filter_name_header'>₹1,000 - ₹1,500<span className='count_bracket'>(50)</span></h3>
                </div>
            </div>
        </div>

    )
}

export default ProductFilters