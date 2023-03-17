import React from 'react'
import NavBar from '../components/navbar/NavBar'
import ProductViewDetails from '../components/productviewdetails/ProductViewDetails'
import SaleNote from '../components/salenote/SaleNote'
import ProductCarousel from '../components/product_carousel/ProductCarousel'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

function Productview() {

    return (
        <>
            <SaleNote />
            <NavBar />
            <ProductViewDetails />
            <ProductCarousel />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Productview