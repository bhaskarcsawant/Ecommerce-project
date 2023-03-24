import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../productcard.js/ProductCard'
import './productgallery.css'
import ProductTypeFilter from '../product_filter/product_type_filter/ProductTypeFilter'
import ProductPriceFilter from '../product_filter/product_price_filter/ProductPriceFilter'
import ProductSizeFilter from '../product_filter/product_size_filter/ProductSizeFilter'
import { getProducts } from '../actions/productsAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { useParams, useNavigate } from 'react-router-dom'

function ProductGallery() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, products, productCount } = useSelector((state) => state.products)
    const { keyword } = useParams()
    const [screenSize, setScreenSize] = useState(1300)
    const [activePage, setActivePage] = useState(1)
    const [productPerPage, setProductPerPage] = useState(9)
    const [totalPages, setTotalPages] = useState(Math.ceil(productCount / productPerPage))

    useEffect(() => {
        dispatch(getProducts(keyword, activePage))
    }, [dispatch, keyword, activePage])


    // console.log(productPerPage)
    window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth)
    })
    useEffect(() => {
        setScreenSize(window.innerWidth)
    }, [])
    useEffect(() => {
        if (activePage === 1) {
            document.getElementById('prev_bt').style.color = 'var(--grey-1)'
        }
        else {
            document.getElementById('prev_bt').style.color = 'var(--black)'
        }
        if (activePage === totalPages) {
            document.getElementById('next_bt').style.color = 'var(--grey-1)'
        }
        else {
            document.getElementById('next_bt').style.color = 'var(--black)'
        }
    })

    const prevPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1)
        }

    }
    const nextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1)
        }


    }
    const openFilterSection = () => {
        var slide_filter = document.getElementById('slide_filter')
        var slide_filter_bg = document.getElementById('slide_filter_bg')

        slide_filter_bg.style.display = 'block'
        slide_filter_bg.style.opacity = '100'
        slide_filter.style.marginLeft = '0%'
    }
    const handleClosefilter = (e) => {
        var slide_filter = document.getElementById('slide_filter')
        var slide_filter_bg = document.getElementById('slide_filter_bg')
        slide_filter.style.marginLeft = '200%'
        slide_filter_bg.style.display = 'none'
    }

    return (
        <>
            {screenSize > 1280 ? (
                <div className="product_gallery_filter_div">
                    <div className="gallery_filter_container">
                        <h3 className='gallery_header'>Men's Top <span className='count_bracket'>({productCount})</span></h3>
                        <div className="sort_filter_container">
                            <div className="sort_filter_1">
                                <h3 className='sort_filter_header'>Show Products:</h3>
                                <select name="" id="" className='sort_dropdown' onChange={(e) => setProductPerPage(e.target.value)} value={productPerPage}>
                                    <option value="9" >9</option>
                                    <option value="18">18</option>
                                    <option value="27">27</option>

                                </select>
                            </div>
                            <div className="sort_filter_1">
                                <h3 className='sort_filter_header'>Sort:</h3>
                                <select name="" id="" className='sort_dropdown'>
                                    <option value="popular" selected>POPULAR</option>
                                    <option value="newest">NEWEST</option>
                                    <option value="price_Low_to_high">PRICE - LOW TO HIGH</option>
                                    <option value="price_high_to_low">PRICE - HIGH TO LOW</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {loading ? (<Loader />) : (

                        <div className="product_gallery_div">
                            {products ? products.map(product => <ProductCard data={product} key={product._id} />) : null}
                        </div>
                    )}
                    <div className="product_gallery_pagination_container">
                        <div className="prev_bt" id='prev_bt' onClick={() => prevPage()}>Prev</div>
                        <div className="pagination_indicator_container">
                            <h2 className='pagination_header'>Page</h2>
                            <div className="pageno">{activePage} of {totalPages}</div>
                        </div>
                        <div className="next_bt" id='next_bt' onClick={() => nextPage()}>Next</div>
                    </div>
                </div>
            ) : (
                <div className="product_gallery_filter_div">
                    <div className="gallery_filter_container">
                        <h3 className='gallery_header'>Men's Top <span className='count_bracket'>(150)</span></h3>
                        <div className="filter_icon_container" onClick={openFilterSection}>
                            <img className="filter_icon" src={require('./assets/filter.png')} alt='' />
                        </div>
                    </div>
                    <div className="product_gallery_div">
                        {products ? products.map(product => <ProductCard data={product} key={product._id} />) : null}
                    </div>
                    <div className="product_gallery_pagination_container">
                        <div className="prev_bt" id='prev_bt' onClick={() => prevPage()}>Prev</div>
                        <div className="pagination_indicator_container">
                            <h2 className='pagination_header'>Page</h2>
                            <div className="pageno">{activePage} of {totalPages}</div>
                        </div>
                        <div className="next_bt" id='next_bt' onClick={() => nextPage()}>Next</div>
                    </div>
                    <div className="slide_filter" id='slide_filter'>
                        <img onClick={() => handleClosefilter()} className="filter_close_icon" src={require('./assets/close.png')} alt='' />
                        <div className="filters_menu_container">
                            <ProductTypeFilter />
                            <ProductPriceFilter />
                            <ProductSizeFilter />
                        </div>
                    </div>
                    <div className="slide_filter_bg" id='slide_filter_bg'></div>
                </div>
            )}
        </>

    )
}

export default ProductGallery