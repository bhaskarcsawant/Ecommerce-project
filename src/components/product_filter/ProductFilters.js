import React from 'react'
import ProductPath from '../productpath/ProductPath'
import ProductTypeFilter from './product_type_filter/ProductTypeFilter'
import ProductPriceFilter from './product_price_filter/ProductPriceFilter'
import ProductSizeFilter from './product_size_filter/ProductSizeFilter'
import './productfilters.css'
import ProductGallery from '../product_gallery/ProductGallery'
import { useState } from 'react'
import { useEffect } from 'react'

function ProductFilters() {
    const [screenSize, setScreenSize] = useState(1300)
    window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth)
    })
    useEffect(() => {
        setScreenSize(window.innerWidth)
    }, [])
    return (
        <div className="product_filters_gallery_container_main">
            <ProductPath />
            {screenSize > 1280 ? (
                <div className="product_filters_gallery_container">
                    <div className="product_filters_div">
                        <ProductTypeFilter />
                        <ProductPriceFilter />
                        <ProductSizeFilter />
                    </div>
                    <ProductGallery />
                </div>
            ) : (
                <div className="product_filters_gallery_container">
                    <ProductGallery />
                </div>
            )}
        </div>
    )
}

export default ProductFilters