import React from 'react'
import BannerSection from '../components/bannersection/BannerSection'
import BuildTrust from '../components/buildtrust/BuildTrust'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/herosection/HeroSection'
import NavBar from '../components/navbar/NavBar'
import NewsLetter from '../components/newsletter/NewsLetter'
import ProductCarousel from '../components/product_carousel/ProductCarousel'
import NewProducts from '../components/todaysproducts/NewProducts'


function Home() {
    return (
        <>

            <NavBar />
            <HeroSection />
            <BannerSection />
            <ProductCarousel />
            <NewProducts />
            <BuildTrust />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home