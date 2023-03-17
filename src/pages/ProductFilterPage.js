import React from 'react'
import NavBar from '../components/navbar/NavBar'
import ProductFilters from '../components/product_filter/ProductFilters'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

function ProductFilterPage() {
    return (
        <>
            <NavBar />
            <ProductFilters />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default ProductFilterPage