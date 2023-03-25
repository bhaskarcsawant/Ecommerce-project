import React, { useEffect } from 'react'
import './producttypefilter.css'
import { useState } from 'react'
import Checkbox from '../checkbox/Checkbox'
import { getProducts } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'


function ProductFilters() {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState('T-Shirt');
    const [checked1, setChecked1] = useState(false);
    let keyword = ''
    useEffect(() => {
        if (checked) {
            dispatch(getProducts(keyword, 1, checked))
        } else {
            dispatch(getProducts(keyword, 1, checked1))

        }
    }, [dispatch, checked, checked1, keyword])
    const handleDropdown = () => {
        if (toggle === 1) {
            document.getElementById('type_dropdown_icon').style.transform = 'rotate(0deg)'
            document.getElementById('product_type_filter_container').style.height = 'auto'
            setToggle(0)
        }
        else {
            document.getElementById('type_dropdown_icon').style.transform = 'rotate(180deg)'
            document.getElementById('product_type_filter_container').style.height = '6rem'
            setToggle(1)
        }
    }
    const handleCheck = () => {
        if (checked) {
            setChecked(false)
        }

        else {
            setChecked('T-Shirt')
            setChecked1(false)
        }
    }
    const handleCheck1 = () => {
        if (checked1) {
            setChecked1(false)
        }

        else {
            setChecked1('Shirt')
            setChecked(false)
        }
    }

    return (


        <div className="product_type_filter_container" id='product_type_filter_container'>
            <div className="filter_header_container">
                <h3 className='filter_header'>PRODUCT TYPE</h3>
                <img className='dropdown_icon' id='type_dropdown_icon'
                    src={require('./assets/dropdown.png')}
                    onClick={() => handleDropdown()}
                    alt='' />
            </div>
            <div className="select_filters_div">
                <div className="filter_name_container">
                    <Checkbox checked={checked} handleCheck={handleCheck} />
                    <h3 className='filter_name_header'>T-Shirts <span className='count_bracket'>(50)</span></h3>
                </div>
                <div className="filter_name_container">
                    <Checkbox checked={checked1} handleCheck={handleCheck1} />
                    <h3 className='filter_name_header'>Shirts <span className='count_bracket'>(50)</span></h3>
                </div>
            </div>
        </div>


    )
}

export default ProductFilters